import { Building2, Power, Hammer, Landmark, Network } from 'lucide-react'

const SECTORS = [
  {
    title: "CONSTRUCTION",
    desc: "Weekly progress monitoring, volumetric earthworks analysis, and BIM design overlay verification.",
    icon: Hammer
  },
  {
    title: "UTILITIES",
    desc: "High-voltage pylon inspections, solar farm thermal audits, and pipeline corridor mapping.",
    icon: Power
  },
  {
    title: "INFRASTRUCTURE",
    desc: "Strategic surveys for bridges, reservoirs, and rail networks using LiDAR and high-res imaging.",
    icon: Network
  },
  {
    title: "FACILITIES",
    desc: "Complete building envelope audits, roofing thermal signatures, and planned maintenance cycles.",
    icon: Building2
  },
  {
    title: "PUBLIC SECTOR",
    desc: "Heritage site digital twins, archaeological mapping, and emergency aerial support frameworks.",
    icon: Landmark
  }
]

export default function SectorSection() {
  return (
    <section data-index="6" className="bg-mid py-32 px-10 md:px-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Vertical Markets</span>
          </div>
          <h2 className="font-display text-5xl text-white mb-8 tracking-wider leading-none">SECTOR<br/><span className="text-accent underline underline-offset-8">SPECIALISMS</span></h2>
          <p className="font-body text-white/40 leading-relaxed max-w-[320px]">
            Providing high-stakes data across the most demanding industrial sectors in the UK. Our specialists understand the unique safety and reporting requirements of every landscape we fly.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/5">
          {SECTORS.map((sector) => (
            <div key={sector.title} className="p-10 bg-dark group hover:bg-accent/[0.03] transition-all duration-500">
              <sector.icon className="w-8 h-8 text-white/20 group-hover:text-accent transition-all duration-500 mb-8" />
              <h3 className="font-display text-2xl text-white mb-4 tracking-widest">{sector.title}</h3>
              <p className="font-body text-xs text-white/30 uppercase tracking-tighter leading-relaxed">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
