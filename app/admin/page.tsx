// app/admin/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Mail, FileText, Settings, LogOut, ExternalLink, Trash2 } from 'lucide-react'
import { Enquiry, ProjectBrief } from '@/types'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'briefs'>('enquiries')
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [briefs, setBriefs] = useState<ProjectBrief[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        if (!supabase) {
          console.warn('Supabase not configured. Dashboard is in demo mode.')
          setLoading(false)
          return
        }
        
        const { data: enq } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false })
        const { data: brf } = await supabase.from('project_briefs').select('*').order('created_at', { ascending: false })
        
        if (enq) setEnquiries(enq)
        if (brf) setBriefs(brf)
      } catch (err) {
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="min-h-screen bg-dark flex flex-col md:flex-row pt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-80 border-r border-white/5 p-10 flex flex-col gap-10">
        <div className="font-display text-2xl tracking-widest text-white">ADMIN<br/><span className="text-accent">CONTROL</span></div>
        
        <nav className="flex flex-col gap-4">
          <button 
            onClick={() => setActiveTab('enquiries')}
            className={`flex items-center gap-4 py-3 px-6 font-ui text-[12px] tracking-widest uppercase transition-all ${activeTab === 'enquiries' ? 'bg-accent text-dark font-bold' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
          >
            <Mail className="w-4 h-4" /> Enquiries
          </button>
          <button 
            onClick={() => setActiveTab('briefs')}
            className={`flex items-center gap-4 py-3 px-6 font-ui text-[12px] tracking-widest uppercase transition-all ${activeTab === 'briefs' ? 'bg-accent text-dark font-bold' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
          >
            <FileText className="w-4 h-4" /> Project Briefs
          </button>
          <div className="h-px bg-white/5 my-4" />
          <button className="flex items-center gap-4 py-3 px-6 font-ui text-[12px] tracking-widest uppercase text-white/20 cursor-not-allowed">
            <Settings className="w-4 h-4" /> Settings
          </button>
          <button className="flex items-center gap-4 py-3 px-6 font-ui text-[12px] tracking-widest uppercase text-white/20 cursor-not-allowed">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-10 md:p-20 overflow-y-auto">
        <header className="flex justify-between items-end mb-16">
          <div>
            <div className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent mb-2">Operations Overview</div>
            <h1 className="font-display text-6xl text-white tracking-widest uppercase">{activeTab === 'enquiries' ? 'ENQUIRIES' : 'PROJECT BRIEFS'}</h1>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/5 border border-white/10 p-6 flex flex-col items-end">
              <span className="font-ui text-[9px] text-white/30 uppercase tracking-widest">Active Leads</span>
              <span className="font-display text-4xl text-accent">{enquiries.length + briefs.length}</span>
            </div>
          </div>
        </header>

        {loading ? (
          <div className="flex flex-col gap-6 animate-pulse">
            {[1, 2, 3].map(i => <div key={i} className="h-32 bg-white/5 border border-white/10" />)}
          </div>
        ) : (
          <div className="space-y-6">
            {activeTab === 'enquiries' ? (
              enquiries.length === 0 ? (
                <div className="p-20 border border-white/5 text-center font-body text-white/20 italic uppercase tracking-widest text-sm">No enquiries detected in current stream.</div>
              ) : (
                enquiries.map((enq) => (
                  <div key={enq.id} className="bg-white/5 border border-white/10 p-10 hover:border-accent/30 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="font-display text-2xl text-white mb-1">{enq.name}</div>
                        <div className="font-ui text-[11px] text-accent tracking-[0.2em] uppercase">{enq.email}</div>
                      </div>
                      <div className="text-white/20 font-ui text-[10px] tracking-widest">{new Date(enq.created_at).toLocaleDateString()}</div>
                    </div>
                    <p className="font-body text-sm text-white/50 leading-relaxed mb-8 border-l border-accent/20 pl-6">{enq.message}</p>
                    <div className="flex gap-4 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="font-ui text-[10px] tracking-widest uppercase bg-white/10 px-4 py-2 hover:bg-accent hover:text-dark transition-all">Reply</button>
                      <button className="text-white/20 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))
              )
            ) : (
              briefs.length === 0 ? (
                <div className="p-20 border border-white/5 text-center font-body text-white/20 italic uppercase tracking-widest text-sm">No project briefs submitted yet.</div>
              ) : (
                briefs.map((brief) => (
                  <div key={brief.id} className="bg-white/5 border border-white/10 p-10 hover:border-accent/30 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 py-2 px-10 bg-accent text-dark font-ui text-[9px] tracking-[0.3em] uppercase font-bold transform translate-x-[30%] translate-y-[50%] rotate-45">
                      New Mission
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      <div className="col-span-2">
                        <div className="font-ui text-[9px] text-accent tracking-widest uppercase mb-4">UAV MISSION PARAMETERS</div>
                        <h3 className="font-display text-3xl text-white mb-6 tracking-wide">{brief.missionType} • {brief.location}</h3>
                        
                        <div className="grid grid-cols-2 gap-x-12 gap-y-6 border-t border-white/5 pt-6">
                          <div>
                            <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest mb-1">Company</div>
                            <div className="font-body text-sm text-white">{brief.company || 'N/A'}</div>
                          </div>
                          <div>
                            <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest mb-1">Scale</div>
                            <div className="font-body text-sm text-white">{brief.scale}</div>
                          </div>
                          <div>
                            <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest mb-1">Deadline</div>
                            <div className="font-body text-sm text-white font-mono">{brief.deadline}</div>
                          </div>
                          <div>
                            <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest mb-1">Contact</div>
                            <div className="font-body text-sm text-white underline decoration-accent/30">{brief.email}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-8 border border-white/5">
                        <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest mb-4">Mission Notes</div>
                        <p className="font-body text-xs text-white/60 leading-relaxed italic">&quot;{brief.notes}&quot;</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-10 justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="flex items-center gap-2 font-ui text-[10px] tracking-widest uppercase bg-accent text-dark px-5 py-2 hover:bg-white transition-all">Action Brief <ExternalLink className="w-3.5 h-3.5" /></button>
                      <button className="text-white/20 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))
              )
            )}
          </div>
        )}
      </section>
    </main>
  )
}
