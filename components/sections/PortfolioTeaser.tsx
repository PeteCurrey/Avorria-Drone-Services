// components/sections/PortfolioTeaser.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionTag from '../ui/SectionTag'
import { portfolioProjects } from '@/lib/portfolio-data'

export default function PortfolioTeaser() {
  // Show 4 core profiles as requested
  const featuredSlugs = [
    'commercial-roof-condition-survey-workflow',
    'construction-progress-monitoring-workflow',
    'gaussian-splat-site-visualisation-workflow',
    'insurance-storm-damage-evidence-workflow'
  ]
  
  const featuredProjects = portfolioProjects.filter(p => featuredSlugs.includes(p.slug))

  return (
    <section className="py-32 px-8 md:px-20 bg-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="svc-tag mb-8"><SectionTag number="06" text="Proof of Capability" /></div>
            <h2 className="font-display text-6xl text-white uppercase tracking-tighter leading-tight mb-8">
              EXAMPLE DRONE WORKFLOWS <br/><span className="text-accent">ACROSS COMMERCIAL ENVIRONMENTS</span>
            </h2>
            <p className="font-body text-xl text-white/40 uppercase tracking-widest leading-relaxed">
              Explore how drone capture can support inspections, surveys, construction progress, insurance evidence, aerial media and immersive 3D visualisation. Verified case studies and anonymised project profiles are labelled clearly where available.
            </p>
          </div>
          <Link href="/portfolio" className="font-ui text-[12px] tracking-[0.3em] uppercase text-accent hover:text-white transition-colors border-b border-accent pb-2 mb-2">
            View All Mission Profiles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group">
              <div className="relative aspect-[16/9] bg-white/5 border border-white/10 overflow-hidden mb-8">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 font-ui text-[10px] tracking-[0.3em] uppercase bg-accent text-dark px-4 py-1.5 font-bold">
                  {project.label}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="max-w-[85%]">
                  <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-3">{project.sector}</div>
                  <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-wider group-hover:text-accent transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/30 font-ui text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors">
                    VIEW MISSION PROFILE <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-dark transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
