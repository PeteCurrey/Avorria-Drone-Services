'use client'

import React from 'react'
import { Globe, Search, BarChart3, ArrowRight } from 'lucide-react'

export default function SearchConsoleAdminPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8 text-center py-20">
      <div className="w-20 h-20 bg-accent/5 border border-accent/20 rounded-full flex items-center justify-center mb-4">
         <Search className="w-10 h-10 text-accent" />
      </div>
      <div>
         <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-4">Google Search Console</h1>
         <p className="font-body text-xs text-white/30 uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed">
            Connect your Google Search Console account to activate live organic search reporting and rank tracking.
         </p>
      </div>
      
      <div className="bg-white/[0.02] border border-white/5 p-12 w-full max-w-2xl opacity-40 select-none grayscale">
         {/* Demo Data Placeholder */}
         <div className="font-mono text-[9px] text-accent uppercase tracking-widest mb-8">Demo Data Display</div>
         <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="space-y-2">
               <div className="font-ui text-[8px] text-white/20 uppercase tracking-widest">IMPRESSIONS</div>
               <div className="font-display text-3xl text-white">124.5k</div>
            </div>
            <div className="space-y-2">
               <div className="font-ui text-[8px] text-white/20 uppercase tracking-widest">CLICKS</div>
               <div className="font-display text-3xl text-white">4.2k</div>
            </div>
            <div className="space-y-2">
               <div className="font-ui text-[8px] text-white/20 uppercase tracking-widest">AVG POSITION</div>
               <div className="font-display text-3xl text-white">14.2</div>
            </div>
         </div>
      </div>

      <button className="bg-accent text-dark px-10 py-4 font-ui text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all flex items-center gap-4">
         AUTHORIZE CONNECTION <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
