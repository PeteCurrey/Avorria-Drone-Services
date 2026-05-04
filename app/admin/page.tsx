import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
import { 
  Users, 
  FileText, 
  Zap, 
  TrendingUp,
  Clock,
  ArrowUpRight
} from 'lucide-react'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // 1. Fetch Stats
  const { count: leadsCount } = await supabase
    .from('leads')
    .select('*', { count: 'exact', head: true })

  const { count: cmsCount } = await supabase
    .from('case_studies')
    .select('*', { count: 'exact', head: true })

  const stats = [
    { label: 'Operational Leads', value: leadsCount || 0, icon: Users, color: 'text-accent' },
    { label: 'CMS Case Studies', value: cmsCount || 0, icon: FileText, color: 'text-blue-400' },
    { label: 'Uplink Reliability', value: '100%', icon: Zap, color: 'text-green-500' },
    { label: 'Growth indexing', value: '+12.5%', icon: TrendingUp, color: 'text-accent' },
  ]

  return (
    <div className="space-y-12">
      {/* Title Area */}
      <div>
        <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Dashboard</h1>
        <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Fleet Status & Lead Intelligence Overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 p-8 group hover:border-accent/40 transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 bg-white/5 border border-white/10 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-accent transition-colors" />
            </div>
            <div className="font-display text-4xl text-white mb-2 tracking-widest">{stat.value}</div>
            <div className="font-ui text-[10px] tracking-widest text-white/30 uppercase">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Activity (Leads) */}
        <div className="xl:col-span-2 space-y-6">
           <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="font-display text-xl text-white tracking-widest uppercase">Latest Uplinks (Leads)</h3>
              <Link href="/admin/leads" className="font-ui text-[9px] text-accent tracking-widest uppercase hover:text-white transition-colors">View All Contacts →</Link>
           </div>

           <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-white/5 bg-white/[0.02]">
                   <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Timestamp</th>
                   <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Origin</th>
                   <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Type</th>
                   <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Status</th>
                 </tr>
               </thead>
               <tbody>
                  {/* Mock for initial render if no data */}
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-mono text-[10px] text-white/60">2026-04-12 14:15</td>
                    <td className="p-6 text-white font-ui text-[12px] tracking-widest uppercase">Global Logistics Ltd</td>
                    <td className="p-6 text-accent font-ui text-[10px] tracking-widest uppercase">Project Brief</td>
                    <td className="p-6">
                      <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-ui text-[9px] tracking-widest uppercase">Active</span>
                    </td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-mono text-[10px] text-white/60">2026-04-12 11:42</td>
                    <td className="p-6 text-white font-ui text-[12px] tracking-widest uppercase">James Harrison</td>
                    <td className="p-6 text-white/60 font-ui text-[10px] tracking-widest uppercase">Standard</td>
                    <td className="p-6">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 font-ui text-[9px] tracking-widest uppercase">Archived</span>
                    </td>
                  </tr>
               </tbody>
             </table>
           </div>
        </div>

        {/* System Health / Resources */}
        <div className="space-y-6">
           <div className="border-b border-white/5 pb-4">
              <h3 className="font-display text-xl text-white tracking-widest uppercase">Local Assets</h3>
           </div>
           
           <div className="space-y-4">
             {[
               { name: 'M350 RTK System', status: 'In- hangar', level: 92 },
               { name: 'Mavic 3 Thermal', status: 'Deployment', level: 45 },
               { name: 'Inspire 3 Pro', status: 'Maintenance', level: 18 },
             ].map((drone, i) => (
               <div key={i} className="bg-white/[0.02] border border-white/5 p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-ui text-[11px] text-white tracking-widest uppercase">{drone.name}</div>
                    <div className="font-mono text-[9px] text-white/30 uppercase">{drone.status}</div>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${drone.level}%` }} />
                  </div>
               </div>
             ))}
           </div>

           <div className="bg-accent/5 border border-accent/10 p-6 flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent shrink-0" />
              <div>
                 <div className="font-ui text-[10px] text-accent tracking-widest uppercase mb-1">Next Sync</div>
                 <div className="font-body text-[12px] text-white/40">Automated drone telemetry sync scheduled in 14m 22s.</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
