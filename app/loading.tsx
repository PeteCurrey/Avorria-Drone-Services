"use client";

export default function Loading() {
  return (
    <main className="fixed inset-0 bg-dark z-[200] flex flex-col items-center justify-center">
      <div className="relative w-[300px]">
        {/* Background Track */}
        <div className="h-px w-full bg-white/5" />
        
        {/* Animated Bar */}
        <div className="absolute top-0 left-0 h-px bg-accent animate-loading-bar" />
        
        {/* Labels */}
        <div className="flex justify-between items-center mt-4">
          <span className="font-ui text-[9px] tracking-[0.4em] uppercase text-white/20 animate-pulse">
            Establishing Uplink
          </span>
          <span className="font-ui text-[9px] tracking-[0.4em] uppercase text-accent animate-pulse">
            Operations
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading-bar {
          0% { width: 0%; left: 0%; }
          50% { width: 40%; left: 30%; }
          100% { width: 0%; left: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </main>
  )
}
