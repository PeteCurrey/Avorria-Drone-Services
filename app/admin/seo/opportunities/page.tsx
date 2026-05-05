'use client'

import React from 'react'
import Link from 'next/link'
import { 
  AlertTriangle, TrendingUp, TrendingDown, EyeOff, 
  Search, Link as LinkIcon, FileText, Target,
  Zap, ArrowRight
} from 'lucide-react'
import { mockSeoPages } from '@/lib/seo-registry-mock'

export default function OpportunitiesDashboard() {
  const thinContentPages = mockSeoPages.filter(p => p.quality.thinContentWarning)
  const lowCtrPages = mockSeoPages.filter(p => p.analytics.ctr < 0.02 && p.analytics.impressions > 500)
  const missingFaqPages = mockSeoPages.filter(p => !p.hasFaq && p.status === 'Published')
  const readyToPublishPages = mockSeoPages.filter(p => p.status === 'Draft' && p.quality.qualityScore >= 75)

  const opportunities = [
    {
      id: 'low-ctr',
      title: 'High Impressions, Low CTR',
      desc: 'Pages with good visibility but poor click-through. Consider meta title/description optimization.',
      icon: TrendingDown,
      color: 'text-red-400',
      pages: lowCtrPages
    },
    {
      id: 'thin-content',
      title: 'Thin Content Warnings',
      desc: 'Pages under 500 words. High risk of being ignored by search engines or marked as low quality.',
      icon: FileText,
      color: 'text-yellow-400',
      pages: thinContentPages
    },
    {
      id: 'ready-publish',
      title: 'Ready to Publish',
      desc: 'Draft pages that meet the quality threshold (75+) and are ready for indexation review.',
      icon: Zap,
      color: 'text-green-400',
      pages: readyToPublishPages
    },
    {
      id: 'missing-faqs',
      title: 'Missing Structured Data (FAQs)',
      desc: 'Published pages without FAQ schema. Adding FAQs can improve SERP real estate.',
      icon: Target,
      color: 'text-blue-400',
      pages: missingFaqPages
    }
  ]

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-2">SEO Opportunities</h1>
          <p className="font-ui text-[11px] text-white/40 tracking-[0.2em] uppercase">Priority Actions for Ranking Improvements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {opportunities.map((opp) => (
          <div key={opp.id} className="border border-white/5 bg-white/[0.01] overflow-hidden">
             <div className="p-8 border-b border-white/5 flex items-start justify-between bg-white/[0.01]">
                <div className="flex items-start gap-4">
                   <div className={`p-4 border border-white/10 ${opp.color} bg-dark`}>
                      <opp.icon className="w-6 h-6" />
                   </div>
                   <div>
                      <h2 className="font-display text-xl text-white uppercase tracking-widest mb-2">{opp.title}</h2>
                      <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed max-w-sm">
                         {opp.desc}
                      </p>
                   </div>
                </div>
                <span className="font-display text-4xl text-white/20">{opp.pages.length}</span>
             </div>
             
             <div className="max-h-80 overflow-y-auto no-scrollbar divide-y divide-white/5">
                {opp.pages.map((page) => (
                  <div key={page.pageId} className="p-6 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
                     <div className="flex-1 min-w-0 mr-4">
                        <div className="font-display text-sm text-white mb-1 uppercase tracking-wider truncate">{page.seoTitle}</div>
                        <div className="font-mono text-[9px] text-white/30 truncate">{page.fullUrl}</div>
                     </div>
                     <div className="flex items-center gap-6">
                        {opp.id === 'low-ctr' && (
                          <div className="text-right">
                             <div className="font-mono text-[10px] text-red-400">{(page.analytics.ctr * 100).toFixed(1)}% CTR</div>
                             <div className="font-mono text-[8px] text-white/20 uppercase">{page.analytics.impressions} IMP</div>
                          </div>
                        )}
                        <Link href={`/admin/seo/${page.pageId}`} className="p-3 border border-white/10 text-white/30 hover:text-accent hover:border-accent/30 transition-all">
                           <ArrowRight className="w-4 h-4" />
                        </Link>
                     </div>
                  </div>
                ))}
                {opp.pages.length === 0 && (
                  <div className="p-12 text-center">
                     <p className="font-ui text-[10px] tracking-widest text-white/20 uppercase italic">No current issues in this category.</p>
                  </div>
                )}
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}
