'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const products=[
  {id:'oba',name:'OBA',sub:'Smoked Cedar',ritual:'BOLD • 60H',price:48,img:'/candles/oba.jpg',hover:'/candles/oba.jpg',scent:'Smoked Cedar + Black Pepper + Amber',notes:['Top: Black Pepper, Bergamot','Heart: Smoked Cedar, Leather','Base: Amber, Shea, Vetiver'],story:'Rooted in Kendwa night rituals. OBA is bold, grounded, for focus and strength. Hand-thrown terracotta, embossed tribal patterns.',burn:'60H',wax:'Shea Butter',vessel:'Reusable Terracotta'},
  {id:'sana',name:'SANA',sub:'Eucalyptus',ritual:'FOCUS • 60H',price:48,img:'/candles/sana.jpg',hover:'/candles/ayana.jpg',scent:'Eucalyptus + Rosemary + Lime',notes:['Top: Lime, Mint','Heart: Eucalyptus, Rosemary','Base: Shea, Moss'],story:'For clarity and morning focus. Hand-poured in Zanzibar with eucalyptus and rosemary.',burn:'60H',wax:'Shea Butter',vessel:'Reusable Terracotta'},
  {id:'zola',name:'ZOLA',sub:'Lavender',ritual:'CALM • 60H',price:48,img:'/candles/zola.jpg',hover:'/candles/aba.jpg',scent:'Lavender + Vanilla + Sandalwood',notes:['Top: Lavender','Heart: Vanilla, Coconut','Base: Sandalwood, Shea'],story:'Calm evenings in Kendwa. Soft, warm, grounding with lavender and sandalwood.',burn:'60H',wax:'Shea Butter',vessel:'Reusable Terracotta'},
  {id:'kito',name:'KITO',sub:'Fig',ritual:'EARTH • 60H',price:48,img:'/candles/kito.jpg',hover:'/candles/kito.jpg',scent:'Fig + Vetiver + Sea Salt',notes:['Top: Sea Salt','Heart: Fig, Green Leaves','Base: Vetiver, Earth'],story:'Earthy, coastal, inspired by Nungwi tides. Fig, vetiver, sea salt.',burn:'60H',wax:'Shea Butter',vessel:'Reusable Terracotta'},
  {id:'aba',name:'ABA',sub:'Baobab',ritual:'SOFT • 60H',price:48,img:'/candles/aba.jpg',hover:'/candles/aba.jpg',scent:'Baobab • Vanilla • Sandalwood',notes:['Top: Baobab','Heart: Vanilla, Coconut','Base: Sandalwood, Shea'],story:'Soft as memory. Baobab, vanilla, sand for everyday ritual.',burn:'60H',wax:'Shea Butter',vessel:'Reusable Terracotta'},
]

const heroes=[
  { img:'/candles/oba.jpg', name:'OBA', slogan:'ROOTED IN ANCESTRY.', sub:'Oud • Amber • Shea Butter • 60H Burn • Hand-Thrown Terracotta', cta:'SHOP OBA — $68' },
  { img:'/candles/aba.jpg', name:'ABA', slogan:'SOFT AS MEMORY.', sub:'Baobab • Vanilla • Sandalwood • Vegan Shea Wax', cta:'SHOP ABA — $58' },
  { img:'/candles/zola.jpg', name:'ZOLA', slogan:'QUIET LUXURY.', sub:'Orange Blossom • Coconut • Earth • 60H', cta:'SHOP ZOLA — $58' },
  { img:'/candles/sana.jpg', name:'SANA', slogan:'BREATHE. RITUAL.', sub:'Eucalyptus • Mint • Sage • Focus Blend', cta:'SHOP SANA — $56' },
  { img:'/candles/kito.jpg', name:'KITO', slogan:'FROM THE EARTH.', sub:'Fig Leaf • Papyrus • Vetiver • Earth Ritual', cta:'SHOP KITO — $60' },
]

