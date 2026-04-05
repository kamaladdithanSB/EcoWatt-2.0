'use client';
import { AntigravityCard } from '@/components/ui/AntigravityCard';
import { KineticButton } from '@/components/ui/KineticButton';
import { Zap, Leaf, MonitorPlay, Activity, ShieldCheck, ChevronUp, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CalculatorPage() {
  const [energySaved, setEnergySaved] = useState(4200);
  const [uptime, setUptime] = useState(8760);
  const [logs, setLogs] = useState<string[]>([
    "[LOG_12.04] CALCULATING VECTOR OFFSET...",
    "[LOG_12.05] GRID MATCH SUCCESS: TRUE",
    "[LOG_12.06] CARBON_VALUATION_ADJUSTED: +0.02%",
    "[LOG_12.07] RUNNING IMPACT SIMULATION..."
  ]);

  // Derived metrics based on UI interaction
  const carbonOffset = Math.round(energySaved * 0.1147); // random formula
  const economicRecovery = Math.round(energySaved * 0.29 + uptime * 0.005);
  const ROI = ((economicRecovery / 5000) * 100).toFixed(1);
  const trees = Math.round(carbonOffset / 21);
  const lifetimeRev = 142500 + economicRecovery;

  const handleRecalibrate = () => {
    setLogs(prev => [...prev.slice(1), `[LOG_${(Math.random()*100).toFixed(2)}] SYSTEM RECALIBRATED: OK`]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '4rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
            <h1 className="headline" style={{ fontSize: '2rem', letterSpacing: '2px', margin: 0 }}>ECOWATT AI</h1>
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>| Network Status: Optimal</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Zap size={18} color="#FFF" />
          <Leaf size={18} color="var(--on-surface-variant)" />
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.7rem', letterSpacing: '1px', color: 'var(--primary)' }}>
            SEARCH_SYSTEM ⌘
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(600px, 2fr) 1fr', gap: '1.5rem' }}>
        
        {/* Main Interface Block */}
        <AntigravityCard style={{ padding: 0, overflow: 'hidden', background: '#121212', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
          <div style={{ padding: '3rem 3rem', background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '4px', marginBottom: '1rem', fontWeight: 600 }}>SYSTEM IMPACT ANALYSIS</div>
                <h2 className="headline" style={{ fontSize: '3rem', letterSpacing: '-1px', margin: 0, color: '#FFF' }}>REAL-TIME METER</h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'var(--secondary)', fontSize: '0.65rem', letterSpacing: '2px', marginBottom: '0.5rem', fontWeight: 600 }}>ACTIVE_NODE_01</div>
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
                  <div style={{ width: 6, height: 16, background: 'var(--secondary)' }} />
                  <div style={{ width: 6, height: 20, background: 'var(--secondary)' }} />
                  <div style={{ width: 6, height: 14, background: 'var(--secondary)', opacity: 0.5 }} />
                  <div style={{ width: 6, height: 18, background: 'var(--secondary)', opacity: 0.2 }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '3rem' }}>
              {/* Carbon Offset */}
              <div style={{ position: 'relative' }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>CARBON OFFSET (CO2E)</div>
                <div className="data-mono" style={{ fontSize: '5rem', fontWeight: 700, color: '#FFF', lineHeight: 1, textShadow: '0 0 40px rgba(0,255,255,0.4)', display: 'flex', alignItems: 'baseline' }}>
                  {carbonOffset}<span style={{ fontSize: '2rem', color: 'var(--primary)', marginLeft: '0.5rem' }}>kg</span>
                </div>
                <div style={{ position: 'absolute', bottom: -20, left: 0, width: '100%', height: '4px', background: 'rgba(0,255,255,0.1)', borderRadius: '2px' }}>
                  <div style={{ width: '60%', height: '100%', background: 'var(--primary)', borderRadius: '2px', boxShadow: '0 0 10px var(--primary)' }} />
                </div>
              </div>

              {/* Economic Recovery */}
              <div style={{ position: 'relative' }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>ECONOMIC RECOVERY</div>
                <div className="data-mono" style={{ fontSize: '5rem', fontWeight: 700, color: 'var(--secondary)', lineHeight: 1, textShadow: '0 0 40px rgba(76,227,70,0.4)', display: 'flex', alignItems: 'baseline' }}>
                  {economicRecovery.toLocaleString()}<span style={{ fontSize: '2rem', color: 'var(--secondary)', opacity: 0.5, marginLeft: '0.5rem' }}>U</span>
                </div>
                <div style={{ position: 'absolute', bottom: -20, left: 0, width: '100%', height: '4px', background: 'rgba(76,227,70,0.1)', borderRadius: '2px' }}>
                  <div style={{ width: '80%', height: '100%', background: 'var(--secondary)', borderRadius: '2px', boxShadow: '0 0 10px var(--secondary)' }} />
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5rem' }}>
              <div style={{ display: 'flex', gap: '4rem' }}>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>EFFICIENCY RATIO</div>
                  <div style={{ fontSize: '1.25rem', fontFamily: 'monospace', color: '#FFF' }}>0.94 <span style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>+2.1%</span></div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>GRID LOAD IMPACT</div>
                  <div style={{ fontSize: '1.25rem', fontFamily: 'monospace', color: '#FFF' }}>-12.4%</div>
                </div>
              </div>
              
              <button 
                onClick={handleRecalibrate}
                style={{ 
                  background: '#FFF', 
                  color: '#000', 
                  border: 'none', 
                  padding: '1rem 2rem', 
                  fontFamily: 'var(--font-headline)', 
                  fontWeight: 600, 
                  letterSpacing: '2px', 
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                RECALIBRATE SYSTEM ↻
              </button>
            </div>
          </div>
        </AntigravityCard>

        {/* Right Sidebar Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <AntigravityCard style={{ background: '#121212', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <Zap size={20} color="var(--primary)" />
              <div style={{ fontSize: '0.875rem', letterSpacing: '2px', fontWeight: 600 }}>INPUT PARAMETERS</div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)' }}>ENERGY SAVED (KWH)</label>
                <div style={{ fontFamily: 'monospace', fontSize: '1rem', color: '#FFF' }}>{energySaved.toLocaleString()}</div>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="10000" 
                value={energySaved} 
                onChange={(e) => setEnergySaved(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary)' }} 
              />
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)' }}>SYSTEM UPTIME (HRS)</label>
                <div style={{ fontFamily: 'monospace', fontSize: '1rem', color: '#FFF' }}>{uptime.toLocaleString()}</div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="8760" 
                value={uptime} 
                onChange={(e) => setUptime(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary)' }} 
              />
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <div style={{ width: 40, height: 40, borderRadius: '8px', background: 'rgba(76,227,70,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <Leaf size={20} color="var(--secondary)" />
               </div>
               <div>
                 <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>PROJECTED ANNUAL ROI</div>
                 <div style={{ fontSize: '1.25rem', fontFamily: 'monospace', color: '#FFF', fontWeight: 600 }}>{ROI}%</div>
               </div>
            </div>
          </AntigravityCard>

          <AntigravityCard style={{ flex: 1, background: '#121212', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>
              {logs.map((log, i) => <div key={i}>{log}</div>)}
            </div>
          </AntigravityCard>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <AntigravityCard style={{ background: '#121212', borderLeft: '4px solid var(--primary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', marginBottom: '0.5rem' }}>TOTAL ACCUMULATED</div>
          <h3 className="headline" style={{ fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>LIFETIME REVENUE</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontFamily: 'monospace', color: '#FFF' }}>
            <TrendingUp size={18} color="var(--secondary)" />
            ${lifetimeRev.toLocaleString()}.00
          </div>
          {/* Faint bar graph overlay */}
          <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, height: 60, display: 'flex', gap: '2px', alignItems: 'flex-end', opacity: 0.2 }}>
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} style={{ flex: 1, background: '#FFF', height: `${20 + Math.random() * 80}%` }} />
            ))}
          </div>
        </AntigravityCard>

        <AntigravityCard style={{ background: '#121212' }}>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', marginBottom: '0.5rem' }}>IMPACT BENCHMARK</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 className="headline" style={{ fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>GLOBAL RANK</h3>
              <div style={{ fontSize: '3rem', fontFamily: 'monospace', color: '#FFF', fontWeight: 700, lineHeight: 1 }}>
                #14<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', fontWeight: 400, marginLeft: '0.5rem' }}>IN SECTOR</span>
              </div>
            </div>
            <div style={{ width: 40, height: 40, borderRadius: '8px', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} color="var(--primary)" />
            </div>
          </div>
        </AntigravityCard>

        <AntigravityCard style={{ background: '#121212', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', marginBottom: '0.5rem' }}>ENVIRONMENTAL EQUIVALENCE</div>
          <h3 className="headline" style={{ fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>TREE OFFSET</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontFamily: 'monospace', color: '#FFF', fontWeight: 700, lineHeight: 1 }}>{trees.toLocaleString()}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--secondary)', letterSpacing: '1px', marginTop: '0.5rem' }}>TREES PLANTED</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontFamily: 'monospace', color: '#FFF', fontWeight: 700, lineHeight: 1 }}>{(trees/250).toFixed(1)}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--secondary)', letterSpacing: '1px', marginTop: '0.5rem' }}>ACRES RESTORED</div>
            </div>
          </div>
          {/* Abstract tree shape */}
          <div style={{ position: 'absolute', bottom: -20, right: -10, color: 'rgba(255,255,255,0.05)' }}>
            <ChevronUp size={120} strokeWidth={8} />
          </div>
          <div style={{ position: 'absolute', bottom: -20, right: -40, width: 80, height: 80, background: 'var(--primary)', filter: 'blur(40px)', opacity: 0.3 }} />
        </AntigravityCard>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
         <div style={{ height: 180, background: 'rgba(255,255,255,0.02)', borderRadius: '16px', position: 'relative', overflow: 'hidden', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid rgba(255,255,255,0.05)' }}>
           {/* Fake hardware picture background using gradient overlay */}
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 4px)', zIndex: 0 }} />
           <div style={{ position: 'relative', zIndex: 1 }}>
             <div style={{ color: 'var(--primary)', fontSize: '0.65rem', letterSpacing: '2px', fontWeight: 600, marginBottom: '0.5rem' }}>INTERNAL DIAGNOSTICS</div>
             <h3 className="headline" style={{ fontSize: '1.5rem', margin: 0 }}>HARDWARE STATUS: STABLE</h3>
           </div>
         </div>

         <div style={{ height: 180, background: 'rgba(255,255,255,0.02)', borderRadius: '16px', position: 'relative', overflow: 'hidden', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid rgba(255,255,255,0.05)' }}>
           {/* Fake network image using gradient overlay */}
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 70% 30%, rgba(76,227,70,0.1) 0%, transparent 70%)', zIndex: 0 }} />
           <div style={{ position: 'relative', zIndex: 1 }}>
             <div style={{ color: 'var(--secondary)', fontSize: '0.65rem', letterSpacing: '2px', fontWeight: 600, marginBottom: '0.5rem' }}>REGIONAL DISTRIBUTION</div>
             <h3 className="headline" style={{ fontSize: '1.5rem', margin: 0 }}>MAXIMIZING GRID LOAD</h3>
           </div>
         </div>
      </div>
      
      <footer style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
         <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
           <h4 className="headline" style={{ margin: 0, fontSize: '1rem', letterSpacing: '2px' }}>ECOWATT AI</h4>
           <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>v4.0.2-STABLE</div>
         </div>
         <div style={{ display: 'flex', gap: '2rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', letterSpacing: '1px' }}>
           <div>DOCUMENTATION</div>
           <div>API KEYS</div>
           <div>LEGAL</div>
         </div>
         <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', letterSpacing: '1px' }}>
           © 2024 NEURAL ENERGY SYSTEMS INC.
         </div>
      </footer>
    </div>
  );
}
