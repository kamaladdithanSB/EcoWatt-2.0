'use client';
import { AntigravityCard } from '@/components/ui/AntigravityCard';
import { KineticButton } from '@/components/ui/KineticButton';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';
import { Zap, Leaf, MonitorPlay, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SimulationPage() {
  const [isActive, setIsActive] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => setOffset(o => o + 0.2), 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);
  
  // Generating a deterministic wavy dataset for the visual
  const chartData = Array.from({ length: 24 }).map((_, i) => {
    const time = `${i < 10 ? '0' : ''}${i}:00`;
    const wave = (i + offset) * 0.5;
    const cur = 300 + Math.sin(wave) * 100 + Math.random() * 50;
    // Optimized is slightly lower overall, but significantly lower near the peaks
    const opt = cur - (Math.abs(Math.sin(wave)) * 80) - 20; 
    return {
      time,
      current: Math.round(cur),
      optimized: Math.round(opt)
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '4rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
            <h1 className="headline" style={{ fontSize: '2rem', letterSpacing: '2px', margin: 0, fontStyle: 'italic' }}>ECOWATT AI</h1>
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>| Network Status: Optimal</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.8rem', letterSpacing: '1px', color: 'var(--on-surface-variant)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }} />
             LIVE LINK
          </div>
          <div>SYSTEM LATENCY: 4MS</div>
          <div>EFFICIENCY INDEX: 98.4%</div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Zap size={18} color="#FFF" />
            <Leaf size={18} color="var(--on-surface-variant)" />
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
        <div>
           <h2 className="headline" style={{ fontSize: '2.5rem', fontStyle: 'italic', margin: 0, opacity: 0.9 }}>REAL-TIME SIMULATION</h2>
           <p style={{ color: 'var(--on-surface-variant)', letterSpacing: '2px', fontSize: '0.875rem', marginTop: '0.5rem' }}>PRECISION TERMINAL FOR ENERGY OPTIMIZATION ANALYSIS</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--on-surface-variant)' }}>SIMULATION MODE</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => setIsActive(!isActive)}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{isActive ? 'Active' : 'Paused'}</span>
            <div style={{ width: 40, height: 20, borderRadius: '10px', background: isActive ? 'var(--secondary)' : 'rgba(255,255,255,0.2)', position: 'relative', transition: '0.3s' }}>
              <div style={{ position: 'absolute', top: 2, left: isActive ? 22 : 2, width: 16, height: 16, borderRadius: '50%', background: '#FFF', transition: '0.3s', boxShadow: '0 0 5px rgba(0,0,0,0.3)' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Left Column Data Visualization */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <AntigravityCard glass style={{ padding: 0, overflow: 'hidden', borderLeft: '3px solid var(--primary)' }}>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', letterSpacing: '1px', margin: 0 }}>Energy Load Projection</h3>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginTop: '0.25rem' }}>24-hour predictive modeling vs historical baseline</p>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '4px', background: 'var(--primary)', opacity: 0.8 }} />
                    CURRENT STRATEGY
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '4px', background: 'var(--secondary)' }} />
                    AI-OPTIMIZED STRATEGY
                  </div>
                </div>
              </div>

              <div style={{ height: 350, width: '100%', position: 'relative', marginTop: '-1rem' }}>
                <ResponsiveContainer>
                  <AreaChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="optArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--secondary)" stopOpacity={0.4}/>
                        <stop offset="100%" stopColor="var(--secondary)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={['dataMin - 50', 'dataMax + 50']} />
                    {/* Tooltip to perfectly match the design crosshair */}
                    <Tooltip 
                      contentStyle={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                      itemStyle={{ color: '#FFF' }}
                      cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    
                    {/* Current Strategy Line (Dotted Cyan bg line) */}
                    <Line 
                      type="monotone" 
                      dataKey="current" 
                      stroke="var(--primary)" 
                      strokeWidth={2} 
                      strokeDasharray="6 6" 
                      dot={false}
                      activeDot={{ r: 6, fill: 'var(--primary)' }}
                      animationDuration={2000}
                    />
                    
                    {/* Optimized Strategy Area (Glowing Green foreground) */}
                    <Area 
                      type="monotone" 
                      dataKey="optimized" 
                      stroke="var(--secondary)" 
                      strokeWidth={3} 
                      fill="url(#optArea)" 
                      style={{ filter: 'drop-shadow(0 0 10px rgba(76,227,70,0.5))' }}
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </AntigravityCard>

          {/* Simulation Controls Block */}
          <AntigravityCard glass style={{ borderLeft: '3px solid var(--primary)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
               <div style={{ fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--on-surface-variant)' }}>SIMULATION VELOCITY</div>
               <div style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px' }}>1.5x RT</div>
             </div>

             <div style={{ position: 'relative', width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginBottom: '3rem' }}>
               <div style={{ position: 'absolute', top: -14, left: '60%', width: 12, height: 32, background: 'var(--primary)', borderRadius: '4px', boxShadow: '0 0 15px var(--primary)' }} />
             </div>

             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ display: 'flex', gap: '1rem' }}>
                 <KineticButton variant={isActive ? "secondary" : "primary"} style={{ padding: '0.75rem 2rem', letterSpacing: '2px', fontSize: '0.875rem', color: isActive ? '#FFF' : '#000' }} onClick={() => setIsActive(!isActive)}>
                   {isActive ? 'PAUSE SIMULATION' : 'START SIMULATION'}
                 </KineticButton>
                 <KineticButton variant="secondary" style={{ padding: '0.75rem 2rem', letterSpacing: '2px', fontSize: '0.875rem' }} onClick={() => setIsActive(false)}>
                   RESET
                 </KineticButton>
               </div>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', letterSpacing: '2px', color: isActive ? 'var(--secondary)' : 'var(--on-surface-variant)' }}>
                 <MonitorPlay size={18} color={isActive ? "var(--secondary)" : "var(--on-surface-variant)"} />
                 {isActive ? 'LIVE FEED ACTIVE' : 'SIMULATION HALTED'}
               </div>
             </div>
          </AntigravityCard>

        </div>

        {/* Right Column Stats & Logs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <AntigravityCard glass style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '3px', color: 'var(--on-surface-variant)', marginBottom: '3rem' }}>
              PROJECTED ANNUAL SAVINGS
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
               {/* 42.8 Split numbers */}
               <div style={{ padding: '1rem 0.75rem', background: 'rgba(76,227,70,0.05)', border: '1px solid rgba(76,227,70,0.1)', borderRadius: '8px', color: 'var(--secondary)', fontSize: '4rem', fontWeight: 700, lineHeight: 1, boxShadow: 'inset 0 0 20px rgba(76,227,70,0.05), 0 0 15px rgba(76,227,70,0.1)' }}>4</div>
               <div style={{ padding: '1rem 0.75rem', background: 'rgba(76,227,70,0.05)', border: '1px solid rgba(76,227,70,0.1)', borderRadius: '8px', color: 'var(--secondary)', fontSize: '4rem', fontWeight: 700, lineHeight: 1, boxShadow: 'inset 0 0 20px rgba(76,227,70,0.05), 0 0 15px rgba(76,227,70,0.1)' }}>2</div>
               <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '1rem', color: 'var(--secondary)', fontSize: '2rem', fontWeight: 700 }}>.</div>
               <div style={{ padding: '1rem 0.75rem', background: 'rgba(76,227,70,0.05)', border: '1px solid rgba(76,227,70,0.1)', borderRadius: '8px', color: 'var(--secondary)', fontSize: '4rem', fontWeight: 700, lineHeight: 1, boxShadow: 'inset 0 0 20px rgba(76,227,70,0.05), 0 0 15px rgba(76,227,70,0.1)' }}>8</div>
            </div>
            
            <div style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '3rem', color: '#FFF' }}>MWH</div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
               <div style={{ textAlign: 'center' }}>
                 <div style={{ fontSize: '0.65rem', letterSpacing: '1px', color: 'var(--on-surface-variant)', marginBottom: '0.5rem' }}>EFFICIENCY GAIN</div>
                 <div style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontWeight: 600 }}>+24.5%</div>
               </div>
               <div style={{ textAlign: 'center' }}>
                 <div style={{ fontSize: '0.65rem', letterSpacing: '1px', color: 'var(--on-surface-variant)', marginBottom: '0.5rem' }}>COST REDUCTION</div>
                 <div style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 600 }}>-$12.4k</div>
               </div>
            </div>
          </AntigravityCard>

          <AntigravityCard glass style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ fontSize: '0.875rem', letterSpacing: '2px', margin: 0, marginBottom: '1.5rem' }}>NEURAL ENGINE LOGS</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                 <div style={{ marginTop: '0.2rem' }}><MonitorPlay size={14} color="var(--primary)" /></div>
                 <div>
                   <span style={{ color: 'var(--on-surface-variant)' }}>Analyzing grid topology at 0.05ms resolution...</span><br/>
                   <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>TIMESTAMP: 14:22:01.842</span>
                 </div>
               </div>
               
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                 <div style={{ marginTop: '0.2rem' }}>
                   <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                 </div>
                 <div>
                   <span style={{ color: '#FFF' }}>Optimization matrix convergence achieved at 99.8% confidence.</span><br/>
                   <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>TIMESTAMP: 14:22:01.885</span>
                 </div>
               </div>

               <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                 <div style={{ marginTop: '0.2rem' }}><RotateCcw size={14} color="var(--on-surface-variant)" /></div>
                 <div>
                   <span style={{ color: 'var(--on-surface-variant)' }}>Recalculating peak thermal thresholds...</span><br/>
                   <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>TIMESTAMP: 14:22:01.121</span>
                 </div>
               </div>
            </div>
          </AntigravityCard>

        </div>
      </div>
    </div>
  );
}
