// app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} — Altitude Drone Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://altitude-hire.com/blog/${slug}`,
      images: [{ url: '/images/og-default.jpg' }], // Should be post.image if available
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Altitude Drone',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://altitude-hire.com/blog/${slug}`,
    },
  }

  return (
    <main className="bg-dark min-h-screen pt-40 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container px-8 md:px-20">
        <Link 
          href="/blog" 
          className="group flex items-center gap-4 font-ui text-[11px] tracking-[0.4em] uppercase text-white/40 hover:text-accent transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          Back to Insights
        </Link>

        {/* Article Header */}
        <header className="max-w-4xl mb-20">
          <div className="flex items-center gap-6 mb-8 font-ui text-[10px] tracking-widest uppercase">
            <span className="px-4 py-1 border border-accent text-accent">{post.category}</span>
            <span className="text-white/30">{post.date}</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase leading-[0.9] mb-12">
            {post.title}
          </h1>
          <div className="flex items-center gap-12 font-ui text-[10px] tracking-widest uppercase text-white/50 border-y border-white/10 py-8">
            <span className="flex items-center gap-3"><User className="w-4 h-4 text-accent" /> {post.author}</span>
            <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-accent" /> {post.readTime}</span>
            <button className="flex items-center gap-3 hover:text-accent transition-colors ml-auto"><Share2 className="w-4 h-4" /> Share</button>
          </div>
        </header>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <article className="lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none font-body font-light text-white/60 leading-relaxed space-y-12">
              {/* Simple MD renderer substitute */}
              {post.content.split('\n\n').map((block, i) => {
                if (block.startsWith('# ')) return <h1 key={i} className="font-display text-5xl text-white uppercase mt-16 mb-8">{block.replace('# ', '')}</h1>
                if (block.startsWith('## ')) return <h2 key={i} className="font-display text-4xl text-white uppercase mt-12 mb-6 border-b border-white/10 pb-4">{block.replace('## ', '')}</h2>
                if (block.startsWith('### ')) return <h3 key={i} className="font-display text-3xl text-white uppercase mt-10 mb-4">{block.replace('### ', '')}</h3>
                if (block.startsWith('1. ') || block.startsWith('- ')) {
                   return (
                     <ul key={i} className="space-y-4 list-none">
                       {block.split('\n').map((li, j) => (
                         <li key={j} className="flex gap-4 items-start">
                           <span className="text-accent mt-1">/</span>
                           <span className="uppercase tracking-tight text-white/50">{li.replace(/^[0-9.-]\s+/, '')}</span>
                         </li>
                       ))}
                     </ul>
                   )
                }
                return <p key={i} className="first-letter:text-5xl first-letter:font-display first-letter:text-accent first-letter:mr-3 first-letter:float-left">{block}</p>
              })}
            </div>
            
            <footer className="mt-24 pt-12 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-4">
                {['Drones', 'UK', post.category, 'UAV'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 font-ui text-[9px] tracking-widest text-white/30 uppercase">#{tag}</span>
                ))}
              </div>
            </footer>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-16">
            <div>
              <h4 className="font-display text-2xl text-white uppercase mb-8 tracking-widest border-b border-accent pb-4 inline-block">Related Insights</h4>
              <div className="space-y-10">
                {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((p, i) => (
                  <Link key={i} href={`/blog/${p.slug}`} className="group block">
                    <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-accent mb-3 block">{p.category}</span>
                    <h5 className="font-display text-xl text-white group-hover:text-accent transition-colors uppercase leading-tight">{p.title}</h5>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-10 bg-accent text-dark">
              <h4 className="font-display text-4xl mb-6 leading-none">Need a Professional?<br />Altitude Drone.</h4>
              <p className="font-body text-sm font-medium uppercase tracking-widest mb-10 opacity-70">CAA Approved operations across the UK.</p>
              <Link href="/contact" className="font-display text-xl border-b - 2 border-dark pb-1 hover:opacity-50 transition-opacity uppercase tracking-widest">
                Get a Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
