
import React, { useState } from 'react';
import Layout from '../components/Layout';

const Setup: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <Layout title="Device Setup" showBack>
      <div className="px-6 py-4 flex flex-col gap-6">
        {/* Progress */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Step {step} of 3</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Power & Recognition</p>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-primary shadow-[0_0_10px_#0b868e] transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
        </div>

        {/* Illustration Card */}
        <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden border border-slate-200 dark:border-white/5">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
          <div className="relative flex items-center justify-center">
            <div className="absolute size-56 rounded-full border border-primary/20 animate-ping"></div>
            <div className="z-10 w-32 h-44 bg-white dark:bg-surface-dark rounded-3xl border border-white/5 shadow-2xl flex flex-col items-center p-4">
              <div className="w-full h-8 bg-slate-100 dark:bg-black/40 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/40 shadow-lg">
                  <span className="material-symbols-outlined text-primary text-3xl font-bold">power_settings_new</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="size-2 rounded-full bg-primary"></div>
                <div className="size-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="size-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3 px-2">
          <h1 className="text-3xl font-black tracking-tight">Turn on your sensor</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
            Press and hold the power button for 3 seconds until the indicator light flashes <span className="text-primary font-bold">neon green</span>.
          </p>
        </div>

        {/* Bento Hint Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 flex flex-col gap-2">
            <span className="material-symbols-outlined text-primary">bluetooth</span>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Pairing</p>
            <p className="text-[11px] text-slate-400 leading-tight">Enable Bluetooth on your device</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 flex flex-col gap-2">
            <span className="material-symbols-outlined text-primary">wifi</span>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Network</p>
            <p className="text-[11px] text-slate-400 leading-tight">Use 2.4GHz Wi-Fi for stability</p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 flex flex-col gap-4">
          <button 
            onClick={() => step < 3 && setStep(step + 1)}
            className="w-full bg-primary hover:brightness-110 text-white font-extrabold py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
          >
            <span>Continue</span>
            <span className="material-symbols-outlined text-xl font-bold">arrow_forward</span>
          </button>
          <button className="w-full text-slate-500 font-semibold py-2 text-sm hover:text-primary transition-colors">
            I don't see the light flashing
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Setup;
