// app/blog/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Resources & Insights — Altitude Drone | UK UAV Intelligence',
  description: 'Deep dives into drone technology, CAA regulations, industrial inspection case studies, and UAV cost guides for the UK market.',
}

export default function BlogIndex() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <main className="bg-dark min-h-screen pt-40 pb-32">
      <div className="grid-lines opacity-20" />
      
      <div className="container px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Knowledge Base</span>
            </div>
            <h1 className="font-display text-7xl md:text-9xl text-white uppercase leading-none mb-8">
              Resources<br/><span className="text-accent underline underline-offset-8">& Insights</span>
            </h1>
            <p className="font-body text-xl text-white/40 uppercase tracking-widest leading-relaxed">
              Technical guidance and regulatory updates for the UK drone services sector.
            </p>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-32">
          <Link href={`/blog/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12 relative h-[50vh] md:h-[60vh] overflow-hidden border border-white/10 group-hover:border-accent/30 transition-colors">
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/10 transition-colors z-10" />
              <div className="absolute top-10 left-10 z-20">
                <span className="px-4 py-1 bg-accent text-dark font-ui text-[10px] tracking-widest uppercase mb-4 block inline-block">
                  Featured Article
                </span>
                <h2 className="font-display text-5xl md:text-7xl text-white uppercase mt-4 max-w-4xl group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
              </div>
              {/* Note: In a real app we'd use a real image, using a placeholder for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 animate-pulse" />
              <div className="absolute bottom-10 left-10 z-20 flex items-center gap-8 font-ui text-[10px] tracking-widest uppercase text-white/50">
                <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-accent" /> {featuredPost.readTime}</span>
                <span className="flex items-center gap-2"><User className="w-3 h-3 text-accent" /> {featuredPost.author}</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {otherPosts.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group flex flex-col h-full border-t border-white/10 pt-12 pb-8 hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between mb-8">
                <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent">
                  {post.category}
                </span>
                <span className="font-ui text-[10px] tracking-widest text-white/30 uppercase">
                  {post.date}
                </span>
              </div>
              <h3 className="font-display text-3xl text-white uppercase mb-6 group-hover:text-accent transition-colors leading-[1.1]">
                {post.title}
              </h3>
              <p className="font-body text-sm text-white/40 leading-relaxed uppercase tracking-tighter mb-12">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 text-white/60 font-ui text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">
                Read Full Insight <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter / CTA */}
      <section className="mt-32 py-32 border-t border-white/5 bg-[#0a0a0a]">
        <div className="container px-8 md:px-20 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-8 mb-12 uppercase">Stay Informed</h2>
          <p className="font-body text-lg text-white/40 max-w-xl mx-auto mb-16 uppercase tracking-widest">
            Subscribe to our technical briefing for quarterly updates on UK drone regulations and technology.
          </p>
          <div className="max-w-md mx-auto flex items-center border border-white/10 bg-white/5 p-2 pr-4">
            <input 
              type="email" 
              placeholder="YOUR@EMAIL.COM" 
              className="bg-transparent border-none focus:ring-0 font-body text-sm text-white tracking-widest p-4 w-full"
            />
            <button className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent hover:text-white transition-colors">
              SUBSRIBE
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
