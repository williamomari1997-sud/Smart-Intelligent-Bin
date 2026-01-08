
import React from 'react';

interface GaugeProps {
  value: number;
  label: string;
  subLabel?: string;
  color?: string;
}

const Gauge: React.FC<GaugeProps> = ({ value, label, subLabel, color = "#0b868e" }) => {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-48 h-48 sm:w-60 sm:h-60">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-slate-200 dark:text-slate-800"
          cx="50"
          cy="50"
          fill="transparent"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          fill="transparent"
          r={radius}
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-4xl sm:text-5xl font-black tracking-tighter">{value}%</span>
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mt-1">{label}</span>
      </div>
    </div>
  );
};

export default Gauge;
