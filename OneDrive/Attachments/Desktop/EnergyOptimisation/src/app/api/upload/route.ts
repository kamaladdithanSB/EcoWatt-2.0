import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Papa from 'papaparse';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const text = await file.text();
    const result = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    if (result.errors.length > 0) {
      return NextResponse.json({ error: 'Error parsing CSV', details: result.errors }, { status: 400 });
    }

    const rows = result.data as any[];
    // Basic mapping: Look for Date/Time and Energy/Consumption fields
    const dataToInsert = rows.map((row) => {
      // Find timestamp
      const timeKey = Object.keys(row).find(k => k.toLowerCase().includes('time') || k.toLowerCase().includes('date'));
      const consumptionKey = Object.keys(row).find(k => k.toLowerCase().includes('energy') || k.toLowerCase().includes('kwh') || k.toLowerCase().includes('consumption'));
      
      const ts = timeKey ? new Date(row[timeKey]) : new Date();
      const consumption = consumptionKey ? parseFloat(row[consumptionKey]) : 0;
      
      return {
        timestamp: isNaN(ts.getTime()) ? new Date() : ts,
        consumption: isNaN(consumption) ? 0 : consumption,
      };
    });

    // Delete old data for demo purposes, or append
    await prisma.energyData.deleteMany();
    await prisma.energyData.createMany({
      data: dataToInsert
    });

    return NextResponse.json({ message: 'Upload successful', rowsInserted: dataToInsert.length });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
