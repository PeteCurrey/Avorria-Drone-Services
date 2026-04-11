// app/case-studies/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Filter, Search, ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    id: 1,
    title: 'Humber Bridge Structural Survey',
    client: 'National Highways',
    industry: 'Inspection',
    image: '/images/inspection_poster.png',
    loc: 'Hull, UK',
    year: '2025'
  },
  {
    id: 2,
    title: 'Central London Skyscraper Facade',
    client: 'Canary Wharf Group',
    industry: 'Inspection',
    image: '/images/photography_poster.png',
    loc: 'London, UK',
    year: '2024'
  },
  {
    id: 3,
    title: 'Offshore Wind Farm Mapping',
    client: 'Ørsted',
    industry: 'Surveying',
    image: '/images/surveying_poster.png',
    loc: 'North Sea',
    year: '2025'
  },
  {
    id: 4,
    title: 'High-Speed Rail Construction 4D',
    client: 'HS2 Ltd',
    industry: 'Construction',
    image: '/images/construction_poster.png',
    loc: 'Birmingham, UK',
    year: '2025'
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-40 px-10 md:px-20 bg-dark">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-20">
          <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-4">Project Portfolio</div>
          <h1 className="font-display text-7xl text-white mb-8 tracking-wider">CASE STUDIES</h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/10 pb-12">
            <p className="font-body text-xl text-white/40 max-w-[600px] leading-relaxed">
              Excellence delivered in the most challenging environments. Explore our history of precise UAV deployments across the UK&apos;s critical infrastructure.
            </p>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 font-ui text-[12px] tracking-widest text-white/30 uppercase cursor-not-allowed">
                <Filter className="w-4 h-4" /> Filter By Industry
              </div>
              <div className="flex items-center gap-3 font-ui text-[12px] tracking-widest text-white/30 uppercase cursor-not-allowed">
                <Search className="w-4 h-4" /> Search Projects
              </div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-32">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] bg-white/5 border border-white/10 overflow-hidden mb-8">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-6 left-6 font-ui text-[10px] tracking-[0.3em] uppercase bg-dark/60 backdrop-blur-md px-3 py-1.5 text-white/80 border border-white/10">
                  {project.industry}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl text-white mb-2 tracking-wide group-hover:text-accent transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="font-ui text-[11px] tracking-widest text-white/40 uppercase">{project.client}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/20" />
                    <span className="font-ui text-[11px] tracking-widest text-white/40 uppercase">{project.loc}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-dark group-hover:border-accent transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Global Footer Section */}
        <section className="py-32 border-t border-white/5 flex flex-col items-center justify-center text-center">
          <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-6">Start Your Journey</div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-12 tracking-wider">HAVE A SPECIFIC<br/>MISSION IN MIND?</h2>
          <Link 
            href="/brief" 
            className="group flex items-center gap-8 bg-white text-dark px-12 py-6 font-display text-3xl tracking-[0.2em] transition-all hover:bg-accent"
          >
            PROJECT BRIEFING <ArrowUpRight className="w-6 h-6 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-300" />
          </Link>
        </section>
      </div>
    </main>
  )
}
