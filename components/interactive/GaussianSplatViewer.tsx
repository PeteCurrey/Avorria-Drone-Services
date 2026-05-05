'use client'

import { useState } from 'react'
import { 
  Play, 
  Maximize2, 
  Info, 
  AlertCircle, 
  Loader2, 
  Move, 
  Search,
  Box,
  ChevronRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface GaussianSplatViewerProps {
  title: string
  description?: string
  viewerSrc: string
  posterSrc: string
  fallbackVideoSrc?: string
  fallbackImageSrc?: string
  viewerAvailable: boolean
  ctaLabel?: string
  ctaHref?: string
  caption?: string
}

export default function GaussianSplatViewer({
  title,
  description,
  viewerSrc,
  posterSrc,
  fallbackVideoSrc,
  fallbackImageSrc,
  viewerAvailable,
  ctaLabel = "Request Gaussian Splat Capture",
  ctaHref = "/brief?service=gaussian-splat",
  caption
}: GaussianSplatViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleLaunch = () => {
    if (!viewerAvailable) return
    setIsLoading(true)
    // Simulate loading/initialization
    setTimeout(() => {
      setIsLoaded(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="relative w-full group">
      <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
        
        {/* Poster / Initial State */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10">
            <img 
              src={posterSrc} 
              alt={title} 
              className={`w-full h-full object-cover transition-all duration-700 ${isLoading ? 'scale-105 blur-sm opacity-50' : 'opacity-80'}`} 
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
              {isLoading ? (
                <div className="flex flex-col items-center gap-6">
                  <Loader2 className="w-12 h-12 text-accent animate-spin" />
                  <p className="font-ui text-[10px] tracking-[0.4em] uppercase text-white/60">Initialising 3D Environment...</p>
                </div>
              ) : (
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl md:text-4xl text-white mb-6 uppercase tracking-widest">{title}</h3>
                  {description && <p className="font-body text-xs text-white/40 uppercase tracking-[0.2em] mb-12 leading-relaxed">{description}</p>}
                  
                  {viewerAvailable ? (
                    <button 
                      onClick={handleLaunch}
                      className="inline-flex items-center gap-4 bg-accent text-dark px-10 py-5 font-display text-xl tracking-widest uppercase hover:bg-white transition-all group/btn"
                    >
                      <Play className="w-5 h-5 fill-current" /> Launch Interactive 3D Demo
                    </button>
                  ) : (
                    <div className="space-y-8">
                       <div className="flex items-center justify-center gap-3 text-yellow-500/60 font-ui text-[9px] tracking-widest uppercase">
                          <AlertCircle className="w-4 h-4" /> Interactive viewer coming soon
                       </div>
                       {fallbackVideoSrc ? (
                         <div className="relative max-w-lg mx-auto border border-white/5 bg-white/[0.02] p-2">
                            <video 
                              src={fallbackVideoSrc} 
                              autoPlay 
                              loop 
                              muted 
                              playsInline 
                              className="w-full opacity-60"
                            />
                         </div>
                       ) : (
                         <p className="font-body text-[10px] text-white/20 uppercase tracking-widest italic">
                           Current visuals show representative Gaussian Splat outputs.
                         </p>
                       )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Viewer State */}
        {isLoaded && viewerAvailable && (
          <div className="absolute inset-0 z-20 animate-in fade-in duration-1000">
            <iframe
              src={viewerSrc}
              title={title}
              className="w-full h-full border-none"
              allow="fullscreen; xr-spatial-tracking"
              loading="lazy"
            />
            
            {/* Viewer Overlay Controls */}
            <div className="absolute bottom-8 left-8 z-30 pointer-events-none">
               <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-2">
                        <Move className="w-3 h-3 text-accent" />
                        <span className="font-ui text-[8px] tracking-widest uppercase text-white/60">Drag to Look</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Search className="w-3 h-3 text-accent" />
                        <span className="font-ui text-[8px] tracking-widest uppercase text-white/60">Scroll to Zoom</span>
                     </div>
                  </div>
               </div>
            </div>

            <button 
              onClick={() => setIsLoaded(false)}
              className="absolute top-8 right-8 z-30 p-3 bg-black/60 backdrop-blur-md border border-white/10 text-white/40 hover:text-white transition-all"
              title="Close Viewer"
            >
               <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Info & Footer */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
         <div className="flex-1">
            {caption && <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed mb-4 italic max-w-2xl">{caption}</p>}
            <div className="flex items-center gap-4 text-[9px] tracking-widest uppercase text-white/20">
               <Box className="w-3 h-3" /> Gaussian Splat Visualisation
               <span className="text-white/5">•</span>
               <Info className="w-3 h-3" /> Works best on modern desktop devices
            </div>
         </div>
         <div className="flex items-center gap-6">
            <Link 
              href={ctaHref}
              className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent hover:text-white transition-colors flex items-center gap-2"
            >
              {ctaLabel} <ChevronRight className="w-3 h-3" />
            </Link>
         </div>
      </div>

      {/* Error State Placeholder */}
      {error && (
        <div className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center p-10 text-center">
           <AlertCircle className="w-12 h-12 text-red-500 mb-6" />
           <h3 className="font-display text-xl text-white mb-4 uppercase">Viewer Failed to Load</h3>
           <p className="font-body text-xs text-white/40 uppercase mb-8">The interactive model could not be initialised on this device.</p>
           <button onClick={() => setError(false)} className="text-accent uppercase tracking-widest font-ui text-[10px]">Try Again</button>
        </div>
      )}
    </div>
  )
}
