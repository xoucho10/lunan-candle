'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Story(){
  const [active,setActive]=useState(0)
  return (
    <main className="bg-[#FFFCF7] text-[#2B1A0E]">
      {/* HERO - EDITORIAL */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="text-[10px] tracking-[0.4em] opacity-40">KENDWA, ZANZIBAR • EST. 2024</p>
          <h1 className="font-serif text-[48px] md:text-[88px] leading-[0.85] mt-6">Ritual over<br/><span className="italic font-light">Routine.</span></h1>
          <p className="mt-8 text-[13px] leading-[1.9] opacity-70 max-w-[480px]">LUNA CANDLES AFRICAN was born on Kendwa beach at sunset — where shea butter smoke meets terracotta dust. We were tired of luxury that forgets its roots.</p>
          <p className="mt-6 text-[12px] leading-[1.8] opacity-60 max-w-[440px]">A candle should be a ritual, not a product. Hand-thrown terracotta, vegan shea butter wax, 60-hour burn. Then wash. Then it lives as a planter, brush holder, incense bowl. No waste. Only ritual.</p>
          <div className="mt-10 flex gap-10 border-t border-[#F0E6D8] pt-8 max-w-[440px]">
            <div><p className="font-serif text-3xl">60H</p><p className="text-[8px] tracking-[0.3em] opacity-40 mt-1">BURN TIME</p></div>
            <div><p className="font-serif text-3xl">100%</p><p className="text-[8px] tracking-[0.3em] opacity-40 mt-1">VEGAN WAX</p></div>
            <div><p className="font-serif text-3xl">0%</p><p className="text-[8px] tracking-[0.3em] opacity-40 mt-1">PLASTIC</p></div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-[4/5.5] bg-[#F5F1EB] relative overflow-hidden border border-[#F0E6D8]">
            <img src="/candles/oba.jpg" alt="Kendwa Studio" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-[8px] tracking-[0.3em] text-white/80">KENDWA STUDIO • HAND-THROWN TERRACOTTA</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER - SPLIT */}
      <section className="bg-[#2B1A0E] text-[#FFFCF7]">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2">
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <p className="text-[9px] tracking-[0.4em] opacity-40">FOUNDER</p>
            <h2 className="font-serif text-[36px] md:text-[44px] leading-[0.9] mt-6">African woman<br/><span className="italic font-light opacity-80">building a global<br/>luxury house.</span></h2>
            <p className="mt-8 text-[12px] leading-[1.9] opacity-60 max-w-[380px]">Minimal, bold, rooted. I grew up watching my grandmother melt shea butter over fire in Ghana. That smell — earthy, smoky, safe — is LUNA. We source shea from a women's co-op in Tamale. We throw terracotta in Kendwa. We emboss tribal patterns that tell our story.</p>
            <p className="mt-6 text-[11px] leading-[1.8] opacity-50 max-w-[380px]">No paraffin. No phthalates. No performative sustainability. Just real craft that lasts.</p>
            <div className="mt-10">
              <p className="font-serif text-lg">— Luna</p>
              <p className="text-[8px] tracking-[0.3em] opacity-40 mt-1">FOUNDER, KENDWA</p>
            </div>
          </div>
          <div className="bg-[#FFFBF2] aspect-[4/4] md:aspect-auto relative overflow-hidden">
            <img src="/candles/sana.jpg" alt="Founder ritual" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-[#2B1A0E]/10" />
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY - INTERACTIVE 3 CARDS */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[9px] tracking-[0.4em] opacity-30">ZERO WASTE LUXURY</p>
            <h2 className="font-serif text-[32px] md:text-[44px] mt-4 leading-[0.9]">How we make<br/>it better.</h2>
          </div>
          <p className="hidden md:block text-[10px] tracking-[0.3em] opacity-40 max-w-[240px] text-right leading-relaxed">Every decision: does it honor earth, hands, and ritual?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {num:'01',title:'Shea Butter Wax',desc:'Sourced from Ghanaian women co-op. Burns 30% slower, cleaner, soot-free. 100% vegan, cruelty-free, no paraffin, no palm.',img:'/candles/zola.jpg',stats:'60H • Clean Burn'},
            {num:'02',title:'Hand-Thrown Terracotta',desc:'Each vessel thrown by hand in Kendwa, Zanzibar. Embossed with tribal patterns. Fired in solar kiln. Reusable forever as planter, bowl, brush holder.',img:'/candles/kito.jpg',stats:'Reusable • 1.2kg Clay'},
            {num:'03',title:'Refill, Not Landfill',desc:'Return 3 jars, get 1 refill free. Or buy refill wax $24. We melt, clean, refill. Circular luxury is not marketing — it is design.',img:'/candles/aba.jpg',stats:'$24 Refill • ∞ Lives'},
          ].map((c,i)=>(
            <div key={c.num} onMouseEnter={()=>setActive(i)} className={`group relative bg-[#FFFBF2] border p-8 md:p-10 transition-all duration-500 cursor-pointer ${active===i?'border-[#2B1A0E] bg-white shadow-[0_20px_60px_rgba(43,26,14,0.08)] -translate-y-1':'border-[#F0E6D8]'}`}>
              <p className="text-[9px] tracking-[0.4em] opacity-30">{c.num}</p>
              <h3 className="font-serif text-2xl mt-6 leading-tight">{c.title}</h3>
              <p className="mt-4 text-[11px] leading-[1.8] opacity-60">{c.desc}</p>
              <div className="mt-8 aspect-[4/3] overflow-hidden bg-[#F5F1EB]">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <p className="mt-6 text-[8px] tracking-[0.3em] opacity-40">{c.stats}</p>
              <div className={`absolute bottom-0 left-0 h-[2px] bg-[#2B1A0E] transition-all duration-700 ${active===i?'w-full':'w-0'}`} />
            </div>
          ))}
        </div>
      </section>

      {/* VESSEL LIVES ON - TIMELINE */}
      <section className="bg-[#F5F1EB] border-y border-[#E8DCCF]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <h2 className="font-serif text-[30px] md:text-[38px] leading-[0.9]">The Vessel<br/><span className="italic font-light">Lives On.</span></h2>
            <div className="mt-10 space-y-8">
              {[
                {step:'01',title:'Burn 60H',desc:'Shea butter, cotton wick, no tunneling if you burn to edge first time.'},
                {step:'02',title:'Wash Warm',desc:'Warm water, soap, wipe. Shea washes clean, unlike paraffin.'},
                {step:'03',title:'Reuse Forever',desc:'Planter, incense bowl, brush holder, coffee cup. Terracotta loves a second life.'},
              ].map(s=>(
                <div key={s.step} className="flex gap-5">
                  <span className="text-[10px] tracking-widest opacity-20 mt-1">{s.step}</span>
                  <div><p className="text-[11px] tracking-[0.2em] font-medium">{s.title}</p><p className="text-[11px] opacity-60 mt-1 leading-relaxed max-w-[280px]">{s.desc}</p></div>
                </div>
              ))}
            </div>
            <Link href="/shop" className="inline-block mt-10 bg-[#2B1A0E] text-white px-8 py-3.5 text-[10px] tracking-[0.25em] hover:bg-black transition">SHOP TERRACOTTA →</Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-3 gap-3">
            <div className="aspect-[3/4] bg-white border p-2"><img src="/candles/oba.jpg" className="w-full h-full object-cover" alt="" /><p className="text-[7px] tracking-widest mt-2 opacity-50 text-center">AS PLANTER</p></div>
            <div className="aspect-[3/4] bg-white border p-2 mt-8"><img src="/candles/sana.jpg" className="w-full h-full object-cover" alt="" /><p className="text-[7px] tracking-widest mt-2 opacity-50 text-center">AS BOWL</p></div>
            <div className="aspect-[3/4] bg-white border p-2"><img src="/candles/zola.jpg" className="w-full h-full object-cover" alt="" /><p className="text-[7px] tracking-widest mt-2 opacity-50 text-center">REFILL $24</p></div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-[960px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
        <p className="font-serif text-[28px] md:text-[42px] leading-[1.15]">"Luxury is not about price. It is about time. Time to throw clay, time to melt shea, time to burn slowly."</p>
        <p className="mt-8 text-[10px] tracking-[0.4em] opacity-40">KENDWA, ZANZIBAR • 2024</p>
        <div className="mt-16 flex justify-center gap-3">
          <Link href="/shop" className="bg-[#2B1A0E] text-white px-10 py-4 text-[11px] tracking-[0.3em]">SHOP COLLECTION</Link>
          <Link href="/stockists#contact" className="border border-[#2B1A0E] px-10 py-4 text-[11px] tracking-[0.3em] hover:bg-[#2B1A0E] hover:text-white transition">CONTACT STUDIO</Link>
        </div>
      </section>
    </main>
  )
}