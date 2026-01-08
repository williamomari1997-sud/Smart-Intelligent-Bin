
import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "Kitchen Bin", showBack = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative bg-background-light dark:bg-background-dark shadow-2xl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack ? (
            <button 
              onClick={() => navigate(-1)}
              className="flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
          ) : (
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
              <span className="material-symbols-outlined font-bold">delete_sweep</span>
            </div>
          )}
          <div>
            {!showBack && <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Home</h2>}
            <h1 className="text-lg font-extrabold leading-tight tracking-tight">{title}</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to="/alerts" className="flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </Link>
          <button className="flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-32">
        {children}
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 pb-8 pt-3 z-50">
        <div className="flex justify-around items-center px-6">
          <Link to="/" className={`flex flex-col items-center gap-1.5 ${isActive('/') ? 'text-primary' : 'text-slate-400'}`}>
            <span className={`material-symbols-outlined text-2xl ${isActive('/') ? 'filled' : ''}`}>home</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
          </Link>
          <Link to="/analytics" className={`flex flex-col items-center gap-1.5 ${isActive('/analytics') ? 'text-primary' : 'text-slate-400'}`}>
            <span className={`material-symbols-outlined text-2xl ${isActive('/analytics') ? 'filled' : ''}`}>bar_chart</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Stats</span>
          </Link>
          
          <div className="relative -top-6">
            <Link to="/scanner" className="size-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40 border-4 border-background-light dark:border-background-dark active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-3xl font-bold">photo_camera</span>
            </Link>
          </div>

          <Link to="/build" className={`flex flex-col items-center gap-1.5 ${isActive('/build') ? 'text-primary' : 'text-slate-400'}`}>
            <span className={`material-symbols-outlined text-2xl ${isActive('/build') ? 'filled' : ''}`}>build</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">DIY</span>
          </Link>
          <Link to="/setup" className={`flex flex-col items-center gap-1.5 ${isActive('/setup') ? 'text-primary' : 'text-slate-400'}`}>
            <span className={`material-symbols-outlined text-2xl ${isActive('/setup') ? 'filled' : ''}`}>developer_board</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Setup</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
