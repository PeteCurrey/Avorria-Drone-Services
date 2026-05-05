'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Users, TrendingUp, FileText, CheckCircle2, 
  ArrowUpRight, AlertCircle, Zap, ShieldCheck,
  Target, BarChart3, ArrowRight, Clock,
  Briefcase, Activity
} from 'lucide-react'
import { MOCK_ANALYTICS, MOCK_LEADS, MOCK_QUOTES, MOCK_WARNINGS } from '@/lib/admin/mock-data'

export default function CommandCentreOverview() {
  const stats = [
    { label: 'Total Leads', value: MOCK_ANALYTICS.leads, icon: Users, trend: '+12%', color: 'text-accent' },
    { label: 'Hot Leads', value: MOCK_LEADS.filter(l => l.leadScore >= 80).length, icon: Zap, trend: '+5%', color: 'text-orange-400' },
    { label: 'Project Briefs', value: MOCK_ANALYTICS.briefSubmissions, icon: Briefcase, trend: '+18%', color: 'text-blue-400' },
    { label: 'Won Projects', value: MOCK_ANALYTICS.wonProjects, icon: CheckCircle2, trend: '+8%', color: 'text-green-500' },
    { label: 'Quotes Pending', value: MOCK_QUOTES.filter(q => q.status === 'Sent').length, icon: FileText, trend: '-2%', color: 'text-white/40' },
    { label: 'SEO Quality', value: '92%', icon: Target, trend: '+4%', color: 'text-accent' },
  ]

  return (
    <div className="space-y-16 pb-20">
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Operational Overview</span>
          </div>
          <h1 className="font-display text-6xl text-white tracking-widest uppercase mb-4">Command Centre</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase max-w-2xl leading-relaxed">
            Operational control for leads, SEO, drone services, project briefs, deliverables, content quality and commercial performance.
          </p>
        </div>
        
        <div className="flex gap-4">
           <div className="bg-white/5 border border-white/10 px-8 py-4 flex flex-col items-end">
              <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">Local Time</span>
              <span className="font-mono text-xl text-white">21:46:12</span>
           </div>
           <div className="bg-accent/5 border border-accent/20 px-8 py-4 flex flex-col items-end">
              <span className="font-mono text-[9px] text-accent/60 uppercase tracking-widest mb-1">Status</span>
              <span className="font-mono text-xl text-accent">SECURE</span>
           </div>
        </div>
      </div>

      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-px bg-white/5 border border-white/5">
        {stats.map((stat, i) => (
          <div key={i} className="bg-black p-8 group hover:bg-white/[0.02] transition-all">
             <div className="flex justify-between items-start mb-6">
                <div className={`p-3 bg-white/5 border border-white/10 ${stat.color}`}>
                   <stat.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end">
                   <span className="font-mono text-[10px] text-green-500">{stat.trend}</span>
                   <ArrowUpRight className="w-3 h-3 text-white/10 group-hover:text-accent transition-colors" />
                </div>
             </div>
             <div className="font-display text-4xl text-white mb-2 tracking-widest">{stat.value}</div>
             <div className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Control Panels */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        
        {/* Left Column: Priorities & Leads */}
        <div className="xl:col-span-8 space-y-12">
          
          {/* Today's Priorities */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                 <AlertCircle className="w-5 h-5 text-orange-400" />
                 <h2 className="font-display text-2xl text-white uppercase tracking-widest">Today&apos;s Priorities</h2>
              </div>
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">{MOCK_LEADS.length} ACTIONS PENDING</span>
            </div>
            
            <div className="space-y-4">
               {MOCK_LEADS.slice(0, 3).map((lead, i) => (
                 <div key={i} className="bg-white/[0.02] border border-white/5 p-6 flex items-center justify-between group hover:border-accent/40 transition-all">
                    <div className="flex items-center gap-8">
                       <div className={`w-12 h-12 flex items-center justify-center font-display text-xl ${lead.leadScore >= 80 ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-accent/10 text-accent border border-accent/20'}`}>
                          {lead.leadScore}
                       </div>
                       <div>
                          <div className="font-display text-lg text-white uppercase tracking-widest mb-1">{lead.company}</div>
                          <div className="flex items-center gap-4">
                             <span className="font-ui text-[9px] text-white/40 uppercase tracking-widest">{lead.name}</span>
                             <span className="w-1 h-1 bg-white/10 rounded-full" />
                             <span className="font-ui text-[9px] text-accent tracking-widest uppercase">{lead.projectType}</span>
                          </div>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="text-right hidden sm:block">
                          <div className="font-mono text-[9px] text-white/20 uppercase mb-1">RECEIVED</div>
                          <div className="font-mono text-[10px] text-white/60">2H 14M AGO</div>
                       </div>
                       <Link href={`/admin/command-centre/enquiries`} className="p-4 bg-white/5 border border-white/10 hover:bg-accent hover:text-dark transition-all group/btn">
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
          </section>

          {/* Lead Flow Funnel */}
          <section>
             <div className="flex items-center justify-between mb-8 pt-8 border-t border-white/5">
                <h2 className="font-display text-2xl text-white uppercase tracking-widest">Conversion Intelligence</h2>
                <div className="flex gap-4">
                   <button className="font-ui text-[9px] text-accent tracking-widest uppercase border border-accent/20 px-4 py-2 hover:bg-accent hover:text-dark transition-all">7 Days</button>
                   <button className="font-ui text-[9px] text-white/30 tracking-widest uppercase border border-white/10 px-4 py-2 hover:bg-white/5 transition-all">30 Days</button>
                </div>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {[
                  { label: 'Visitors', value: '45.2k', sub: '100%' },
                  { label: 'Tool Start', value: '1,240', sub: '2.7%' },
                  { label: 'Tool Comp', value: '850', sub: '68%' },
                  { label: 'Brief Start', value: '320', sub: '37%' },
                  { label: 'Submissions', value: '145', sub: '45%' },
                  { label: 'Qualified', value: '124', sub: '85%' },
                  { label: 'Quoted', value: '58', sub: '46%' },
                  { label: 'Won', value: '22', sub: '38%' },
                ].map((step, i) => (
                  <div key={i} className="bg-white/[0.01] border border-white/5 p-6 text-center group hover:bg-accent/5 transition-all">
                     <div className="font-mono text-[10px] text-white/20 uppercase mb-4 tracking-tighter">{step.label}</div>
                     <div className="font-display text-2xl text-white mb-2">{step.value}</div>
                     <div className="font-mono text-[9px] text-accent">{step.sub}</div>
                  </div>
                ))}
             </div>
          </section>

        </div>

        {/* Right Column: Health & Pipeline */}
        <div className="xl:col-span-4 space-y-12">
           
           {/* Revenue Pipeline */}
           <section className="bg-white/[0.02] border border-white/5 p-10">
              <div className="flex items-center gap-4 mb-8">
                 <Activity className="w-5 h-5 text-accent" />
                 <h2 className="font-display text-xl text-white uppercase tracking-widest">Pipeline Value</h2>
              </div>
              
              <div className="space-y-6">
                 {[
                   { stage: 'Qualified', count: 12, value: '£42,500', color: 'bg-white/10' },
                   { stage: 'Quoting', count: 8, value: '£28,900', color: 'bg-accent/20' },
                   { stage: 'Sent', count: 15, value: '£156,000', color: 'bg-accent' },
                   { stage: 'Follow-up', count: 6, value: '£34,200', color: 'bg-orange-500/50' },
                 ].map((item, i) => (
                   <div key={i}>
                      <div className="flex justify-between items-end mb-2">
                         <span className="font-ui text-[10px] text-white/40 uppercase tracking-widest">{item.stage}</span>
                         <span className="font-mono text-sm text-white">{item.value}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 overflow-hidden">
                         <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: `${(item.count/41)*100}%` }} />
                      </div>
                      <div className="mt-1 text-right">
                         <span className="font-mono text-[8px] text-white/20 uppercase">{item.count} Records</span>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-center">
                 <div className="font-ui text-[11px] text-white/30 uppercase tracking-widest">Estimated Total</div>
                 <div className="font-display text-3xl text-accent tracking-widest">£261.6k</div>
              </div>
           </section>

           {/* Content Health Warnings */}
           <section className="bg-red-500/[0.02] border border-red-500/10 p-10">
              <div className="flex items-center gap-4 mb-8">
                 <AlertCircle className="w-5 h-5 text-red-500" />
                 <h2 className="font-display text-xl text-white uppercase tracking-widest">System Alerts</h2>
              </div>
              
              <div className="space-y-6">
                 {MOCK_WARNINGS.map((warning, i) => (
                   <div key={i} className="flex gap-4">
                      <div className={`w-1 h-auto ${warning.severity === 'High' ? 'bg-red-500' : 'bg-orange-500'}`} />
                      <div>
                         <div className="font-ui text-[10px] text-white uppercase tracking-widest mb-1">{warning.message}</div>
                         <div className="font-mono text-[9px] text-white/20 uppercase">{warning.pageTitle}</div>
                      </div>
                   </div>
                 ))}
              </div>
              
              <Link href="/admin/command-centre/content-quality" className="mt-8 block text-center py-4 border border-white/5 font-ui text-[9px] tracking-[0.4em] text-white/40 uppercase hover:text-white hover:bg-white/5 transition-all">
                 Review All Warnings
              </Link>
           </section>

           {/* SEO Engine Snapshot */}
           <section className="bg-white/[0.02] border border-white/5 p-10">
              <div className="flex items-center gap-4 mb-8">
                 <Target className="w-5 h-5 text-blue-400" />
                 <h2 className="font-display text-xl text-white uppercase tracking-widest">SEO Engine</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-white/5 border border-white/10">
                    <div className="font-mono text-[8px] text-white/30 uppercase mb-2">PUBLISHED</div>
                    <div className="font-display text-3xl text-white">124</div>
                 </div>
                 <div className="p-6 bg-white/5 border border-white/10">
                    <div className="font-mono text-[8px] text-white/30 uppercase mb-2">INDEXED</div>
                    <div className="font-display text-3xl text-green-500">118</div>
                 </div>
              </div>
              
              <div className="mt-6 p-6 border border-white/5 bg-black">
                 <div className="flex justify-between items-center mb-4">
                    <span className="font-ui text-[10px] text-white/40 uppercase tracking-widest">Quality Avg</span>
                    <span className="font-mono text-sm text-accent">92.4%</span>
                 </div>
                 <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-accent transition-all" style={{ width: '92.4%' }} />
                 </div>
              </div>
           </section>

        </div>
      </div>

      {/* Secondary Panels: Bundle & Service Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16 border-t border-white/5">
         
         <section>
            <div className="flex items-center justify-between mb-8">
               <h2 className="font-display text-2xl text-white uppercase tracking-widest">Service Demand</h2>
               <Link href="/admin/command-centre/services" className="font-ui text-[9px] text-white/30 tracking-[0.3em] uppercase hover:text-accent">Full Analysis →</Link>
            </div>
            <div className="bg-white/[0.01] border border-white/5">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Service</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Views</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Leads</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Conv</th>
                     </tr>
                  </thead>
                  <tbody className="font-mono text-[10px]">
                     <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors text-white/60">
                        <td className="p-6 uppercase">Roof Inspections</td>
                        <td className="p-6">4.2k</td>
                        <td className="p-6">42</td>
                        <td className="p-6 text-accent">1.0%</td>
                     </tr>
                     <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors text-white/60">
                        <td className="p-6 uppercase">Surveying & Mapping</td>
                        <td className="p-6">2.8k</td>
                        <td className="p-6">38</td>
                        <td className="p-6 text-accent">1.3%</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>

         <section>
            <div className="flex items-center justify-between mb-8">
               <h2 className="font-display text-2xl text-white uppercase tracking-widest">Bundle Performance</h2>
               <Link href="/admin/command-centre/bundles" className="font-ui text-[9px] text-white/30 tracking-[0.3em] uppercase hover:text-accent">Full Analysis →</Link>
            </div>
            <div className="bg-white/[0.01] border border-white/5">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Bundle</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Recommended</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Selected</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">ROI</th>
                     </tr>
                  </thead>
                  <tbody className="font-mono text-[10px]">
                     <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors text-white/60">
                        <td className="p-6 uppercase">Roof Intelligence Pack</td>
                        <td className="p-6">142</td>
                        <td className="p-6">18</td>
                        <td className="p-6 text-green-500">12.6x</td>
                     </tr>
                     <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors text-white/60">
                        <td className="p-6 uppercase">Survey Data Pack</td>
                        <td className="p-6">85</td>
                        <td className="p-6">12</td>
                        <td className="p-6 text-green-500">14.2x</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>

      </div>
    </div>
  )
}