function CandleImg({src,alt,className,fallback}:{src:string,alt:string,className:string,fallback?:string}){
  const [err,setErr]=useState(false)
  const [err2,setErr2]=useState(false)
  if(err){
    if(!err2 && fallback) return <img src={fallback} alt={alt} className={className} onError={()=>setErr2(true)} />
    return <img src="/logo.png" alt={alt} className={className} onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
  }
  return <img src={src} alt={alt} className={className} onError={()=>setErr(true)} />
}

export default function Home(){
  const [idx,setIdx]=useState(0)
  const [sel,setSel]=useState<any>(null)
  const [hovered,setHovered]=useState<string|null>(null)
  useEffect(()=>{
    const t=setInterval(()=>setIdx(i=>(i+1)%heroes.length),4000)
    return()=>clearInterval(t)
  },[])
  const h=heroes[idx]

  return(
    <main className="bg-[#FFFCF7] text-[#2B1A0E]">
      {/* DYNAMIC HERO - NO LOGO IN HERO ANYMORE */}
      <section className="relative w-full h-[88vh] overflow-hidden bg-[#D6C0A8]">
        {heroes.map((hero,i)=>(
          <div key={i} className={`absolute inset-0 transition-opacity duration-[1200ms] ${i===idx?'opacity-100':'opacity-0'}`}>
            <CandleImg src={hero.img} alt={hero.name} className={`w-full h-full object-cover transition-transform duration-[6000ms] ${i===idx?'scale-100':'scale-110'}`} fallback="/candles/oba.jpg" />
            <div className="absolute inset-0 bg-[#D6C0A8]/55" />
          </div>
        ))}
        <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col justify-center">
          <p className="text-[9px] tracking-[0.4em] mb-6 opacity-70">HAND-POURED • VEGAN • REUSABLE TERRACOTTA • WORLDWIDE</p>
          <h1 className="font-serif text-[42px] md:text-[72px] leading-[0.85] max-w-3xl">{h.slogan.split(' ').slice(0,2).join(' ')}<br/><span className="italic font-light">{h.slogan.split(' ').slice(2).join(' ')}</span></h1>
          <p className="mt-6 text-[11px] tracking-widest opacity-70">{h.sub}</p>
          <div className="mt-10 flex gap-3">
            <Link href={`/product/${h.name.toLowerCase()}`} className="bg-[#2B1A0E] text-white px-8 py-4 text-[10px] tracking-[0.2em] hover:bg-black transition">{h.cta}</Link>
            <Link href="/shop" className="border border-[#2B1A0E] text-[#2B1A0E] px-8 py-4 text-[10px] tracking-[0.2em] hover:bg-[#2B1A0E] hover:text-white transition">SHOP ALL 5</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroes.map((_,i)=><button key={i} onClick={()=>setIdx(i)} className={`h-[2px] transition-all duration-300 ${i===idx?'w-10 bg-[#2B1A0E]':'w-6 bg-[#2B1A0E]/30'}`} />)}
        </div>
      </section>

      {/* BEST SELLERS - WITH INTRO NOW */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10 md:mb-14">
          <div>
            <p className="text-[10px] tracking-[0.4em] opacity-40">MOST LOVED • HAND-POURED IN KENDWA</p>
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[0.9] mt-4">Best Sellers</h2>
            <p className="text-[11px] leading-[1.7] opacity-60 mt-4 max-w-[420px]">Our signature rituals — 60H burn, vegan shea butter wax, hand-thrown terracotta that lives on as a planter. These four are why customers return.</p>
          </div>
          <Link href="/shop" className="text-[10px] tracking-[0.25em] border-b border-[#2B1A0E] pb-1.5 hover:opacity-60 transition">SHOP COLLECTION →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0,4).map(p=>(
            <div key={p.id} onMouseEnter={()=>setHovered(p.id)} onMouseLeave={()=>setHovered(null)} onClick={()=>setSel(p)} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#F5F1EB] relative overflow-hidden">
                <CandleImg src={hovered===p.id && p.hover? p.hover : p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fallback="/candles/oba.jpg" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/30 to-transparent">
                  <p className="text-[7px] tracking-[0.2em] text-white/80">{p.ritual}</p>
                  <p className="font-serif text-[9px] text-white mt-1">{p.name}</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#2B1A0E]/10 flex items-center justify-center transition duration-300"><span className="bg-[#FFFCF7] px-4 py-2 text-[8px] tracking-[0.2em] border border-[#2B1A0E]">QUICK VIEW • ${p.price}</span></div>
              </div>
              <div className="mt-3 flex justify-between text-[8px] tracking-[0.2em] opacity-60"><span>{p.name} • {p.sub}</span><span>${p.price}</span></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
          <div onMouseEnter={()=>setHovered('aba-wall')} onMouseLeave={()=>setHovered(null)} onClick={()=>setSel(products[4])} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-[#F5F1EB] relative overflow-hidden">
              <CandleImg src="/candles/aba.jpg" alt="ABA wall" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" fallback="/candles/oba.jpg" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/30 to-transparent"><p className="text-[7px] text-white/80">SOFT • 60H</p><p className="font-serif text-[9px] text-white mt-1">ABA</p></div>
            </div>
            <div className="mt-3 flex justify-between text-[8px] tracking-[0.2em] opacity-60"><span>ABA • Baobab</span><span>$48</span></div>
          </div>
          <div className="hidden md:flex aspect-[4/5] bg-[#FFFBF2] border border-dashed border-[#E8DCCF] items-center justify-center p-6"><div className="text-center"><p className="font-serif text-xl">15</p><p className="text-[8px] tracking-[0.3em] mt-2 opacity-50">CANDLES IN COLLECTION</p><Link href="/shop" className="mt-4 inline-block border border-[#2B1A0E] px-4 py-2 text-[8px] tracking-widest">VIEW ALL</Link></div></div>
        </div>
      </section>

      <section className="bg-[#2B1A0E] text-[#FFFCF7]"><div className="max-w-[1280px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row md:justify-between gap-2"><h3 className="font-serif text-[11px] leading-[1.3]">HAND-POURED<br/>IN KENDWA</h3><p className="text-[8px] opacity-60 max-w-[420px] leading-relaxed">Every terracotta vessel is handmade and reusable. Vegan shea wax, 60H burn. <Link href="/story" className="underline underline-offset-2">OUR STORY →</Link></p></div></section>

      {/* OUR STORY - LOGO REPLACED WITH CANDLE */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 bg-[#F5F1EB] border border-[#F0E6D8] aspect-[4/3] relative overflow-hidden group">
          <CandleImg src="/candles/sana.jpg" alt="Hand-poured in Kendwa" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" fallback="/candles/oba.jpg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>
        <div className="md:col-span-6 md:pl-12">
          <p className="text-[8px] tracking-[0.4em] opacity-30 mb-4">OUR STORY</p>
          <h2 className="font-serif text-[28px] md:text-[34px] leading-[1.1]">RITUAL OVER<br/>ROUTINE</h2>
          <p className="text-[11px] leading-[1.8] opacity-60 mt-5 max-w-[360px]">LUNA CANDLES was born in Kendwa, Zanzibar — where shea butter, earth, and ancestral ritual meet. Each vessel is thrown by hand, embossed with patterns that tell a story.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-[9px] tracking-widest border-t border-[#F0E6D8] pt-6 max-w-[360px]"><div><p className="font-serif text-lg">60H</p><p className="opacity-40 mt-1">BURN</p></div><div><p className="font-serif text-lg">100%</p><p className="opacity-40 mt-1">VEGAN</p></div><div><p className="font-serif text-lg">0%</p><p className="opacity-40 mt-1">PLASTIC</p></div></div>
          <Link href="/story" className="inline-block mt-8 border border-[#2B1A0E] px-6 py-2.5 text-[9px] tracking-[0.3em] hover:bg-[#2B1A0E] hover:text-white transition">READ OUR STORY</Link>
        </div>
      </section>

      <section className="bg-[#2B1A0E] text-[#FFFCF7] border-t border-white/10">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2">
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <p className="text-[8px] tracking-[0.4em] opacity-40">ZERO WASTE LUXURY</p>
            <h2 className="font-serif text-[36px] leading-[0.9] mt-6">The Vessel<br/><span className="italic font-light">Lives On.</span></h2>
            <p className="mt-6 text-[11px] leading-relaxed opacity-60 max-w-[360px]">Burn for 60 hours. Then wash with warm water. Your terracotta becomes a planter, brush holder, incense bowl. No waste. Designed in Kendwa, made to stay.</p>
            <div className="mt-8 flex gap-6 text-[8px] tracking-widest opacity-40"><span>1. BURN 60H</span><span>2. WASH</span><span>3. REUSE</span></div>
            <Link href="/story" className="mt-10 bg-[#FFFCF7] text-[#2B1A0E] w-fit px-7 py-3 text-[9px] tracking-[0.2em] hover:bg-white transition">HOW REFILL WORKS</Link>
          </div>
          <div className="bg-[#FFFBF2] aspect-[4/3] md:aspect-auto relative overflow-hidden"><CandleImg src="/candles/oba.jpg" alt="reuse" className="w-full h-full object-cover" fallback="/candles/kito.jpg" /><div className="absolute bottom-6 left-6 bg-[#FFFCF7] text-[#2B1A0E] px-3 py-1.5 text-[8px] tracking-widest">OBA JARS AS PLANTERS IN KENDWA STUDIO</div></div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] py-4 overflow-hidden border-y border-[#2B1A0E]/10"><div className="flex gap-12 animate-[marquee_35s_linear_infinite] whitespace-nowrap"><span className="text-[10px] tracking-[0.25em]">★★★★★ “BEST CANDLE I HAVE OWNED” — AMARA, LONDON</span><span className="text-[10px] tracking-[0.25em]">★★★★★ “SMELLS LIKE ZANZIBAR” — SARAH, NYC</span><span className="text-[10px] tracking-[0.25em]">★★★★★ “REUSABLE JAR IS GENIUS” — LISA, BERLIN</span><span className="text-[10px] tracking-[0.25em]">★★★★★ “60H BURN IS REAL” — ZAINAB, TORONTO</span></div></section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        <h2 className="font-serif text-3xl">Shop by Ritual</h2>
        <p className="text-[11px] opacity-60 mt-2 max-w-[480px]">Not by scent family. By how you want to feel.</p>
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[
            {mood:'FOCUS',desc:'For deep work, clarity',img:'/candles/sana.jpg',scents:'SANA • NIA • ADI'},
            {mood:'CALM',desc:'For soft evenings',img:'/candles/zola.jpg',scents:'ZOLA • ABA • LUNA'},
            {mood:'BOLD',desc:'For confidence, night',img:'/candles/oba.jpg',scents:'OBA • ENZI • KAIRO'},
            {mood:'EARTH',desc:'For grounding, root',img:'/candles/kito.jpg',scents:'KITO • KWABO • MALI'},
          ].map(m=>(
            <Link key={m.mood} href="/shop" className="group relative aspect-[4/5] bg-[#FFFBF2] border border-[#F0E6D8] overflow-hidden">
              <CandleImg src={m.img} alt={m.mood} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" fallback="/candles/oba.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/><div className="absolute bottom-0 p-5 text-[#FFFCF7]"><p className="font-serif text-xl">{m.mood}</p><p className="text-[9px] opacity-80 mt-1">{m.desc}</p><p className="text-[8px] mt-2 opacity-50">{m.scents}</p><p className="mt-3 text-[8px] border-b border-white inline-block pb-1">SHOP NOW →</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#FFFCF7] border-t border-[#F0E6D8] py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 text-center">
          <div><p className="font-serif text-2xl">Shea Butter Wax</p><p className="text-[11px] opacity-60 mt-3 leading-relaxed">Sourced from Ghanaian women's co-op. Burns 30% slower, cleaner, vegan. No paraffin, no phthalates.</p></div>
          <div><p className="font-serif text-2xl">Hand-Thrown Terracotta</p><p className="text-[11px] opacity-60 mt-3 leading-relaxed">Each jar thrown by hand in Kendwa. Embossed with tribal patterns that tell a story. Reusable forever.</p></div>
          <div><p className="font-serif text-2xl">Refill, Not Landfill</p><p className="text-[11px] opacity-60 mt-3 leading-relaxed">Return 3 jars, get 1 refill free. Or buy $24 refill wax. Circular luxury is the future.</p></div>
        </div>
      </section>

      {sel && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-[#2B1A0E]/60 backdrop-blur-sm" onClick={()=>setSel(null)}/>
          <div className="relative ml-auto w-full max-w-[520px] bg-[#FFFCF7] h-full overflow-y-auto shadow-2xl animate-[slide_0.35s_cubic-bezier(0.16,1,0.3,1)]">
            <button onClick={()=>setSel(null)} className="absolute top-6 right-6 w-8 h-8 border border-[#E8DCCF] flex items-center justify-center hover:bg-[#2B1A0E] hover:text-white transition">✕</button>
            <div className="p-8">
              <div className="aspect-[4/5] bg-[#F5F1EB] overflow-hidden mb-8"><CandleImg src={sel.img} alt={sel.name} className="w-full h-full object-cover" fallback="/candles/oba.jpg" /></div>
              <p className="text-[9px] tracking-[0.4em] opacity-40">{sel.ritual} • VEGAN SHEA WAX • {sel.vessel}</p>
              <h2 className="font-serif text-5xl mt-3">{sel.name}</h2>
              <p className="text-[11px] tracking-[0.2em] mt-2 opacity-60">{sel.scent}</p>
              <p className="text-[12px] leading-relaxed opacity-70 mt-6">{sel.story}</p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-[9px] tracking-widest border border-[#F0E6D8] p-4"><div><p className="font-serif text-lg">{sel.burn}</p><p className="opacity-40">BURN</p></div><div><p className="font-serif text-lg">100%</p><p className="opacity-40">VEGAN</p></div><div><p className="font-serif text-lg">0%</p><p className="opacity-40">PLASTIC</p></div></div>
              <div className="mt-8 border-t pt-6"><p className="text-[9px] tracking-[0.4em] opacity-30 mb-4">SCENT NOTES</p>{sel.notes.map((n:string)=><div key={n} className="py-3 border-b border-[#F0E6D8]/60 text-[11px] flex justify-between"><span className="opacity-40">{n.split(':')[0]}:</span><span>{n.split(':')[1]}</span></div>)}</div>
              <div className="mt-8 flex gap-3"><Link href={`/product/${sel.id}`} className="flex-1 bg-[#2B1A0E] text-white text-center py-4 text-[10px] tracking-[0.3em]">VIEW FULL PAGE</Link><button className="flex-1 border border-[#2B1A0E] py-4 text-[10px] tracking-[0.3em] hover:bg-[#2B1A0E] hover:text-white transition">ADD TO CART — ${sel.price}</button></div>
              <p className="mt-4 text-[8px] tracking-widest opacity-30 text-center">KENDWA, ZANZIBAR • STRIPE • M-PESA • WORLDWIDE</p>
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@keyframes slide{from{transform:translateX(100%)}to{transform:translateX(0)}}`}</style>
    </main>
  )
}