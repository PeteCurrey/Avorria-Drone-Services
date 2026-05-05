'use client'

import React from 'react'
import { BarChart3, Activity, ArrowRight } from 'lucide-react'

export default function GA4AdminPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8 text-center py-20">
      <div className="w-20 h-20 bg-blue-500/5 border border-blue-500/20 rounded-full flex items-center justify-center mb-4">
         <BarChart3 className="w-10 h-10 text-blue-400" />
      </div>
      <div>
         <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-4">Google Analytics 4</h1>
         <p className="font-body text-xs text-white/30 uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed">
            Connect your GA4 property to activate live event tracking, audience insights and session analysis.
         </p>
      </div>
      
      <div className="bg-white/[0.02] border border-white/5 p-12 w-full max-w-2xl opacity-40 select-none grayscale">
         {/* Demo Data Placeholder */}
         <div className="font-mono text-[9px] text-blue-400 uppercase tracking-widest mb-8">Demo Data Display</div>
         <div className="grid grid-cols-4 gap-4 mb-12">
            {[
              { label: 'SESSIONS', val: '45.2k' },
              { label: 'CONVERSIONS', val: '145' },
              { label: 'ENGAGEMENT', val: '64%' },
              { label: 'BOUNCE', val: '32%' },
            ].map((s, i) => (
              <div key={i} className="space-y-2 p-4 border border-white/5 bg-black">
                 <div className="font-ui text-[7px] text-white/20 uppercase tracking-widest">{s.label}</div>
                 <div className="font-display text-xl text-white">{s.val}</div>
              </div>
            ))}
         </div>
      </div>

      <button className="bg-white text-dark px-10 py-4 font-ui text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-accent transition-all flex items-center gap-4">
         AUTHORIZE GA4 CONNECTION <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
