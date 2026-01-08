
import React from 'react';
import Layout from '../components/Layout';

const Toggle: React.FC<{ checked?: boolean }> = ({ checked = false }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" defaultChecked={checked} />
    <div className="w-[51px] h-[31px] bg-slate-200 dark:bg-[#39393d] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-primary"></div>
  </label>
);

const Alerts: React.FC = () => {
  return (
    <Layout title="Alerts & Notifications" showBack>
      <main className="max-w-md mx-auto p-4 space-y-8">
        <section className="space-y-2">
          <h3 className="text-[13px] font-medium uppercase tracking-wider text-slate-500 px-4">Bin Fill Alerts</h3>
          <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-4 px-4 py-4 justify-between border-b border-slate-100 dark:border-white/5">
              <div className="flex flex-col flex-1">
                <p className="text-base font-medium">Full Bin Notifications</p>
                <p className="text-slate-500 text-xs">Notify when bin reaches threshold</p>
              </div>
              <Toggle checked />
            </div>
            <div className="p-4 bg-slate-50 dark:bg-black/20">
              <p className="text-[11px] font-semibold text-slate-400 mb-3 uppercase tracking-wider">Alert Threshold</p>
              <div className="flex h-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-black/40 p-1">
                {['80%', '90%', '100%'].map((t) => (
                  <label key={t} className="flex-1 flex cursor-pointer h-full items-center justify-center rounded-md text-slate-500 has-[:checked]:bg-white dark:has-[:checked]:bg-[#3a3a3c] has-[:checked]:text-primary text-sm font-semibold transition-all">
                    <span>{t}</span>
                    <input type="radio" name="threshold" className="sr-only" defaultChecked={t === '90%'} />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-[13px] font-medium uppercase tracking-wider text-slate-500 px-4">Device Health</h3>
          <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-4 px-4 py-4 justify-between border-b border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">battery_alert</span>
                <div className="flex flex-col">
                  <p className="text-base font-medium">Battery Low Alert</p>
                  <p className="text-xs text-slate-500">Notify when charge is below 20%</p>
                </div>
              </div>
              <Toggle checked />
            </div>
            <div className="flex items-center gap-4 px-4 py-4 justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">signal_wifi_off</span>
                <div className="flex flex-col">
                  <p className="text-base font-medium">Offline Status</p>
                  <p className="text-xs text-slate-500">Device connection lost</p>
                </div>
              </div>
              <Toggle />
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-[13px] font-medium uppercase tracking-wider text-slate-500 px-4">Scheduling</h3>
          <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-4 px-4 py-4 justify-between border-b border-slate-100 dark:border-white/5">
              <div className="flex flex-col">
                <p className="text-base font-medium">Collection Day Reminder</p>
                <p className="text-xs text-slate-500">Reminder to put bins out</p>
              </div>
              <Toggle checked />
            </div>
            <div className="flex items-center justify-between px-4 py-4 bg-slate-50 dark:bg-black/20">
              <span className="text-sm font-medium">Reminder Time</span>
              <div className="flex items-center gap-2 bg-slate-200 dark:bg-[#2c2c2e] px-3 py-1.5 rounded-lg text-primary font-bold">
                <span>07:00</span>
                <span className="text-[10px] bg-primary text-white dark:text-black px-1.5 py-0.5 rounded-sm uppercase">AM</span>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-2 pb-12 text-center">
          <button className="text-sm font-medium text-primary active:opacity-60 px-6 py-2">
            Reset All Notification Settings
          </button>
          <p className="text-[11px] text-slate-500 mt-6 px-10 leading-relaxed">
            Ensure notification permissions are enabled in your system settings.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Alerts;
