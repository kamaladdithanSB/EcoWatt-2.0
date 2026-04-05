'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/lib/nav';
import { Activity, Zap, TrendingUp, Cpu, Calculator } from 'lucide-react';
import styles from './AppLayout.module.css';

const ICONS = [Activity, Zap, Cpu, Calculator, TrendingUp];

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Activity color="#00FFFF" size={28} />
          EcoWattAI
        </div>
        <nav className={styles.nav}>
          {NAVIGATION.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};
