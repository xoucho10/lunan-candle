'use client'
import { useState } from 'react'
import Link from 'next/link'

const posts=[
  {slug:"how-to-burn",title:"How to Burn for 60H",excerpt:"Trim, burn to edge, reuse terracotta. The science of a perfect burn.",category:"HOW TO",read:"4 MIN",img:"/candles/oba.jpg",featured:true},
  {slug:"shea-wax",title:"Why Shea Butter Wax?",excerpt:"Cleaner, slower, African. Why Ghanaian shea burns 30% longer than soy.",category:"MATERIALS",read:"5 MIN",img:"/candles/zola.jpg",featured:false},
  {slug:"self-care-ritual",title:"Night Self-Care Ritual",excerpt:"5 minute reset: breathe, burn OBA, journal. Rooted in Kendwa nights.",category:"RITUAL",read:"3 MIN",img:"/candles/kito.jpg",featured:false},
  {slug:"scent-layering",title:"Scent Layering Guide",excerpt:"How to layer FOCUS and CALM for work-from-home flow.",category:"SCENT GUIDE",read:"6 MIN",img:"/candles/sana.jpg",featured:false},
  {slug:"terracotta-care",title:"Terracotta Care",excerpt:"Wash, reuse, refill. 3 ways your vessel lives after 60H.",category:"HOW TO",read:"4 MIN",img:"/candles/aba.jpg",featured:false},
  {slug:"kendwa-diary",title:"Kendwa Diary: Throwing Clay",excerpt:"A day in our studio. Hands, dust, sun. How each jar is thrown.",category:"STUDIO",read:"7 MIN",img:"/candles/ayana.jpg",featured:false},
]

const cats=['ALL','HOW TO','RITUAL','MATERIALS','SCENT GUIDE','STUDIO']

export default function Journal(){
  const [cat,setCat]=useState('ALL')
  const [hovered,setHovered]=useState<string|null>(null)
  const filtered = cat==='ALL'? posts : posts.filter(p=>p.category===cat)
  const featured = filtered.find(p=>p.featured) || filtered[0]
  const rest = filtered.filter(p=>p.slug!==featured?.slug)

  return(
    <main className="bg-[#FFFCF7] text-[#2B1A0E]">
      {/* HEADER */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <p className="text-[9px] tracking-[0.4em] opacity-40">RITUALS JOURNAL • SEO • HOW TO BURN • SELF-CARE</p>
            <h1 className="font-serif text-[48px] md:text-[64px] leading-[0.9] mt-4">Rituals<br/><span className="italic font-light">Journal.</span></h1>
            <p className="text-[11px] opacity-60 mt-4 max-w-[380px] leading-relaxed">How to burn, self-care, scent guides. Written in Kendwa, for everywhere. No fluff, just ritual.</p>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-[360px] content-start">
            {cats.map(c=>(
              <button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 text-[9px] tracking-[0.25em] border transition ${cat===c?'bg-[#2B1A0E] text-white border-[#2B1A0E]':'border-[#E8DCCF] opacity-60 hover:opacity-100 hover:border-[#2B1A0E]'}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POST - BIG EDITORIAL */}
      {featured && (
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 pb-12">
          <Link href={`/journal/${featured.slug}`} className="group grid md:grid-cols-12 gap-0 border border-[#F0E6D8] bg-white overflow-hidden">
            <div className="md:col-span-7 aspect-[16/11] md:aspect-[4/3] overflow-hidden bg-[#F5F1EB] relative">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-[1200ms]" />
              <div className="absolute top-4 left-4 bg-[#FFFCF7] px-3 py-1 text-[8px] tracking-[0.3em]">{featured.category} • FEATURED</div>
            </div>
            <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-[9px] tracking-[0.3em] opacity-40">{featured.read} READ • KENDWA STUDIO</p>
              <h2 className="font-serif text-[32px] md:text-[42px] leading-[0.95] mt-4 group-hover:italic transition-all">{featured.title}</h2>
              <p className="text-[12px] leading-[1.8] opacity-60 mt-6 max-w-[340px]">{featured.excerpt}</p>
              <p className="mt-10 text-[10px] tracking-[0.3em] border-b border-[#2B1A0E] w-fit pb-1">READ ARTICLE →</p>
            </div>
          </Link>
        </section>
      )}

      {/* GRID - PREMIUM CARDS WITH HOVER REVEAL */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 pb-20">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {rest.map(p=>(
            <Link key={p.slug} href={`/journal/${p.slug}`} onMouseEnter={()=>setHovered(p.slug)} onMouseLeave={()=>setHovered(null)} className="group bg-[#FFFBF2] border border-[#F0E6D8] hover:border-[#2B1A0E] hover:shadow-[0_20px_60px_rgba(43,26,14,0.06)] transition-all duration-500 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-[#F5F1EB] relative">
                <img src={p.img} alt={p.title} className={`w-full h-full object-cover transition duration-700 ${hovered===p.slug?'scale-105':'scale-100'}`} />
                <div className="absolute top-3 left-3 bg-[#FFFCF7]/90 backdrop-blur px-2.5 py-1 text-[7px] tracking-[0.2em]">{p.category}</div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-[7px] tracking-widest text-white/80">{p.read} • SEO GUIDE</p>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-[20px] leading-[1.1] group-hover:italic transition-all">{p.title}</h3>
                <p className="text-[11px] opacity-60 mt-3 leading-[1.6] flex-1">{p.excerpt}</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-[9px] tracking-[0.2em] opacity-40">{p.read}</span>
                  <span className={`text-[9px] tracking-[0.2em] border-b pb-1 transition ${hovered===p.slug?'border-[#2B1A0E] opacity-100':'border-transparent opacity-40'}`}>READ →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length===0 && (
          <div className="py-20 text-center border border-dashed border-[#E8DCCF] mt-8">
            <p className="font-serif text-2xl opacity-20">No articles in {cat}</p>
            <button onClick={()=>setCat('ALL')} className="mt-4 text-[10px] tracking-[0.3em] border-b border-[#2B1A0E] pb-1">VIEW ALL</button>
          </div>
        )}
      </section>

      {/* NEWSLETTER - RITUAL INBOX */}
      <section className="bg-[#2B1A0E] text-[#FFFCF7]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <p className="text-[9px] tracking-[0.4em] opacity-40">INBOX RITUAL • 1 EMAIL / MONTH</p>
            <h3 className="font-serif text-[28px] md:text-[36px] leading-[0.9] mt-4">Get burning<br/><span className="italic font-light opacity-70">tips & refills.</span></h3>
          </div>
          <div className="md:col-span-6">
            <div className="flex gap-3">
              <input placeholder="Email address" className="flex-1 bg-transparent border border-white/20 px-5 py-3.5 text-[11px] tracking-widest placeholder:opacity-40 outline-none focus:border-white/50" />
              <button className="bg-[#FFFCF7] text-[#2B1A0E] px-8 py-3.5 text-[10px] tracking-[0.3em] hover:bg-white transition">JOIN</button>
            </div>
            <p className="text-[9px] opacity-40 mt-3 leading-relaxed">No spam. How to burn guides, new ritual drops, refill $24 early access.</p>
          </div>
        </div>
      </section>
    </main>
  )
}