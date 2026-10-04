'use client'
import { useState } from 'react'

export default function Stockists(){
  const [sent,setSent]=useState(false)
  const [form,setForm]=useState({store:'',email:'',city:'',message:''})

  return(
    <main className="bg-[#FFFCF7] text-[#2B1A0E]">
      {/* HERO - WHOLESALE */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <p className="text-[9px] tracking-[0.4em] opacity-40">STOCKISTS • WHOLESALE • WORLDWIDE</p>
          <h1 className="font-serif text-[42px] md:text-[64px] leading-[0.85] mt-5">Stockists<br/><span className="italic font-light">/ Wholesale.</span></h1>
          <p className="text-[12px] leading-[1.8] opacity-60 mt-6 max-w-[400px]">We ship worldwide and stock in concept stores that believe in ritual over routine. Minimal, bold, rooted in Kendwa.</p>
          <div className="mt-8 flex gap-6">
            <div className="border border-[#F0E6D8] px-5 py-4 bg-white"><p className="font-serif text-2xl">24</p><p className="text-[8px] tracking-[0.3em] opacity-40 mt-1">MOQ UNITS</p></div>
            <div className="border border-[#F0E6D8] px-5 py-4 bg-white"><p className="font-serif text-2xl">$22</p><p className="text-[8px] tracking-[0.3em] opacity-40 mt-1">WHOLESALE</p></div>
            <div className="border border-[#F0E6D8] px-5 py-4 bg-white"><p className="font-serif text-2xl">60H</p><p className="text-[8px] tracking-[0.3em] opacity-40 mt-1">SHEA WAX</p></div>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="bg-[#2B1A0E] text-[#FFFCF7] p-8 md:p-10">
            <p className="text-[9px] tracking-[0.4em] opacity-40">WHOLESALE INQUIRY</p>
            <h3 className="font-serif text-2xl mt-4">Become a stockist</h3>
            <p className="text-[11px] opacity-60 mt-3 leading-relaxed">Terracotta, reusable, 60H shea wax. Vegan, no paraffin. Tell us about your store.</p>
            {!sent? (
              <div className="mt-8 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input value={form.store} onChange={e=>setForm({...form,store:e.target.value})} placeholder="Store Name*" className="bg-transparent border border-white/20 px-4 py-3 text-[11px] placeholder:opacity-40 outline-none focus:border-white/50" />
                  <input value={form.city} onChange={e=>setForm({...form,city:e.target.value})} placeholder="City*" className="bg-transparent border border-white/20 px-4 py-3 text-[11px] placeholder:opacity-40 outline-none focus:border-white/50" />
                </div>
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email*" className="w-full bg-transparent border border-white/20 px-4 py-3 text-[11px] placeholder:opacity-40 outline-none focus:border-white/50" />
                <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your store, audience, why LUNA..." className="w-full bg-transparent border border-white/20 px-4 py-3 h-24 text-[11px] placeholder:opacity-40 outline-none focus:border-white/50" />
                <button onClick={()=>{if(form.store&&form.email) setSent(true)}} className="w-full bg-[#FFFCF7] text-[#2B1A0E] py-3.5 text-[10px] tracking-[0.3em] hover:bg-white transition mt-2">SEND INQUIRY →</button>
                <p className="text-[8px] opacity-30 text-center mt-3">Response within 24H • Worldwide via DHL</p>
              </div>
            ) : (
              <div className="mt-10 py-12 text-center border border-white/10">
                <p className="font-serif text-2xl">Asante.</p>
                <p className="text-[11px] opacity-60 mt-3">Received for {form.store}. We'll reply in 24H to {form.email}.</p>
                <button onClick={()=>setSent(false)} className="mt-6 text-[9px] tracking-[0.3em] underline underline-offset-4">SEND ANOTHER</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NEW: FROM KENDWA, ZANZIBAR - REPLACES "WHERE TO FIND US" */}
      <section className="border-y border-[#F0E6D8] bg-[#FFFBF2]">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-12">
          <div className="md:col-span-5 p-8 md:p-12 lg:p-16 bg-[#F5F1EB]">
            <p className="text-[9px] tracking-[0.4em] opacity-40">ORIGIN • KENDWA, ZANZIBAR</p>
            <h2 className="font-serif text-[34px] md:text-[42px] leading-[0.9] mt-6">Made where<br/>the ocean<br/><span className="italic font-light">meets clay.</span></h2>
            <p className="text-[12px] leading-[1.9] opacity-60 mt-8 max-w-[320px]">Zanzibar is not a marketing story. It's our kiln, our clay pit, our shea kitchen. Every LUNA jar is thrown 10 minutes from the Indian Ocean.</p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4"><span className="text-[9px] opacity-30">01</span><div><p className="text-[11px] tracking-[0.2em] font-medium">Kendwa Clay</p><p className="text-[11px] opacity-60 mt-1 leading-relaxed">Local terracotta, hand-dug, sun-dried 3 days. Fired in solar kiln at 980°C.</p></div></div>
              <div className="flex gap-4"><span className="text-[9px] opacity-30">02</span><div><p className="text-[11px] tracking-[0.2em] font-medium">Ghana Shea Co-op</p><p className="text-[11px] opacity-60 mt-1 leading-relaxed">Shea butter from women's co-op in Tamale. Vegan, slower burn than soy.</p></div></div>
              <div className="flex gap-4"><span className="text-[9px] opacity-30">03</span><div><p className="text-[11px] tracking-[0.2em] font-medium">Hand-Embossed</p><p className="text-[11px] opacity-60 mt-1 leading-relaxed">Tribal patterns by mama fundis — each jar tells ancestry.</p></div></div>
            </div>

            <div className="mt-10 border-t border-[#E8DCCF] pt-6 grid grid-cols-2 gap-4 text-[10px]">
              <div><p className="opacity-30 tracking-widest">LOCATION</p><p className="mt-2 leading-relaxed font-medium">Kendwa Rocks<br/>Nungwi Road, Zanzibar<br/>Open by appointment</p></div>
              <div><p className="opacity-30 tracking-widest">CONTACT</p><p className="mt-2 leading-relaxed">hello@lunacandles.com<br/>+255 777 123 456<br/>Wholesale: MOQ 24</p></div>
            </div>
          </div>

          <div className="md:col-span-7 relative min-h-[640px] bg-[#D6C0A8] overflow-hidden">
            <img src="/candles/oba.jpg" alt="Kendwa Zanzibar" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
              <div className="bg-[#FFFCF7] px-4 py-3 text-[8px] tracking-[0.3em]">KENDWA STUDIO • 6°07'S 39°11'E • HAND-THROWN</div>
              <div className="hidden md:block text-right text-white"><p className="font-serif text-2xl">Asante Sana</p><p className="text-[8px] tracking-[0.3em] opacity-70 mt-1">THANK YOU IN SWAHILI</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#2B1A0E] text-[#FFFCF7]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-6 flex flex-wrap gap-8 text-[9px] tracking-[0.3em] opacity-60">
          <span>✓ HAND-POURED IN KENDWA</span>
          <span>✓ WOMEN'S CO-OP SHEA</span>
          <span>✓ REUSABLE TERRACOTTA</span>
          <span>✓ WORLDWIDE DHL EXPRESS</span>
          <span>✓ STRIPE • M-PESA • PAYPAL</span>
        </div>
      </section>
    </main>
  )
}