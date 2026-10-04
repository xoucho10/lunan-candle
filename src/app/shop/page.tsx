'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const allProducts=[
  {id:'oba',name:'OBA',sub:'Smoked Cedar',ritual:'BOLD',price:48,img:'/candles/oba.jpg',hover:'/candles/oba.jpg',burn:'60H',wax:'Shea',vessel:'Terracotta',scent:'Smoked Cedar + Black Pepper + Amber',notes:['Top: Black Pepper','Heart: Smoked Cedar','Base: Amber'],story:'Rooted in Kendwa night rituals. Bold, grounded.',best:true},
  {id:'sana',name:'SANA',sub:'Eucalyptus',ritual:'FOCUS',price:48,img:'/candles/sana.jpg',hover:'/candles/ayana.jpg',burn:'60H',wax:'Shea',vessel:'Terracotta',scent:'Eucalyptus + Rosemary + Lime',notes:['Top: Lime, Mint','Heart: Eucalyptus','Base: Shea, Moss'],story:'For clarity and morning focus.',best:true},
  {id:'zola',name:'ZOLA',sub:'Lavender',ritual:'CALM',price:48,img:'/candles/zola.jpg',hover:'/candles/aba.jpg',burn:'60H',wax:'Shea',vessel:'Terracotta',scent:'Lavender + Vanilla + Sandalwood',notes:['Top: Lavender','Heart: Vanilla','Base: Sandalwood'],story:'Calm evenings in Kendwa.',best:true},
  {id:'kito',name:'KITO',sub:'Fig',ritual:'EARTH',price:48,img:'/candles/kito.jpg',hover:'/candles/kito.jpg',burn:'60H',wax:'Shea',vessel:'Terracotta',scent:'Fig + Vetiver + Sea Salt',notes:['Top: Sea Salt','Heart: Fig','Base: Vetiver'],story:'Earthy, coastal Nungwi tides.',best:true},
  {id:'aba',name:'ABA',sub:'Baobab',ritual:'CALM',price:58,img:'/candles/aba.jpg',hover:'/candles/zola.jpg',burn:'60H',wax:'Shea',vessel:'Terracotta',scent:'Baobab • Vanilla • Sandalwood',notes:['Top: Baobab','Heart: Vanilla','Base: Sandalwood'],story:'Soft as memory.',best:false},
  {id:'ayana',name:'AYANA',sub:'Sandalwood',ritual:'CALM',price:58,img:'/candles/ayana.jpg',hover:'/candles/sana.jpg',burn:'60H',wax:'Shea',vessel:'Terracotta',scent:'Orange Blossom • Coconut',notes:['Top: Orange Blossom','Heart: Coconut','Base: Earth'],story:'Quiet luxury, soft evening ritual.',best:false},
  {id:'enzi',name:'ENZI',sub:'Oud',ritual:'BOLD',price:68,img:'/candles/oba.jpg',hover:'/candles/oba.jpg',burn:'60H',wax:'Shea',vessel:'Terracotta',scent:'Oud • Amber • Shea Butter',notes:['Top: Oud','Heart: Amber','Base: Shea'],story:'Confidence at night.',best:false},
  {id:'mali',name:'MALI',sub:'Sandalwood',ritual:'EARTH',price:60,img:'/candles/kito.jpg',hover:'/candles/kito.jpg',burn:'60H',wax:'Shea',vessel:'Terracotta',scent:'Sandalwood • Earth • Musk',notes:['Top: Sandalwood','Heart: Earth','Base: Musk'],story:'Grounding, root, earth ritual.',best:false},
]

const rituals=[
  {id:'ALL',label:'ALL',desc:`${allProducts.length} CANDLES`},
  {id:'FOCUS',label:'FOCUS',desc:'Clarity, Work'},
  {id:'CALM',label:'CALM',desc:'Soft Evenings'},
  {id:'BOLD',label:'BOLD',desc:'Confidence, Night'},
  {id:'EARTH',label:'EARTH',desc:'Grounding, Root'},
]

