'use client';
import { AntigravityCard } from '@/components/ui/AntigravityCard';
import { EnergyMonolith } from '@/components/ui/EnergyMonolith';
import { KineticButton } from '@/components/ui/KineticButton';
import { Trophy, Zap, Shield, Lock, TreePine, Wind, PiggyBank, Award } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingBottom: '4rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="headline" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>ECOWATT AI</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600 }}>Network Status: Optimal</span>
          <Zap size={20} color="var(--secondary)" />
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 450px) 1fr', gap: '2.5rem' }}>
        {/* Left Side: Score Monolith */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ letterSpacing: '4px', fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginBottom: '1.5rem', fontWeight: 600 }}>
            TERMINAL GREEN SCORE
          </div>
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            aspectRatio: '1', 
            background: 'linear-gradient(135deg, rgba(0,255,255,0.1), rgba(76,227,70,0.1))',
            border: '1px solid rgba(0,255,255,0.2)',
            borderRadius: '24px',
            boxShadow: '0 0 40px rgba(76,227,70,0.15), inset 0 0 20px rgba(0,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}>
            {/* Corner Accents */}
            <div style={{ position: 'absolute', top: -2, left: -2, width: 30, height: 30, borderTop: '4px solid var(--secondary)', borderLeft: '4px solid var(--primary)' }} />
            <div style={{ position: 'absolute', bottom: -2, right: -2, width: 30, height: 30, borderBottom: '4px solid var(--secondary)', borderRight: '4px solid var(--primary)' }} />
            
            <div style={{ color: 'var(--primary)', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '1rem' }}>EFFICIENCY LEVEL</div>
            <div className="data-mono" style={{ fontSize: '6rem', color: '#FFF', textShadow: '0 0 20px rgba(255,255,255,0.5)', lineHeight: 1 }}>
              894
            </div>
            <div style={{ color: 'var(--secondary)', fontSize: '0.875rem', fontWeight: 600, marginTop: '1rem', letterSpacing: '1px' }}>
              + 12.4% WKLY
            </div>
          </div>
          
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', marginTop: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.65rem', letterSpacing: '2px', marginBottom: '0.25rem' }}>PEAK OUTPUT</div>
              <div className="data-mono" style={{ color: '#FFF', fontSize: '1.25rem' }}>99.2%</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.65rem', letterSpacing: '2px', marginBottom: '0.25rem' }}>RANK</div>
              <div className="data-mono" style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>#42</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.65rem', letterSpacing: '2px', marginBottom: '0.25rem' }}>TIER</div>
              <div className="data-mono" style={{ color: '#FFF', fontSize: '1.25rem' }}>ELITE</div>
            </div>
          </div>
        </div>

        {/* Right Side: Vault */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AntigravityCard glass style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', letterSpacing: '2px', margin: 0 }}>ACHIEVEMENT VAULT</h3>
              <Award color="var(--secondary)" size={24} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', flex: 1 }}>
              {/* Achievement 1 */}
              <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '12px', background: 'rgba(76,227,70,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(76,227,70,0.2)' }}>
                  <Trophy color="var(--secondary)" size={30} />
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>SOLAR PIONEER</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)' }}>100% Renewables 30d</div>
              </div>

              {/* Achievement 2 */}
              <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '12px', background: 'rgba(0,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(0,255,255,0.2)' }}>
                  <Zap color="var(--primary)" size={30} />
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>GRID GHOST</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)' }}>Zero Peak Consumption</div>
              </div>

              {/* Achievement 3 */}
              <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '12px', background: 'rgba(76,227,70,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(76,227,70,0.2)' }}>
                  <Shield color="var(--secondary)" size={30} />
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>SYSTEM GUARD</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)' }}>Optimal Maintenance</div>
              </div>

              {/* Achievement Locked */}
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.5 }}>
                <div style={{ width: 60, height: 60, borderRadius: '12px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Lock color="var(--on-surface-variant)" size={30} />
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>PLANET MASTER</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)' }}>Coming Soon</div>
              </div>
            </div>
            
            <KineticButton variant="primary" style={{ width: '100%', marginTop: '2rem', padding: '1.25rem', letterSpacing: '3px' }}>
              UPGRADE STRATEGY ENGINE
            </KineticButton>
          </AntigravityCard>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2 className="headline" style={{ fontSize: '2rem', marginBottom: '2rem', letterSpacing: '2px' }}>ENVIRONMENTAL IMPACT</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <AntigravityCard style={{ borderLeft: '4px solid var(--secondary)', background: 'linear-gradient(90deg, rgba(76,227,70,0.05) 0%, transparent 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(76,227,70,0.1)', borderRadius: '8px' }}><TreePine color="var(--secondary)" /></div>
              <div style={{ fontSize: '0.7rem', color: 'var(--secondary)', letterSpacing: '2px', fontWeight: 600 }}>VERIFIED</div>
            </div>
            <div className="data-mono" style={{ fontSize: '3rem', color: '#FFF', lineHeight: 1 }}>1,248</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginTop: '0.5rem' }}>Virtual Trees Planted</div>
          </AntigravityCard>

          <AntigravityCard style={{ borderLeft: '4px solid var(--primary)', background: 'linear-gradient(90deg, rgba(0,255,255,0.05) 0%, transparent 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(0,255,255,0.1)', borderRadius: '8px' }}><Wind color="var(--primary)" /></div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary)', letterSpacing: '2px', fontWeight: 600 }}>OFFSET</div>
            </div>
            <div className="data-mono" style={{ fontSize: '3rem', color: '#FFF', lineHeight: 1 }}>14.8<span style={{ fontSize: '1.5rem' }}>T</span></div>
            <div style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginTop: '0.5rem' }}>CO2 Exhaust Avoided</div>
          </AntigravityCard>

          <AntigravityCard style={{ borderLeft: '4px solid #FFF', background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}><PiggyBank color="#FFF" /></div>
              <div style={{ fontSize: '0.7rem', color: '#FFF', letterSpacing: '2px', fontWeight: 600 }}>CALCULATED</div>
            </div>
            <div className="data-mono" style={{ fontSize: '3rem', color: '#FFF', lineHeight: 1 }}>$2,410</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginTop: '0.5rem' }}>Lifetime Cost Reduction</div>
          </AntigravityCard>
        </div>
      </div>

      <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1fr', gap: '2.5rem' }}>
        <div>
          <h2 className="headline" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>GLOBAL SECTOR RANK</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Rank Row 1 */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: 40, color: 'var(--on-surface-variant)', fontWeight: 600 }}>40</div>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', marginRight: '1rem' }} />
              <div style={{ flex: 1, fontSize: '0.9rem', letterSpacing: '1px' }}>NEURAL_FLUX</div>
              <div className="data-mono" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>912 PTS</div>
            </div>
            {/* Rank Row 2 (USER) */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: 'rgba(0,255,255,0.05)', borderRadius: '8px', border: '1px solid var(--primary)' }}>
              <div style={{ width: 40, color: 'var(--primary)', fontWeight: 600 }}>41</div>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--primary)', marginRight: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><UserIcon color="#000" size={16} /></div>
              <div style={{ flex: 1, fontSize: '0.9rem', letterSpacing: '1px', fontWeight: 600 }}>USER_TERMINAL (YOU)</div>
              <div className="data-mono" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>894 PTS</div>
            </div>
            {/* Rank Row 3 */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: 40, color: 'var(--on-surface-variant)', fontWeight: 600 }}>42</div>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', marginRight: '1rem' }} />
              <div style={{ flex: 1, fontSize: '0.9rem', letterSpacing: '1px' }}>CYBER_DRIVE</div>
              <div className="data-mono" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>881 PTS</div>
            </div>
          </div>
        </div>

        <div>
           <AntigravityCard glass style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
             <div style={{ width: 60, height: 60, borderRadius: '12px', background: 'rgba(76,227,70,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--secondary)' }}>
                <Award color="var(--secondary)" size={30} />
             </div>
             <h3 style={{ fontSize: '1.5rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>PROMOTION ELIGIBLE</h3>
             <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', maxWidth: '300px', marginBottom: '2rem' }}>
               Increase efficiency by 2.4% this week to ascend to the <span style={{ color: 'var(--primary)', fontWeight: 600 }}>DIAMOND GRID TIER</span>.
             </p>
             <div style={{ width: '80%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', display: 'flex', overflow: 'hidden' }}>
               <div style={{ width: '68%', background: 'var(--secondary)' }} />
             </div>
           </AntigravityCard>
        </div>
      </div>
    </div>
  );
}

function UserIcon({ color, size }: { color: string, size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}
