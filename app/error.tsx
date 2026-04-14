'use client'

import { useEffect } from 'react'
import { RefreshCw, ShieldAlert } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('System Failure:', error)
  }, [error])

  return (
    <main className="min-h-screen bg-dark flex flex-col items-center justify-center relative overflow-hidden px-10">
      {/* Glitch Background Effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff000005_1px,transparent_1px),linear-gradient(to_bottom,#ff000005_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-[600px] w-full text-center">
        <div className="inline-flex items-center gap-3 py-2 px-4 border border-red-500/20 bg-red-500/5 mb-8">
          <ShieldAlert className="w-4 h-4 text-red-500" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-red-500">SYSTEM CRITICAL · SIGNAL LOST</span>
        </div>
        
        <h1 className="font-display text-[clamp(3rem,10vw,6rem)] leading-[0.9] text-white brightness-125 mb-8 tracking-widest">
          COMMUNICATION<br />
          FAILURE.
        </h1>

        <p className="font-body text-lg text-white/40 mb-12 leading-relaxed">
          An unexpected technical anomaly has disrupted the uplink. 
          The operations terminal has entered safe mode. 
          {error.digest && <span className="block mt-4 font-mono text-[10px] text-white/20">ERROR_ID: {error.digest}</span>}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => reset()}
            className="group flex items-center gap-4 bg-accent text-dark px-10 py-5 font-display text-2xl tracking-[0.2em] transition-all hover:bg-white active:scale-95"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
            REBOOT SYSTEM
          </button>
          
          <a
            href="/"
            className="font-ui text-[12px] tracking-widest text-white/30 hover:text-white transition-colors uppercase py-5 px-10 border border-white/5 hover:bg-white/5"
          >
             Emergency Override (Home)
          </a>
        </div>
      </div>

      {/* Background Warning Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[50vw] text-red-500/[0.01] select-none pointer-events-none z-0">
        !
      </div>
    </main>
  )
}
