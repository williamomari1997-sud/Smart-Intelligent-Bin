
import React from 'react';
import Layout from '../components/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Mon', value: 65 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 80 },
  { name: 'Thu', value: 74 },
  { name: 'Fri', value: 30 },
  { name: 'Sat', value: 10 },
  { name: 'Sun', value: 5 },
];

const Analytics: React.FC = () => {
  return (
    <Layout title="Analytics" showBack>
      <main className="p-4 space-y-6">
        {/* Time Segmented Control */}
        <div className="flex p-1 bg-slate-200 dark:bg-surface-dark rounded-xl">
          <button className="flex-1 py-2 text-center text-sm font-semibold rounded-lg transition-all text-slate-500">Day</button>
          <button className="flex-1 py-2 text-center text-sm font-semibold rounded-lg bg-white dark:bg-primary shadow-sm text-slate-900 dark:text-white">Week</button>
          <button className="flex-1 py-2 text-center text-sm font-semibold rounded-lg transition-all text-slate-500">Month</button>
        </div>

        {/* Main Chart */}
        <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Current Fill Level</p>
              <h3 className="text-4xl font-extrabold mt-1">74<span className="text-lg font-bold text-primary">%</span></h3>
            </div>
            <div className="flex items-center gap-1 text-orange-500 bg-orange-500/10 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="text-xs font-bold">+12%</span>
            </div>
          </div>
          
          <div className="h-48 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#0b868e' : '#0b868e44'} />
                  ))}
                </Bar>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 'bold', fill: '#94a3b8' }}
                  interval={0}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bento Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-lg border border-slate-100 dark:border-slate-800">
            <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-primary">delete_sweep</span>
            </div>
            <p className="text-xs font-semibold text-slate-500">Weekly Avg</p>
            <p className="text-2xl font-bold mt-1">4.2<span className="text-xs ml-1 text-slate-400">kg</span></p>
            <p className="text-[10px] text-green-500 font-bold mt-1">↓ 5% this wk</p>
          </div>
          
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-lg border border-slate-100 dark:border-slate-800">
            <div className="size-10 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-orange-500">event_repeat</span>
            </div>
            <p className="text-xs font-semibold text-slate-500">Full in</p>
            <p className="text-2xl font-bold mt-1">2.4<span className="text-xs ml-1 text-slate-400">Days</span></p>
            <p className="text-[10px] text-slate-400 font-bold mt-1">Est. schedule</p>
          </div>

          <div className="col-span-2 bg-primary/10 border border-primary/30 rounded-2xl p-5 flex items-center gap-5">
            <div className="relative size-16 shrink-0">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                <circle className="stroke-slate-200 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3"></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">85</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold">Recycling Habit Score</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-1">You're sorting 85% correctly. Outperforming 72% of users!</p>
            </div>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="bg-slate-900 dark:bg-white rounded-2xl p-5 text-white dark:text-slate-900 flex items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-primary">AI Recommendation</p>
            <p className="text-sm font-bold leading-tight">Compact plastic waste to extend bin life by 1.5 days.</p>
          </div>
          <button className="shrink-0 size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined filled">lightbulb</span>
          </button>
        </div>

        {/* History */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Pickup History</h3>
            <button className="text-xs font-bold text-primary">See All</button>
          </div>
          <div className="space-y-3">
            {[
              { date: 'Oct 24 • 08:32 AM', weight: '4.8kg' },
              { date: 'Oct 17 • 09:15 AM', weight: '5.2kg' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Full Emptying</p>
                    <p className="text-[10px] text-slate-500 font-medium">{item.date}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500">{item.weight} removed</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Analytics;
