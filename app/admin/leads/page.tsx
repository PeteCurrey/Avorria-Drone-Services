import { createClient } from '@/lib/supabase/server'
import { 
  Users, 
  Search, 
  Filter, 
  Download,
  Mail,
  ChevronRight
} from 'lucide-react'

export default async function LeadsManagementPage() {
  const supabase = await createClient()

  // Fetch leads sorted by date
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="p-10 border border-red-500/20 bg-red-500/5 text-red-500">
        ERROR FETCHING UPLINK DATA: {error.message}
      </div>
    )
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Lead Intelligence</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Processing inbound mission signals</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" placeholder="Search coordinates..."
              className="bg-white/5 border border-white/10 py-3 pl-12 pr-4 text-white outline-none focus:border-accent transition-colors font-ui text-[10px] uppercase tracking-widest w-64"
            />
          </div>
          <button className="p-3 bg-white/5 border border-white/10 hover:border-accent transition-colors">
            <Filter className="w-4 h-4 text-white/40" />
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-accent hover:bg-accent hover:text-dark transition-all group">
            <Download className="w-4 h-4 opacity-40 group-hover:opacity-100" />
            <span className="font-ui text-[10px] tracking-widest uppercase">Export CSV</span>
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Date/Time</th>
              <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Operator</th>
              <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Type</th>
              <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Status</th>
              <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads?.map((lead) => (
              <tr key={lead.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                <td className="p-6">
                  <div className="font-mono text-[10px] text-white/60">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </div>
                  <div className="font-mono text-[9px] text-white/20 mt-1 uppercase">
                    {new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </td>
                <td className="p-6">
                  <div className="font-display text-lg text-white tracking-widest uppercase">{lead.full_name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="w-3 h-3 text-white/20" />
                    <span className="font-body text-[11px] text-white/40">{lead.email_address}</span>
                  </div>
                </td>
                <td className="p-6">
                  <span className={`font-ui text-[10px] tracking-widest uppercase ${lead.lead_type === 'brief' ? 'text-accent' : 'text-white/40'}`}>
                    {lead.lead_type}
                  </span>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${lead.status === 'new' ? 'bg-accent animate-pulse' : 'bg-white/10'}`} />
                    <span className="font-ui text-[9px] tracking-widest uppercase text-white/60">
                      {lead.status}
                    </span>
                  </div>
                </td>
                <td className="p-6 text-right">
                  <button className="p-3 bg-white/5 border border-white/10 hover:border-accent text-white/40 hover:text-accent transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}

            {(!leads || leads.length === 0) && (
              <tr>
                <td colSpan={5} className="p-20 text-center">
                  <Users className="w-12 h-12 text-white/5 mx-auto mb-6" />
                  <div className="font-display text-xl text-white/20 tracking-widest uppercase">No active signals found</div>
                  <p className="font-ui text-[10px] text-white/5 uppercase tracking-widest mt-2">Uplink terminal is standby</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
