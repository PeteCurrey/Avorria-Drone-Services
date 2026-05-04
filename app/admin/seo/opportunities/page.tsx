'use client'

import Link from 'next/link'
import { ArrowLeft, ChevronRight, AlertTriangle, TrendingDown, FileX, ZapOff } from 'lucide-react'
import { getPagesRequiringImprovement } from '@/lib/seo-registry-mock'

export default function SeoOpportunitiesPage() {
  const needsImprovement = getPagesRequiringImprovement()

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="flex items-center gap-4 text-white/40 mb-10">
        <Link href="/admin/seo" className="hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /></Link>
        <span className="font-ui text-[10px] tracking-widest uppercase">SEO Engine</span>
        <ChevronRight className="w-3 h-3" />
        <span className="font-ui text-[10px] tracking-widest uppercase text-white">Opportunities & Warnings</span>
      </div>

      <div>
        <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-4 flex items-center gap-4">
          <AlertTriangle className="w-8 h-8 text-yellow-500" /> Improvement Opportunities
        </h1>
        <p className="font-body text-sm text-white/40 uppercase tracking-widest max-w-2xl leading-relaxed">
          Monitor underperforming pages, thin content warnings, missing FAQs, and low click-through rates across the SEO footprint.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 border border-white/5 bg-black">
          <TrendingDown className="w-6 h-6 text-red-500 mb-4" />
          <h3 className="font-display text-2xl text-white mb-2 uppercase tracking-widest">Low CTR</h3>
          <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">Pages ranking on page 1 but receiving fewer clicks than expected.</p>
        </div>
        <div className="p-6 border border-white/5 bg-black">
          <FileX className="w-6 h-6 text-yellow-500 mb-4" />
          <h3 className="font-display text-2xl text-white mb-2 uppercase tracking-widest">Thin Content</h3>
          <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">Pages with a uniqueness score below 60 or word count under 400.</p>
        </div>
        <div className="p-6 border border-white/5 bg-black">
          <ZapOff className="w-6 h-6 text-accent mb-4" />
          <h3 className="font-display text-2xl text-white mb-2 uppercase tracking-widest">Missing Conversion</h3>
          <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">Pages receiving traffic but zero briefing form starts.</p>
        </div>
      </div>

      <div className="border border-white/5 bg-black overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 font-ui text-[9px] tracking-[0.2em] uppercase text-white/30 bg-white/[0.02]">
              <th className="p-6 font-normal">Page</th>
              <th className="p-6 font-normal">Issue Type</th>
              <th className="p-6 font-normal text-right">Quality Score</th>
              <th className="p-6 font-normal text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {needsImprovement.map(page => (
              <tr key={page.pageId} className="group hover:bg-white/[0.02] transition-colors">
                <td className="p-6">
                  <div className="font-display text-sm text-white mb-1 uppercase tracking-wider">{page.seoTitle}</div>
                  <div className="font-mono text-[9px] text-white/30">{page.fullUrl}</div>
                </td>
                <td className="p-6">
                   <div className="flex flex-col gap-1">
                     {page.quality.thinContentWarning && <span className="text-yellow-500 font-mono text-[9px] uppercase">Thin Content</span>}
                     {page.quality.missingFaqWarning && <span className="text-accent/60 font-mono text-[9px] uppercase">Missing FAQs</span>}
                     {page.quality.humanReviewRequired && <span className="text-red-500 font-mono text-[9px] uppercase">Review Required</span>}
                   </div>
                </td>
                <td className="p-6 text-right font-mono text-[10px] text-white/60">
                   <span className={page.quality.qualityScore < 50 ? 'text-red-500' : 'text-yellow-500'}>
                     {page.quality.qualityScore}/100
                   </span>
                </td>
                <td className="p-6 text-right space-x-4">
                   <button className="font-ui text-[9px] tracking-widest text-accent hover:text-white uppercase transition-colors">Edit Content</button>
                   <button className="font-ui text-[9px] tracking-widest text-white/30 hover:text-red-500 uppercase transition-colors">Set Noindex</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {needsImprovement.length === 0 && (
          <div className="p-12 text-center text-white/30 font-ui text-[11px] tracking-widest uppercase">
            All pages are currently passing quality checks.
          </div>
        )}
      </div>
    </div>
  )
}
