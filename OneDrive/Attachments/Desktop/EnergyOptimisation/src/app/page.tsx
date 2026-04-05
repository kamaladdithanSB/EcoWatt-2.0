'use client';
import React, { useEffect, useState } from 'react';
import { AntigravityCard } from '@/components/ui/AntigravityCard';
import { EnergyMonolith } from '@/components/ui/EnergyMonolith';
import { KineticButton } from '@/components/ui/KineticButton';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const res = await fetch('/api/analytics');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        // Automatically seed and retry if no data found
        await fetch('/api/seed');
        const retryRes = await fetch('/api/analytics');
        setData(await retryRes.json());
      }
    } catch(e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <div className="p-8"><h2 className="headline">Initializing Engine...</h2></div>;

  const chartData = data?.data?.map((d: any) => ({
    time: new Date(d.timestamp).getHours() + ':00',
    consumption: d.consumption,
    cluster: d.cluster,
  })) || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <header>
        <h1 className="headline" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>AI Analytics Core</h1>
        <p style={{ color: 'var(--on-surface-variant)' }}>Real-time clustering and forecasting engine</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <AntigravityCard glass hasGlow>
          <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>TOTAL USAGE (24H)</div>
          <div className="data-mono" style={{ fontSize: '2.5rem', color: '#FFF' }}>
            {data?.metrics?.totalConsumption?.toFixed(2)} <span style={{ fontSize: '1rem', color: 'var(--primary)' }}>kWh</span>
          </div>
        </AntigravityCard>

        <AntigravityCard glass>
          <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>NEXT HOUR FORECAST</div>
          <div className="data-mono" style={{ fontSize: '2.5rem', color: '#FFF' }}>
            {data?.metrics?.predictedNext?.toFixed(2)} <span style={{ fontSize: '1rem', color: 'var(--secondary)' }}>kWh</span>
          </div>
        </AntigravityCard>

        <EnergyMonolith>
          <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>AI STATUS</div>
          <div className="data-mono" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>
            OPTIMAL
          </div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>K-Means detected {data?.anomalies} peak anomalies.</p>
        </EnergyMonolith>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <AntigravityCard glass style={{ height: '400px' }}>
          <h3 className="headline" style={{ marginBottom: '1.5rem' }}>Consumption Trend</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="var(--outline-variant)" tick={{ fill: 'var(--on-surface-variant)', fontSize: 12 }} />
                <YAxis stroke="var(--outline-variant)" tick={{ fill: 'var(--on-surface-variant)', fontSize: 12 }} />
                <Tooltip contentStyle={{ background: 'var(--surface-container-highest)', border: 'none', borderRadius: '4px', backdropFilter: 'blur(10px)' }} />
                <Area type="monotone" dataKey="consumption" stroke="var(--primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorConsumption)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </AntigravityCard>

        <AntigravityCard glass style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 className="headline">Data Ingestion</h3>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem' }}>Upload raw CSV dataset to run AI simulation.</p>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <KineticButton variant="secondary" onClick={() => document.getElementById('upload')?.click()}>
              SELECT DATASET
            </KineticButton>
            <input type="file" id="upload" style={{ display: 'none' }} accept=".csv" onChange={async (e) => {
              if (e.target.files?.length) {
                const formData = new FormData();
                formData.append('file', e.target.files[0]);
                await fetch('/api/upload', { method: 'POST', body: formData });
                loadData();
              }
            }} />
          </div>
        </AntigravityCard>
      </div>
    </div>
  );
}
