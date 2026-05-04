// components/sections/BundlesTeaser.tsx
import Link from 'next/link'
import { ArrowRight, Package } from 'lucide-react'

export default function BundlesTeaser() {
  return (
    <section className="bg-accent py-24 px-6 md:px-20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dark/5 skew-x-12 translate-x-20 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <Package className="w-6 h-6 text-dark" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-dark/60 font-bold">Commercial Bundles</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-dark mb-6 leading-none tracking-wider">
            OUTCOME-LED<br/>SERVICE PACKAGES
          </h2>
          <p className="font-body text-dark/70 text-lg max-w-[500px] leading-relaxed">
            From roof intelligence and construction monitoring to survey data and immersive 3D capture. Clear project-focused deliverables for commercial decision makers.
          </p>
        </div>
        
        <Link 
          href="/bundles" 
          className="bg-dark text-white font-display text-2xl tracking-[0.2em] px-12 py-6 hover:bg-white hover:text-dark transition-all duration-500 flex items-center gap-4 group/btn"
        >
          VIEW PACKAGES <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
