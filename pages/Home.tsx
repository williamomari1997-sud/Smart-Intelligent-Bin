
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Gauge from '../components/Gauge';
import { BinStatus } from '../types';
import { getRecyclingInsight } from '../services/geminiService';

const Home: React.FC = () => {
  const [status, setStatus] = useState<BinStatus>({
    id: "KB-7729",
    name: "Main Kitchen",
    fillLevel: 75,
    battery: 85,
    lastSync: "10:45 AM",
    temperature: 22,
    type: "Plastic",
    location: "Kitchen A-2"
  });

  const [insight, setInsight] = useState<string>("Almost at capacity. Consider emptying soon.");

  useEffect(() => {
    const fetchInsight = async () => {
      const tip = await getRecyclingInsight(status);
      setInsight(tip);
    };
    fetchInsight();
  }, []);

  return (
    <Layout>
      <div className="p-5 flex flex-col gap-6">
        {/* Main Status Card */}
        <div className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-2xl shadow-primary/5">
          <Gauge value={status.fillLevel} label="Full" color={status.fillLevel > 80 ? "#CC614D" : "#0b868e"} />
          
          <div className="flex flex-col items-center gap-2 text-center mt-6">
            <p className="text-base text-slate-500 dark:text-slate-300 font-medium">{insight}</p>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-accent-coral/10 text-accent-coral rounded-full text-[11px] font-bold uppercase tracking-wider border border-accent-coral/20">
              <span className="size-1.5 rounded-full bg-accent-coral animate-pulse"></span>
              Action Required
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 rounded-3xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5">
            <div className="flex justify-between items-center">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-xl">battery_5_bar</span>
              </div>
              <span className="text-accent-coral text-xs font-bold">-2%</span>
            </div>
            <div>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-0.5">Battery</p>
              <p className="text-2xl font-black">{status.battery}%</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5">
            <div className="flex justify-between items-center">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <span className="material-symbols-outlined text-xl">sync</span>
              </div>
              <div className="size-2 bg-green-500 rounded-full shadow-[0_0_8px_#22C55E]"></div>
            </div>
            <div>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-0.5">Last Sync</p>
              <p className="text-2xl font-black">{status.lastSync}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 self-start">
              <span className="material-symbols-outlined text-xl">thermostat</span>
            </div>
            <div>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-0.5">Bin Temp</p>
              <p className="text-2xl font-black">{status.temperature}°C</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 self-start">
              <span className="material-symbols-outlined text-xl">recycling</span>
            </div>
            <div>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-0.5">Bin Type</p>
              <p className="text-2xl font-black">{status.type}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-[2rem] shadow-xl shadow-primary/10 transition-all active:scale-[0.97]">
            <span className="material-symbols-outlined font-bold">local_shipping</span>
            <span className="text-base tracking-tight">Request Collection</span>
          </button>
          <button className="flex items-center justify-center gap-3 w-full bg-slate-200 dark:bg-surface-dark text-slate-800 dark:text-white font-bold py-5 rounded-[2rem] border border-transparent hover:border-primary/30 transition-all active:scale-[0.97]">
            <span className="material-symbols-outlined">delete_sweep</span>
            <span className="text-base tracking-tight">Empty Now</span>
          </button>
        </div>

        {/* Map View */}
        <div className="flex flex-col gap-3 rounded-3xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="font-bold text-sm tracking-tight text-slate-500 dark:text-slate-300">Location: {status.location}</span>
          </div>
          <div className="relative h-28 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img 
              alt="Map" 
              className="w-full h-full object-cover opacity-50 grayscale contrast-125 dark:opacity-40" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUbSrqG4ZZflH0JALJncKYKECFODbkMg0JN1V0NhnzLSOeUaNUCC3bRCStuaJ1WEQNoSIIcgfQcIKjvsCnENGnFRzj8l1o4vdGUdinE7JQitChNMmtrO4BqlrgZa8WQvpypCEXnh143hJkj8YeciSNWrSafQSIVn1ClheQj-cJ9wAhj0m2-m18rzb4k0oeEiZaOkaS3D12X7BrPLjpr45VtQeIRTBWDn0MVxkfAjaEVCGcu3NnGDjHnJUX2Q3_NfTHN7zmH659lNHx" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-8 rounded-full bg-primary border-4 border-white dark:border-surface-dark shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
