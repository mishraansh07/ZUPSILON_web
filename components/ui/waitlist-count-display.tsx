import React, { useState, useEffect } from 'react';

export const WaitlistCountDisplay = ({ isModal = false }: { isModal?: boolean }) => {
  const [count, setCount] = useState<number>('...' as any);
  
  const fetchCount = () => {
    fetch(`/api/count?t=${Date.now()}`)
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => console.error(err));
  };
  
  useEffect(() => {
    fetchCount();
    window.addEventListener('waitlistUpdated', fetchCount);
    return () => window.removeEventListener('waitlistUpdated', fetchCount);
  }, []);

  const MAX_SPOTS = 50;
  const displayCount = typeof count === 'number' ? count : '...';
  const spotsRemaining = typeof count === 'number' ? Math.max(0, MAX_SPOTS - count) : '...';
  
  if (isModal) {
    return <>{displayCount}</>;
  }
  
  const fillPercentage = typeof count === 'number' ? Math.min(100, Math.round((count / MAX_SPOTS) * 100)) : 0;

  return (
    <div className="flex flex-col p-6 md:p-8 border-4 border-[#60507c] bg-[#1a1a1a] shadow-[12px_12px_0_0_#60507c] mb-8 mt-4 mx-auto w-fit transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[16px_16px_0_0_#60507c]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
        <div className="flex flex-col items-center">
           <span className="text-4xl lg:text-6xl font-black text-white tracking-tighter">{displayCount}</span>
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mt-2">Registered</span>
        </div>
        
        <div className="hidden md:block w-[2px] h-16 bg-[#60507c]"></div>
        <div className="md:hidden h-[2px] w-16 bg-[#60507c]"></div>
        
        <div className="flex flex-col items-center">
           <span className="text-4xl lg:text-6xl font-black text-[#b19cd9] animate-pulse tracking-tighter">{spotsRemaining}</span>
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#b19cd9] mt-2">Available</span>
        </div>
      </div>
      
      {/* Brutalist Progress Bar */}
      <div className="w-full bg-[#1a1a1a] h-6 border-2 border-[#60507c] relative overflow-hidden flex items-center p-1">
        <div 
          className="h-full bg-[#b19cd9] transition-all duration-1000 ease-out" 
          style={{ width: `${fillPercentage}%` }}
        />
        <div className="absolute inset-0 dither-pattern opacity-10 pointer-events-none"></div>
      </div>
      
      <div className="flex justify-between w-full mt-2 font-mono">
        <span className="text-[10px] font-bold text-white/40 tracking-widest">MIN: 00</span>
        <span className="text-[10px] font-bold text-[#b19cd9] tracking-widest animate-pulse">CAPACITY: {fillPercentage}%</span>
        <span className="text-[10px] font-bold text-white/40 tracking-widest">MAX: {MAX_SPOTS}</span>
      </div>
    </div>
  );
};
