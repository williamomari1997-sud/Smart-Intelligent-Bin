
import React, { useRef, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { analyzeWasteImage, WasteAnalysis } from '../services/geminiService';

const Scanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<WasteAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' }, 
        audio: false 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsScanning(true);
    } catch (err) {
      setError("Unable to access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setIsScanning(false);
  };

  const captureAndAnalyze = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setLoading(true);
    setResult(null);

    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0);
      const base64 = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
      
      try {
        const analysis = await analyzeWasteImage(base64);
        setResult(analysis);
      } catch (err) {
        setError("Failed to analyze image. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Layout title="Waste Scanner" showBack>
      <div className="flex flex-col h-full relative p-4 gap-6">
        <div className="relative aspect-[3/4] w-full bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10">
          {!error ? (
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-8 text-center text-slate-400">
              <p>{error}</p>
            </div>
          )}
          
          {/* Overlay elements */}
          <div className="absolute inset-0 border-[2px] border-primary/30 m-8 rounded-3xl pointer-events-none">
             <div className="absolute top-0 left-0 size-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
             <div className="absolute top-0 right-0 size-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
             <div className="absolute bottom-0 left-0 size-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
             <div className="absolute bottom-0 right-0 size-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
          </div>

          {loading && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 text-white">
              <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="font-bold tracking-widest uppercase text-xs animate-pulse">AI is identifying...</p>
            </div>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />

        <div className="flex flex-col gap-4">
          {!result ? (
            <button 
              onClick={captureAndAnalyze}
              disabled={loading || !!error}
              className="w-full bg-primary hover:bg-primary/90 text-white font-black py-6 rounded-[2rem] shadow-xl shadow-primary/20 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined text-3xl">photo_camera</span>
              <span className="text-lg">Identify Waste</span>
            </button>
          ) : (
            <div className="bg-white dark:bg-surface-dark p-6 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">AI Detection Result</h3>
                  <h2 className="text-2xl font-black">{result.item}</h2>
                </div>
                <div className={`size-12 rounded-2xl flex items-center justify-center ${result.recyclable ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                   <span className="material-symbols-outlined text-3xl">{result.recyclable ? 'recycling' : 'delete'}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-2xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Category</p>
                  <p className="font-black text-lg">{result.category}</p>
                </div>
                <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-2xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Status</p>
                  <p className="font-black text-lg">{result.recyclable ? 'Recyclable' : 'Non-Recyclable'}</p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-5 rounded-3xl mb-6">
                <p className="text-sm font-medium leading-relaxed italic">"{result.instruction}"</p>
              </div>

              <button 
                onClick={() => setResult(null)}
                className="w-full bg-slate-200 dark:bg-slate-800 font-bold py-4 rounded-2xl transition-all active:scale-95"
              >
                Scan Another
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Scanner;