function CandleImg({src,hover,alt,className}:{src:string,hover?:string,alt:string,className:string}){
  const [err,setErr]=useState(false)
  const [isHover,setIsHover]=useState(false)
  const [showHover,setShowHover]=useState(false)
  if(err) return <div className={`${className} bg-[#F5F1EB] flex items-center justify-center`}><span className="font-serif text-[10px] opacity-30">{alt}</span></div>
  return (
    <div className="relative w-full h-full overflow-hidden" onMouseEnter={()=>{setIsHover(true); setTimeout(()=>setShowHover(true),80)}} onMouseLeave={()=>{setIsHover(false); setShowHover(false)}}>
      <img src={src} alt={alt} className={`${className} transition-transform duration-[900ms] ${isHover?'scale-[1.08]':'scale-100'}`} onError={()=>setErr(true)} />
      {hover && <img src={hover} alt={alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showHover?'opacity-100':'opacity-0'}`} onError={()=>{}} />}
    </div>
  )
}

export default function Shop(){
  const [filter,setFilter]=useState('ALL')
  const [sel,setSel]=useState<any>(null)
  const [cartAnim,setCartAnim]=useState<string|null>(null)
  const [sort,setSort]=useState('featured')
  const filtered = (filter==='ALL'? allProducts : allProducts.filter(p=>p.ritual===filter)).sort((a,b)=>{
    if(sort==='price-low') return a.price-b.price
    if(sort==='price-high') return b.price-a.price
    return 0
  })

  useEffect(()=>{
    if(sel) document.body.style.overflow='hidden'
    else document.body.style.overflow='auto'
  },[sel])

  return(
    <main className="bg-[#FFFCF7] text-[#2B1A0E] selection:bg-[#2B1A0E] selection:text-[#FFFCF7]">
      {/* PREMIUM HEADER WITH PARALLAX COUNT */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-14 md:pt-20 pb-8">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="text-[9px] tracking-[0.4em] opacity-40">COLLECTION 2024 • KENDWA, ZANZIBAR • VEGAN SHEA WAX</p>
            <h1 className="font-serif text-[44px] md:text-[68px] leading-[0.85] mt-5">Shop by<br/><span className="italic font-light">Ritual.</span></h1>
            <p className="text-[12px] leading-[1.8] opacity-60 mt-6 max-w-[420px]">Not by scent family. By how you want to feel. Every terracotta vessel is hand-thrown, embossed, reusable as planter. 60H burn. Refill $24, not landfill.</p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="font-serif text-[88px] leading-[0.8] opacity-[0.06]">{filtered.length}</p>
            <p className="text-[10px] tracking-[0.3em] mt-2 opacity-40">{filter} • {filtered.length} RITUALS</p>
          </div>
        </div>
      </section>

      {/* STICKY LUXURY FILTER BAR */}
      <section className="sticky top-[88px] md:top-[112px] z-30 bg-[#FFFCF7]/80 backdrop-blur-xl border-y border-[#F0E6D8]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row md:justify-between gap-4">
          <div className="flex gap-1 overflow-x-auto scrollbar-none">
            {rituals.map(r=>(
              <button key={r.id} onClick={()=>setFilter(r.id)} className="group relative px-5 py-2.5 shrink-0">
                <span className={`text-[11px] tracking-[0.25em] transition ${filter===r.id?'opacity-100':'opacity-40 group-hover:opacity-100'}`}>{r.label}</span>
                <span className="block text-[7px] tracking-[0.2em] opacity-40 mt-1">{r.desc}</span>
                <span className={`absolute bottom-0 left-5 right-5 h-[1px] bg-[#2B1A0E] transition-all duration-500 ${filter===r.id?'opacity-100 w-auto':'opacity-0 w-0 group-hover:opacity-30 group-hover:w-auto'}`} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <select value={sort} onChange={(e)=>setSort(e.target.value)} className="bg-transparent border border-[#E8DCCF] px-4 py-2 text-[10px] tracking-[0.2em] outline-none">
              <option value="featured">FEATURED</option>
              <option value="price-low">PRICE: LOW → HIGH</option>
              <option value="price-high">PRICE: HIGH → LOW</option>
            </select>
            <p className="hidden md:block text-[9px] tracking-[0.3em] opacity-30">HOVER TO REVEAL • CLICK TO EXPAND</p>
          </div>
        </div>
      </section>

      {/* GRID - PREMIUM CARDS */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-14">
          {filtered.map((p,i)=>(
            <div key={p.id} className="group cursor-pointer" style={{animationDelay:`${i*60}ms`}} onClick={()=>setSel(p)}>
              <div className="aspect-[4/5.2] bg-[#F5F1EB] relative overflow-hidden border border-[#F0E6D8]">
                <CandleImg src={p.img} hover={p.hover} alt={p.name} className="w-full h-full object-cover" />
                {/* TOP META */}
                <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-start">
                  {p.best? <span className="bg-[#FFFCF7] px-2.5 py-1 text-[7px] tracking-[0.25em] border border-[#2B1A0E]/10">BEST SELLER</span> : <span className="bg-[#2B1A0E]/80 text-white px-2.5 py-1 text-[7px] tracking-[0.25em]">{p.ritual}</span>}
                  <span className="bg-[#FFFCF7]/90 backdrop-blur px-2 py-1 text-[7px] tracking-widest opacity-0 group-hover:opacity-100 transition duration-300">${p.price}</span>
                </div>
                {/* BOTTOM GRADIENT INFO - REVEALS ON HOVER */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/15 to-transparent translate-y-1 group-hover:translate-y-0 transition duration-500">
                  <p className="text-[7px] tracking-[0.25em] text-white/70">{p.ritual} • {p.burn} • {p.wax}</p>
                  <div className="flex justify-between items-end mt-2">
                    <p className="font-serif text-white text-[13px] tracking-wide">{p.name}</p>
                    <span className="text-white text-[8px] tracking-[0.2em] border-b border-white/50 pb-0.5 opacity-0 group-hover:opacity-100 transition delay-100">QUICK VIEW →</span>
                  </div>
                </div>
                {/* CENTER QUICK ADD - MAGNETIC */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="bg-[#FFFCF7] px-6 py-3 text-[9px] tracking-[0.3em] border border-[#2B1A0E] shadow-[0_8px_24px_rgba(0,0,0,0.12)] translate-y-2 group-hover:translate-y-0 transition duration-500">QUICK VIEW</div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-start gap-3">
                <div className="flex-1">
                  <p className="text-[11px] tracking-[0.15em] font-medium leading-tight">{p.name} — <span className="opacity-60 font-normal">{p.sub}</span></p>
                  <p className="text-[9px] opacity-45 mt-1.5 leading-[1.4] line-clamp-1">{p.scent}</p>
                  <div className="mt-2 flex gap-1.5">{p.notes.slice(0,3).map(n=><span key={n} className="text-[7px] tracking-widest bg-[#F5F1EB] border border-[#F0E6D8] px-2 py-1 opacity-60">{n.split(':')[0]}</span>)}</div>
                </div>
                <p className="text-[11px] tracking-widest font-light">${p.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length===0 && (
          <div className="py-24 text-center">
            <p className="font-serif text-3xl opacity-20">No {filter} ritual found</p>
            <button onClick={()=>setFilter('ALL')} className="mt-6 border border-[#2B1A0E] px-8 py-3 text-[10px] tracking-[0.3em]">VIEW ALL {allProducts.length}</button>
          </div>
        )}
      </section>

      {/* LUXURY REFILL STORY BAR */}
      <section className="bg-[#2B1A0E] text-[#FFFCF7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`}} />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5"><p className="font-serif text-[18px] leading-tight">Refill, Not Landfill.<br/><span className="opacity-60 italic font-light">The vessel lives on.</span></p></div>
          <div className="md:col-span-7 grid grid-cols-3 gap-6 text-[10px] tracking-[0.2em]">
            <div className="flex gap-3"><span className="opacity-30">01</span><div><p>BURN 60H</p><p className="opacity-40 mt-1 text-[8px]">Shea butter wax, 30% slower</p></div></div>
            <div className="flex gap-3"><span className="opacity-30">02</span><div><p>WASH</p><p className="opacity-40 mt-1 text-[8px]">Warm water, no waste</p></div></div>
            <div className="flex gap-3"><span className="opacity-30">03</span><div><p>REUSE / REFILL $24</p><p className="opacity-40 mt-1 text-[8px]">Planter, brush holder, refill</p></div></div>
          </div>
        </div>
      </section>

      {/* PREMIUM DRAWER */}
      {sel && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-[#2B1A0E]/60 backdrop-blur-[8px]" onClick={()=>setSel(null)}/>
          <div className="relative ml-auto w-full max-w-[560px] bg-[#FFFCF7] h-full overflow-y-auto shadow-[-20px_0_80px_rgba(0,0,0,0.15)] animate-[slide_0.6s_cubic-bezier(0.16,1,0.3,1)]">
            <button onClick={()=>setSel(null)} className="sticky top-0 z-10 ml-auto m-6 w-10 h-10 bg-[#FFFCF7] border border-[#E8DCCF] flex items-center justify-center hover:bg-[#2B1A0E] hover:text-white transition text-[12px]">✕</button>
            <div className="px-8 pb-10 -mt-4">
              <div className="aspect-[4/5] bg-[#F5F1EB] overflow-hidden relative">
                <img src={sel.img} alt={sel.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-[#FFFCF7] px-3 py-1.5 text-[8px] tracking-[0.25em]">{sel.ritual} • {sel.burn} • {sel.wax} WAX • {sel.vessel}</div>
              </div>
              <div className="mt-8">
                <p className="text-[9px] tracking-[0.4em] opacity-40">HAND-POURED IN KENDWA • WORLDWIDE SHIPPING</p>
                <h2 className="font-serif text-[44px] leading-[0.9] mt-4">{sel.name}</h2>
                <p className="text-[11px] tracking-[0.2em] opacity-60 mt-3">{sel.scent}</p>
                <p className="text-[12px] leading-[1.8] opacity-70 mt-6 max-w-[420px]">{sel.story} Each vessel is thrown by hand in Kendwa, embossed with tribal patterns. Burns 60H, vegan shea wax, reusable forever.</p>

                <div className="mt-8 grid grid-cols-3 border border-[#F0E6D8] divide-x divide-[#F0E6D8]">
                  <div className="p-4 text-center"><p className="font-serif text-[20px]">{sel.burn}</p><p className="text-[8px] tracking-[0.2em] opacity-40 mt-1">BURN</p></div>
                  <div className="p-4 text-center"><p className="font-serif text-[20px]">100%</p><p className="text-[8px] tracking-[0.2em] opacity-40 mt-1">VEGAN</p></div>
                  <div className="p-4 text-center"><p className="font-serif text-[20px]">0%</p><p className="text-[8px] tracking-[0.2em] opacity-40 mt-1">PLASTIC</p></div>
                </div>

                <div className="mt-8">
                  <p className="text-[9px] tracking-[0.4em] opacity-30">SCENT NOTES</p>
                  <div className="mt-4 space-y-0">{sel.notes.map((n:string,i:number)=><div key={n} className="flex justify-between py-3 border-b border-[#F0E6D8]/60 text-[11px]"><span className="opacity-40 tracking-widest text-[9px]">{String(i+1).padStart(2,'0')} {n.split(':')[0]}</span><span className="font-light">{n.split(':')[1]}</span></div>)}</div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button onClick={()=>{setCartAnim(sel.id); setTimeout(()=>setCartAnim(null),1200)}} className={`flex-1 py-4 text-[10px] tracking-[0.3em] transition-all duration-300 ${cartAnim===sel.id? 'bg-[#4A7C59] text-white' : 'bg-[#2B1A0E] text-white hover:bg-black'}`}>
                    {cartAnim===sel.id? '✓ ADDED' : `ADD TO CART — $${sel.price}`}
                  </button>
                  <Link href={`/product/${sel.id}`} className="flex-1 border border-[#2B1A0E] text-center py-4 text-[10px] tracking-[0.3em] hover:bg-[#2B1A0E] hover:text-white transition">FULL PAGE</Link>
                </div>
                <p className="mt-4 text-[8px] tracking-[0.2em] opacity-30 text-center">KENDWA • STRIPE • M-PESA • APPLE PAY • WORLDWIDE • REFILL $24</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide{from{transform:translateX(100%)}to{transform:translateX(0)}}
       .scrollbar-none::-webkit-scrollbar{display:none}
       .scrollbar-none{-ms-overflow-style:none;scrollbar-width:none}
       .line-clamp-1{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
      `}</style>
    </main>
  )
}