import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Check if we need to seed
    const count = await prisma.energyData.count();
    if (count > 0) {
      return NextResponse.json({ message: 'Already seeded' });
    }

    // Create UserStats
    await prisma.userStats.create({
      data: {
        greenScore: 785,
        treesPlanted: 14.2,
        co2SavedKg: 320.5,
      }
    });

    // Create 24 hours of fake usage
    const now = new Date();
    now.setMinutes(0,0,0);
    
    const data = [];
    for (let i = 24; i >= 0; i--) {
      const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
      // Peak hours 17:00-21:00 have higher consumption
      const hour = timestamp.getHours();
      let base = 1.0 + Math.random() * 0.5;
      if (hour >= 17 && hour <= 21) {
        base += 2.5 + Math.random() * 1.5;
      } else if (hour >= 6 && hour <= 9) {
        base += 1.0 + Math.random();
      }
      
      data.push({
        timestamp,
        consumption: parseFloat(base.toFixed(2)),
        temperature: 20 + Math.random() * 5,
      });
    }

    await prisma.energyData.createMany({
      data
    });

    return NextResponse.json({ message: 'Seeded successfully', total: data.length });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
