import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { kmeans } from 'ml-kmeans';
import { SimpleLinearRegression } from 'ml-regression-simple-linear';

export async function GET() {
  try {
    const data = await prisma.energyData.findMany({
      orderBy: { timestamp: 'asc' },
    });

    if (data.length === 0) {
      return NextResponse.json({ error: 'No data' }, { status: 404 });
    }

    // 1. K-Means Clustering (Find Peak vs Off-Peak groups)
    // We cluster by [hourOfDay, consumption]
    const dataset = data.map(d => [d.timestamp.getHours(), d.consumption]);
    
    let clusters;
    try {
      clusters = kmeans(dataset, 2, { initialization: 'kmeans++' });
    } catch(e) {
      // fallback if not enough data
      clusters = { clusters: dataset.map(() => 0), centroids: [] };
    }

    // Assign labels
    const clusteredData = data.map((d, i) => ({
      ...d,
      cluster: clusters.clusters[i],
    }));

    // 2. Simple Linear Regression (Trend prediction)
    // X = index of data point (representing time), Y = consumption
    const x = data.map((_, i) => i);
    const y = data.map(d => d.consumption);
    
    const regression = new SimpleLinearRegression(x, y);
    const nextIndex = data.length;
    const predictedNext = regression.predict(nextIndex);

    // Compute basic stats
    const totalConsumption = y.reduce((a, b) => a + b, 0);
    const averageConsumption = totalConsumption / y.length;

    // Smart Suggestions Engine Basis
    const highUsagePoints = clusteredData.filter(d => d.consumption > averageConsumption * 1.5);
    
    return NextResponse.json({
      metrics: {
        totalConsumption,
        averageConsumption,
        predictedNext,
        status: predictedNext > averageConsumption ? 'warning' : 'optimal'
      },
      clusters: clusters.centroids,
      data: clusteredData,
      anomalies: highUsagePoints.length
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
