// app/gaussian-splat/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Layers, 
  Video, 
  Eye, 
  Users
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Gaussian Splatting | Photorealistic 3D Site Reconstruction | Altitude Hire',
  description: 'Immersive, photorealistic 3D reconstructions using Gaussian Splatting. High-fidelity visualization for property, construction, heritage, and film location scouting.',
}

export default function GaussianSplatPage() {
  return (
    <main className="bg-dark text-white pt-32">
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 py-24 min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/images/nav/photography.png" 
            alt="Gaussian Splatting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[800px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Next-Gen Visualisation</span>
          </div>
          <h1 className="font-display text-hero leading-none mb-8 tracking-wider">
            GAUSSIAN<br/>
            <span className="text-accent">SPLATTING</span>
          </h1>
          <p className="font-body text-xl text-white/60 mb-12 leading-relaxed">
            Photorealistic 3D reconstruction made from overlapping aerial image data. Moving beyond traditional photogrammetry to deliver immersive, high-fidelity site visualisations for design, review, and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact" className="bg-accent text-dark font-display text-xl tracking-widest px-10 py-4 hover:bg-white transition-all">
              REQUEST A CAPTURE
            </Link>
          </div>
        </div>
      </section>

      {/* What is it section */}
      <section className="px-6 md:px-20 py-32 bg-mid border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="The Technology" /></div>
            <h2 className="font-display text-5xl mb-8 leading-tight uppercase">BEYOND THE<br/><span className="text-accent underline underline-offset-8 decoration-accent/30">POINT CLOUD</span></h2>
            <p className="font-body text-white/50 leading-relaxed mb-6 text-lg">
              A Gaussian Splat is a photorealistic 3D reconstruction created by processing high-overlap image data into a volumetric radiance field. Unlike traditional point clouds or textured meshes, Gaussian Splatting captures subtle lighting, transparency, and complex geometry with unprecedented fidelity.
            </p>
            <p className="font-body text-white/40 leading-relaxed">
              It is excellent for visualisation, walkthroughs, film/location work, design review and immersive site capture. While it delivers stunning visual accuracy, it is best used for immersive viewing and stakeholder engagement rather than as a primary replacement for survey-grade LiDAR unless paired with proper survey control.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: Eye, title: "Visualisation", desc: "Unmatched photorealism for property and sites." },
               { icon: Layers, title: "Walkthroughs", desc: "Smooth, immersive 3D navigation." },
               { icon: Video, title: "Location Scouting", desc: "Digital replicas for film and production." },
               { icon: Users, title: "Consultation", desc: "Engage stakeholders with immersive assets." }
             ].map((feat) => (
               <div key={feat.title} className="p-8 bg-dark border border-white/5 group hover:border-accent/20 transition-all">
                 <feat.icon className="w-8 h-8 text-accent/40 mb-6 group-hover:text-accent transition-colors" />
                 <h3 className="font-display text-xl text-white mb-3 tracking-widest uppercase">{feat.title}</h3>
                 <p className="font-body text-[11px] text-white/30 uppercase tracking-tighter leading-tight group-hover:text-white/60 transition-colors">{feat.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="px-6 md:px-20 py-32">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-display text-section mb-16 text-center">DRONE <span className="text-accent">GAUSSIAN SPLAT</span> CAPTURE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Commercial Property", desc: "Create high-fidelity visualisations for leasing and investor presentations." },
              { title: "Construction Sites", desc: "Document site condition in immersive 3D for stakeholder review." },
              { title: "Heritage Sites", desc: "Capture complex architectural details for preservation and engagement." },
              { title: "Film & Media", desc: "Digital location scouting and virtual production environments." },
              { title: "Real Estate Previews", desc: "Immersive previews for high-end residential and development projects." },
              { title: "Digital Twins", desc: "Foundation for immersive digital twin walkthroughs." }
            ].map((item) => (
              <div key={item.title} className="border-l border-white/10 pl-8 py-4 group">
                <h3 className="font-display text-2xl text-white mb-4 tracking-widest uppercase group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-6 md:px-20 py-32 bg-mid">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <div className="svc-tag mb-8"><SectionTag number="03" text="Deliverables" /></div>
              <h2 className="font-display text-5xl mb-8 uppercase tracking-wider">PROJECT<br/><span className="text-accent">OUTPUTS</span></h2>
              <p className="font-body text-white/40 leading-relaxed">
                We deliver Gaussian Splats in industry-standard formats ready for web, desktop, and production integration.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 "Web-viewable Gaussian Splat", "PLY splat file", "3D Tiles / Web Viewer", "Flythrough video", 
                 "Still renders", "Hybrid Photogrammetry + Splat", "Optional LiDAR Overlay"
               ].map((output) => (
                 <div key={output} className="flex items-center gap-4 p-6 bg-dark border border-white/5">
                   <div className="w-2 h-2 bg-accent rounded-full" />
                   <span className="font-ui text-xs tracking-[0.2em] uppercase text-white/70">{output}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Disclaimer */}
      <section className="px-6 md:px-20 py-24">
        <div className="max-w-[800px] mx-auto p-12 border border-accent/20 bg-accent/5 text-center">
          <p className="font-body text-lg text-accent/80 leading-relaxed italic">
            Gaussian Splats and immersive 3D models are ideal for photorealistic visualisation, walkthroughs and stakeholder engagement. For measurement-critical projects, Altitude Hire can combine capture with photogrammetry, LiDAR or survey-controlled workflows where required.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-32 bg-accent">
        <div className="max-w-[1000px] mx-auto text-center text-dark">
          <h2 className="font-display text-section mb-8 uppercase tracking-widest">INITIATE <span className="underline decoration-dark/30 underline-offset-8">GAUSSIAN CAPTURE</span></h2>
          <p className="font-body text-xl mb-12 max-w-[700px] mx-auto leading-relaxed">
            Experience your site in photorealistic 3D. Discuss your project requirements for immersive site capture and high-fidelity visualisation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="bg-dark text-white font-display text-2xl tracking-[0.2em] px-12 py-5 hover:bg-white hover:text-dark transition-all">
              DISCUSS A PROJECT
            </Link>
            <Link href="/bundles" className="border-2 border-dark/20 font-ui text-[12px] font-bold tracking-[0.3em] uppercase px-12 py-5 hover:bg-dark hover:text-white transition-all">
              VIEW BUNDLES
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
