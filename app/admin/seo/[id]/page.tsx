'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, BarChart3, CheckCircle2, AlertTriangle, 
  ExternalLink, Search, Globe, Link as LinkIcon,
  Smartphone, Monitor, MousePointer2, Target
} from 'lucide-react'
import { getSeoPageById } from '@/lib/seo-registry-mock'

export default function PageDetailView() {
  const { id } = useParams()
  const router = useRouter()
  const page = getSeoPageById(id as string)

  if (!page) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h2 className="font-display text-4xl text-white mb-8">PAGE NOT FOUND</h2>
        <button onClick={() => router.back()} className="text-accent uppercase tracking-widest font-ui text-sm">Return to Index</button>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Breadcrumbs & Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
           <button onClick={() => router.back()} className="p-4 border border-white/10 text-white/40 hover:text-white transition-all">
              <ArrowLeft className="w-5 h-5" />
           </button>
           <div>
              <div className="flex items-center gap-3 mb-2">
                 <span className={`px-2 py-0.5 font-ui text-[8px] tracking-widest uppercase border ${page.status === 'Published' ? 'border-green-500/30 text-green-500' : 'border-yellow-500/30 text-yellow-500'}`}>
                    {page.status}
                 </span>
                 <span className="font-ui text-[10px] text-white/30 uppercase tracking-[0.2em]">{page.pageType.replace(/_/g, ' ')}</span>
              </div>
              <h1 className="font-display text-3xl text-white uppercase tracking-widest">{page.seoTitle}</h1>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <Link href={page.fullUrl} target="_blank" className="px-6 py-3 border border-white/10 font-ui text-[10px] tracking-widest text-white/60 uppercase hover:bg-white/5 hover:text-white transition-all flex items-center gap-2">
             <ExternalLink className="w-3 h-3" /> Live Preview
           </Link>
           <button className="px-8 py-3 bg-accent text-dark font-ui text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all">
             Save Changes
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Column: Content & SEO */}
        <div className="lg:col-span-2 space-y-12">
          {/* Metadata Section */}
          <div className="p-10 border border-white/5 bg-white/[0.01]">
             <h2 className="font-display text-xl text-white uppercase tracking-widest mb-10 pb-6 border-b border-white/5">Metadata & Content</h2>
             <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">H1 Headline</label>
                      <input type="text" defaultValue={page.h1} className="w-full bg-white/5 border border-white/10 p-4 font-body text-sm text-white focus:border-accent/50 outline-none" />
                   </div>
                   <div className="space-y-4">
                      <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">Primary Keyword</label>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-4 font-mono text-[10px] text-accent uppercase tracking-widest">
                         <Search className="w-3 h-3 opacity-40" /> {page.targetKeyword}
                      </div>
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">Meta Description</label>
                   <textarea rows={3} defaultValue={page.metaDescription} className="w-full bg-white/5 border border-white/10 p-4 font-body text-sm text-white focus:border-accent/50 outline-none resize-none" />
                   <div className="flex justify-between items-center text-[8px] tracking-widest text-white/20 uppercase">
                      <span>Character Count: {page.metaDescription.length}</span>
                      <span>Target: 150-160</span>
                   </div>
                </div>
                <div className="space-y-4 pt-6">
                   <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">H2 Content Outline</label>
                   <div className="grid grid-cols-1 gap-2">
                      {page.h2Outline.map((h2, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 text-white/60 font-body text-[11px] uppercase tracking-widest">
                           <span className="text-white/20">0{i+1}</span> {h2}
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Configuration Section */}
          <div className="p-10 border border-white/5 bg-white/[0.01]">
             <h2 className="font-display text-xl text-white uppercase tracking-widest mb-10 pb-6 border-b border-white/5">System Configuration</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                   <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">Indexability Status</label>
                   <select defaultValue={page.indexabilityStatus} className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[10px] text-white uppercase tracking-widest outline-none focus:border-accent/50">
                      <option>Index</option>
                      <option>Noindex</option>
                      <option>Draft</option>
                      <option>Canonicalised</option>
                   </select>
                </div>
                <div className="space-y-4">
                   <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">Parent Service</label>
                   <div className="p-4 bg-white/5 border border-white/10 text-white/60 font-ui text-[10px] uppercase tracking-widest truncate">{page.parentService || 'None'}</div>
                </div>
                <div className="space-y-4">
                   <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">Target Outcome</label>
                   <div className="p-4 bg-white/5 border border-white/10 text-white/60 font-ui text-[10px] uppercase tracking-widest truncate">{page.targetOutcome || 'None'}</div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar: Analytics & Quality */}
        <div className="space-y-12">
           {/* Quality Score Card */}
           <div className="p-10 border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-display text-xl text-white uppercase tracking-widest">Quality Audit</h3>
                 <span className={`text-2xl font-display ${page.quality.qualityScore >= 80 ? 'text-green-500' : 'text-yellow-500'}`}>{page.quality.qualityScore}/100</span>
              </div>
              <div className="h-1 bg-white/5 mb-10">
                 <div className={`h-full ${page.quality.qualityScore >= 80 ? 'bg-green-500' : 'bg-yellow-500'}`} style={{ width: `${page.quality.qualityScore}%` }} />
              </div>
              
              <div className="space-y-6">
                 {[
                   { label: 'Thin Content', value: page.quality.thinContentWarning },
                   { label: 'Duplicate Risk', value: page.quality.duplicateRiskWarning },
                   { label: 'FAQ Present', value: page.hasFaq, inverse: true },
                   { label: 'Schema Active', value: page.hasSchema, inverse: true },
                   { label: 'Review Required', value: page.quality.humanReviewRequired }
                 ].map((check, i) => (
                   <div key={i} className="flex items-center justify-between">
                      <span className="font-ui text-[10px] tracking-widest uppercase text-white/40">{check.label}</span>
                      {check.inverse ? (
                        check.value ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      ) : (
                        check.value ? <AlertTriangle className="w-4 h-4 text-red-500" /> : <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                   </div>
                 ))}
              </div>
           </div>

           {/* Analytics Snapshot */}
           <div className="p-10 border border-white/5 bg-black">
              <h3 className="font-display text-xl text-white uppercase tracking-widest mb-10 pb-6 border-b border-white/5 flex items-center gap-3">
                 <BarChart3 className="w-5 h-5 text-accent/50" /> Performance
              </h3>
              <div className="grid grid-cols-2 gap-8 mb-10">
                 <div>
                    <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">Impressions</span>
                    <span className="block font-display text-3xl text-white">{page.analytics.impressions.toLocaleString()}</span>
                 </div>
                 <div>
                    <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">CTR</span>
                    <span className="block font-display text-3xl text-white">{(page.analytics.ctr * 100).toFixed(1)}%</span>
                 </div>
                 <div>
                    <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">Avg. Position</span>
                    <span className="block font-display text-3xl text-white">{page.analytics.averagePosition}</span>
                 </div>
                 <div>
                    <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">Conversions</span>
                    <span className="block font-display text-3xl text-accent">{page.analytics.conversions}</span>
                 </div>
              </div>

              {/* Conversion Events */}
              <div className="space-y-4">
                 <h4 className="font-ui text-[9px] tracking-widest text-white/30 uppercase mb-4">Conversion Events</h4>
                 {[
                   { label: 'Brief Starts', value: page.analytics.briefingFormStarts },
                   { label: 'Brief Completions', value: page.analytics.briefingFormCompletions },
                   { label: 'Phone Clicks', value: page.analytics.callClicks }
                 ].map((ev, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5">
                      <span className="font-ui text-[9px] tracking-widest uppercase text-white/50">{ev.label}</span>
                      <span className="font-mono text-[10px] text-white">{ev.value}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
