import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'

export const dynamic = 'force-dynamic'
import { 
  FileText, 
  Plus, 
  Eye, 
  Edit3, 
  Trash2, 
  MoreVertical,
  Globe,
  Lock
} from 'lucide-react'

export default async function CaseStudyCMSPage() {
  const supabase = await createClient()

  const { data: studies, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('order_index', { ascending: true })

  if (error) {
    return <div className="p-10 text-red-500">CMS CONNECTION ERROR: {error.message}</div>
  }

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Portfolio CMS</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage Mission Intelligence & Public Case Studies</p>
        </div>
        
        <button className="flex items-center gap-4 bg-accent text-dark px-10 py-5 font-display text-xl tracking-widest hover:bg-white transition-all group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          NEW CASE STUDY
        </button>
      </div>

      {/* Stats Ribbon */}
      <div className="flex gap-10 border-y border-white/5 py-8">
        <div className="flex items-center gap-4">
           <Globe className="w-4 h-4 text-accent" />
           <span className="font-ui text-[10px] text-white/40 uppercase tracking-widest">
             Published: <span className="text-white ml-2">{studies?.filter(s => s.is_published).length || 0}</span>
           </span>
        </div>
        <div className="flex items-center gap-4">
           <Lock className="w-4 h-4 text-white/20" />
           <span className="font-ui text-[10px] text-white/40 uppercase tracking-widest">
             Drafts: <span className="text-white ml-2">{studies?.filter(s => !s.is_published).length || 0}</span>
           </span>
        </div>
      </div>

      {/* CMS Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studies?.map((study) => (
          <div key={study.id} className="group relative bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col">
            {/* Thumbnail Placeholder */}
            <div className="aspect-video bg-white/5 relative overflow-hidden">
               {study.main_image ? (
                <Image 
                  src={study.main_image} 
                  alt={study.title} 
                  fill
                  className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500" 
                />
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   <FileText className="w-12 h-12" />
                 </div>
               )}
               <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
                 <span className="font-ui text-[9px] text-white/60 tracking-widest uppercase">
                   {study.is_published ? 'Live' : 'Draft'}
                 </span>
               </div>
            </div>

            <div className="p-8 flex-1">
              <div className="font-ui text-[10px] text-accent tracking-[0.2em] uppercase mb-2">{study.industry}</div>
              <h3 className="font-display text-2xl text-white tracking-widest uppercase mb-4 group-hover:text-accent transition-colors">
                {study.title}
              </h3>
              <p className="font-body text-xs text-white/30 line-clamp-2 uppercase tracking-wider leading-relaxed">
                {study.description}
              </p>
            </div>

            <div className="p-6 border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <button className="p-2 text-white/20 hover:text-white transition-colors"><Eye className="w-4 h-4" /></button>
                 <button className="p-2 text-white/20 hover:text-accent transition-colors"><Edit3 className="w-4 h-4" /></button>
                 <button className="p-2 text-white/20 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
               </div>
               <button className="text-white/10 hover:text-white transition-colors">
                 <MoreVertical className="w-4 h-4" />
               </button>
            </div>
          </div>
        ))}

        {(!studies || studies.length === 0) && (
          <div className="col-span-full py-40 text-center border border-dashed border-white/10">
            <FileText className="w-16 h-16 text-white/5 mx-auto mb-6" />
            <h3 className="font-display text-2xl text-white/20 tracking-widest uppercase">No Records on Disk</h3>
            <p className="font-ui text-[10px] text-white/5 uppercase tracking-widest mt-2">Begin mission documentation above</p>
          </div>
        )}
      </div>
    </div>
  )
}
