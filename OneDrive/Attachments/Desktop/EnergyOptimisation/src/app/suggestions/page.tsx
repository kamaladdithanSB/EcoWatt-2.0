'use client';
import { AntigravityCard } from '@/components/ui/AntigravityCard';
import { KineticButton } from '@/components/ui/KineticButton';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { Sparkles, TrendingDown, Clock, Snowflake, Car, Computer, Server } from 'lucide-react';
import { useState, useEffect } from 'react';

const BAR_DATA = [
  { time: '12:00', value: 20 },
  { time: '13:00', value: 25 },
  { time: '14:00', value: 35 },
  { time: '15:00', value: 30 },
  { time: '16:00', value: 50 },
  { time: '17:00', value: 65 },  
  { time: '18:00', value: 80, isPeak: true },
  { time: '19:00', value: 90, isPeak: true },
  { time: '20:00', value: 75, isPeak: true }, 
  { time: '21:00', value: 45 },
  { time: '22:00', value: 35 },
  { time: '23:00', value: 20 },
  { time: '00:00', value: 15 },
];

export default function SuggestionsPage() {
  const [ghostAuthorized, setGhostAuthorized] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Initial logs
    setLogs([
      "[14:02:11] Analyzing grid frequency variance...",
      "[14:02:15] Identifying peak-shaving candidates...",
      "[14:02:19] Suggestion set alpha deployed.",
      "[14:02:22] Monitoring consumer response latencies."
    ]);
  }, []);

  const authorizeGhostProtocol = () => {
    setAuthLoading(true);
    setTimeout(() => {
      setAuthLoading(false);
      setGhostAuthorized(true);
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Ghost Protocol Authorized. 15 nodes deprioritized.`].slice(-4));
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '2rem' }}>
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 className="headline" style={{ fontSize: '1.5rem', letterSpacing: '2px', fontStyle: 'italic', margin: 0 }}>ECOWATT AI</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600 }}>
             Network Status: Optimal <Sparkles size={16} />
          </div>
        </div>
        
        <h2 className="headline" style={{ fontSize: '3rem', margin: 0, letterSpacing: '-1px' }}>SMART SUGGESTIONS</h2>
        <p style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', marginTop: '0.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
          AI-optimized efficiency protocols generated in real-time. Precision instruments for waste reduction.
        </p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        {/* Main Chart Container */}
        <AntigravityCard glass style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--secondary)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '0.5rem' }}>LIVE TELEMETRY</div>
              <h3 style={{ fontSize: '1.5rem', margin: 0, letterSpacing: '1px' }}>Upcoming Peak Hours</h3>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '0.5rem' }}>CURRENT LOAD</div>
              <div style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600, fontFamily: 'monospace' }}>4.2 kW</div>
            </div>
          </div>
          
          <div style={{ height: 200, width: '100%', padding: '0 2rem 1rem 2rem' }}>
            <ResponsiveContainer>
               <BarChart data={BAR_DATA}>
                 <XAxis dataKey="time" hide />
                 <YAxis hide />
                 <Bar dataKey="value" radius={[4,4,0,0]}>
                   {BAR_DATA.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.isPeak ? 'var(--secondary)' : 'rgba(255,255,255,0.1)'} />
                   ))}
                 </Bar>
               </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem 1rem 2rem', fontSize: '0.65rem', color: 'var(--on-surface-variant)', fontFamily: 'monospace' }}>
            <span>12:00</span>
            <span>15:00</span>
            <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>18:00 PEAK</span>
            <span>21:00</span>
            <span>00:00</span>
          </div>
        </AntigravityCard>

        {/* Right Side Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
           <div>
             <Sparkles color="var(--secondary)" size={24} style={{ marginBottom: '1rem' }} />
             <div style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>Efficiency Score</div>
             <div style={{ fontSize: '3rem', color: 'var(--secondary)', fontWeight: 700, lineHeight: 1 }}>94<span style={{ fontSize: '1rem', color: 'var(--on-surface-variant)' }}>/100</span></div>
           </div>
           
           <div style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.2)', margin: '1rem 0' }} />

           <div>
             <TrendingDown color="var(--primary)" size={24} style={{ marginBottom: '1rem' }} />
             <div style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.25rem' }}>Projected Savings</div>
             <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginBottom: '0.5rem' }}>Next 30-day window</div>
             <div style={{ fontSize: '2rem', color: '#FFF', fontWeight: 700, lineHeight: 1 }}>$142.50</div>
           </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '1rem' }}>
        {/* Protocol 1 */}
        <AntigravityCard glass style={{ background: 'rgba(0,0,0,0.4)' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
             <div style={{ width: 30, height: 30, borderRadius: '8px', background: 'rgba(0,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Clock size={16} color="var(--primary)" />
             </div>
             <div style={{ fontSize: '0.65rem', color: 'var(--primary)', letterSpacing: '2px', fontWeight: 600 }}>TIME-SHIFT PROTOCOL</div>
           </div>
           
           <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '1px' }}>Delay Dishwasher Usage</h3>
           <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '2rem', minHeight: '60px' }}>
             Relocate cycle from 19:00 to 23:00 to avoid Tier 3 pricing during peak grid congestion.
           </p>

           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
             <div>
               <div style={{ fontSize: '0.6rem', color: 'var(--on-surface-variant)', letterSpacing: '1px', marginBottom: '0.25rem' }}>EST. SAVINGS</div>
               <div style={{ color: 'var(--secondary)', fontSize: '1.25rem', fontWeight: 700 }}>$12.40 <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--on-surface-variant)' }}>/mo</span></div>
             </div>
             <div style={{ textAlign: 'right' }}>
               <div style={{ fontSize: '0.6rem', color: 'var(--on-surface-variant)', letterSpacing: '1px', marginBottom: '0.25rem' }}>ENERGY</div>
               <div style={{ color: '#FFF', fontSize: '1.25rem', fontWeight: 700 }}>42 kWh</div>
             </div>
           </div>
        </AntigravityCard>

        {/* Protocol 2 */}
        <AntigravityCard glass style={{ background: 'rgba(0,0,0,0.4)' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
             <div style={{ width: 30, height: 30, borderRadius: '8px', background: 'rgba(76,227,70,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Snowflake size={16} color="var(--secondary)" />
             </div>
             <div style={{ fontSize: '0.65rem', color: 'var(--secondary)', letterSpacing: '2px', fontWeight: 600 }}>CLIMATE OPTIMIZATION</div>
           </div>
           
           <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '1px' }}>HVAC Pre-Cooling</h3>
           <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '2rem', minHeight: '60px' }}>
             Lower temperature to 68°F during morning hours (07:00-09:00) to store thermal mass for the afternoon peak.
           </p>

           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
             <div>
               <div style={{ fontSize: '0.6rem', color: 'var(--on-surface-variant)', letterSpacing: '1px', marginBottom: '0.25rem' }}>EST. SAVINGS</div>
               <div style={{ color: 'var(--secondary)', fontSize: '1.25rem', fontWeight: 700 }}>$38.15 <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--on-surface-variant)' }}>/mo</span></div>
             </div>
             <div style={{ textAlign: 'right' }}>
               <div style={{ fontSize: '0.6rem', color: 'var(--on-surface-variant)', letterSpacing: '1px', marginBottom: '0.25rem' }}>ENERGY</div>
               <div style={{ color: '#FFF', fontSize: '1.25rem', fontWeight: 700 }}>115 kWh</div>
             </div>
           </div>
        </AntigravityCard>

        {/* Protocol 3 */}
        <AntigravityCard glass style={{ background: 'rgba(0,0,0,0.4)' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
             <div style={{ width: 30, height: 30, borderRadius: '8px', background: 'rgba(0,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Car size={16} color="var(--primary)" />
             </div>
             <div style={{ fontSize: '0.65rem', color: 'var(--primary)', letterSpacing: '2px', fontWeight: 600 }}>MOBILITY CHARGE</div>
           </div>
           
           <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '1px' }}>EV Dynamic Throttling</h3>
           <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '2rem', minHeight: '60px' }}>
             Automate vehicle charging to utilize excess solar generation detected from neighborhood array.
           </p>

           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
             <div>
               <div style={{ fontSize: '0.6rem', color: 'var(--on-surface-variant)', letterSpacing: '1px', marginBottom: '0.25rem' }}>EST. SAVINGS</div>
               <div style={{ color: 'var(--secondary)', fontSize: '1.25rem', fontWeight: 700 }}>$22.00 <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--on-surface-variant)' }}>/mo</span></div>
             </div>
             <div style={{ textAlign: 'right' }}>
               <div style={{ fontSize: '0.6rem', color: 'var(--on-surface-variant)', letterSpacing: '1px', marginBottom: '0.25rem' }}>ENERGY</div>
               <div style={{ color: '#FFF', fontSize: '1.25rem', fontWeight: 700 }}>78 kWh</div>
             </div>
           </div>
        </AntigravityCard>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
        {/* Ghost Protocol */}
        <AntigravityCard style={{ background: 'linear-gradient(90deg, rgba(76,227,70,0.05) 0%, rgba(0,0,0,0) 100%)', border: '1px solid rgba(76,227,70,0.1)' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
             <div style={{ width: 180, height: 180, background: '#FFF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
               {/* Abstract Smart Plug Image */}
               <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)', borderRadius: '16px', border: '1px solid #ccc', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ width: 60, height: 60, borderRadius: '8px', background: 'var(--secondary)', boxShadow: '0 0 20px var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <div style={{ width: 30, height: 30, background: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Sparkles size={16} color="var(--secondary)" />
                   </div>
                 </div>
                 {/* Plug prongs */}
                 <div style={{ position: 'absolute', bottom: -10, left: '30%', width: 10, height: 15, background: '#999', borderRadius: '2px' }} />
                 <div style={{ position: 'absolute', bottom: -10, right: '30%', width: 10, height: 15, background: '#999', borderRadius: '2px' }} />
               </div>
             </div>
             
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.2rem 0.5rem', background: 'var(--secondary)', color: '#000', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', borderRadius: '4px' }}>HIGH IMPACT</div>
                  <div style={{ color: 'var(--secondary)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '2px', display: 'flex', alignItems: 'center' }}>VAMPIRE LOAD DEFENSE</div>
                </div>
                
                <h3 style={{ fontSize: '1.75rem', letterSpacing: '1px', margin: '0 0 1rem 0' }}>Smart Plug Network Deprioritization</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Our AI detected 15 dormant devices drawing 140W total. Enabling 'Ghost Protocol' will sever connectivity to non-essential entertainment nodes during sleep cycles (01:00-06:00).
                </p>
                
                <div style={{ marginTop: 'auto' }}>
                  <KineticButton 
                    variant={ghostAuthorized ? "secondary" : "primary"} 
                    style={{ padding: '0.75rem 1.5rem', background: ghostAuthorized ? 'rgba(255,255,255,0.1)' : '#FFF', color: ghostAuthorized ? 'var(--secondary)' : '#000', letterSpacing: '2px', fontSize: '0.8rem' }}
                    onClick={authorizeGhostProtocol}
                  >
                    {authLoading ? 'AUTHORIZING...' : ghostAuthorized ? 'PROTOCOL ACTIVE ✓' : 'AUTHORIZE PROTOCOL'}
                  </KineticButton>
                </div>
             </div>
          </div>
        </AntigravityCard>

        {/* Small Hardware health card */}
        <AntigravityCard glass style={{ background: 'rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
             <div style={{ width: 24, height: 24, borderRadius: '4px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Server size={14} color="#FFF" />
             </div>
             <div style={{ fontSize: '0.65rem', color: '#FFF', letterSpacing: '2px', fontWeight: 600 }}>HARDWARE HEALTH</div>
           </div>
           
           <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '1px' }}>Refrigerator Coil Service</h3>
           <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
             Compressor cycling frequency has increased by 14%. Maintenance suggests cleaning coils to restore nominal efficiency.
           </p>
           
           <div style={{ marginTop: 'auto', color: 'var(--secondary)', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <TrendingDown size={16} style={{ transform: 'rotate(180deg)' }} />
             +8% efficiency gain
           </div>
        </AntigravityCard>
      </div>

      {/* Footer Console Log */}
      <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--on-surface-variant)', letterSpacing: '3px' }}>LIVE AI LOGIC STREAM</div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--secondary)' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--secondary)', opacity: 0.5 }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--secondary)', opacity: 0.2 }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
          {logs.slice(-4).map((log, i) => (
             <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '4px', border: i === logs.length - 1 ? '1px solid rgba(76,227,70,0.1)' : '1px solid transparent' }}>
               {log}
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
