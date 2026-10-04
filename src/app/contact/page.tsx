'use client'
import { useState } from 'react'

export default function Contact(){
  const [sent,setSent]=useState(false)
  const [form,setForm]=useState({name:'',email:'',topic:'GENERAL',message:''})

  return(
    <main className="bg-[#FFFCF7] text-[#2B1A0E]">
      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-8 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <p className="text-[9px] tracking-[0.4em] opacity-40">CONTACT • KENDWA STUDIO • 24H RESPONSE</p>
          <h1 className="font-serif text-[52px] md:text-[72px] leading-[0.85] mt-5">Talk<br/><span className="italic font-light">to us.</span></h1>
          <p className="text-[12px] leading-[1.8] opacity-60 mt-6 max-w-[360px]">Wholesale, press, refill, or just say asante. We reply within 24H from Zanzibar (EAT).</p>

          <div className="mt-10 space-y-5">
            <div className="flex gap-4">
              <span className="text-[8px] tracking-widest opacity-30 mt-1">EMAIL</span>
              <div><p className="text-[12px] tracking-widest">hello@lunacandles.com</p><p className="text-[11px] opacity-50 mt-1">General, orders, refill $24</p></div>
            </div>
            <div className="flex gap-4">
              <span className="text-[8px] tracking-widest opacity-30 mt-1">WHOLESALE</span>
              <div><p className="text-[12px] tracking-widest">wholesale@lunacandles.com</p><p className="text-[11px] opacity-50 mt-1">MOQ 24 • $22/unit • worldwide</p></div>
            </div>
            <div className="flex gap-4">
              <span className="text-[8px] tracking-widest opacity-30 mt-1">WHATSAPP</span>
              <div><p className="text-[12px] tracking-widest">+255 777 123 456</p><p className="text-[11px] opacity-50 mt-1">Fastest • 9AM-6PM EAT • M-Pesa</p></div>
            </div>
            <div className="flex gap-4">
              <span className="text-[8px] tracking-widest opacity-30 mt-1">STUDIO</span>
              <div><p className="text-[12px] tracking-widest leading-relaxed">Kendwa Rocks, Nungwi Road<br/>Zanzibar, Tanzania</p><p className="text-[11px] opacity-50 mt-1">By appointment • 6°07'S 39°11'E</p></div>
            </div>
          </div>

          <div className="mt-10 flex gap-2">
            <span className="text-[8px] tracking-[0.3em] border border-[#F0E6D8] bg-white px-3 py-2">INSTAGRAM • @LUNACANDLES</span>
            <span className="text-[8px] tracking-[0.3em] border border-[#F0E6D8] bg-white px-3 py-2">TIKTOK • KENDWA RITUALS</span>
          </div>
        </div>

        {/* 5-STAR FORM */}
        <div className="md:col-span-6">
          <div className="bg-white border border-[#F0E6D8] p-8 md:p-10 shadow-[0_20px_80px_rgba(43,26,14,0.06)]">
            {!sent? (
              <>
                <div className="flex justify-between items-center">
                  <p className="text-[9px] tracking-[0.4em] opacity-40">SEND MESSAGE</p>
                  <p className="text-[8px] tracking-widest opacity-30">24H • EAT TIMEZONE</p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[8px] tracking-[0.3em] opacity-40">NAME*</label>
                      <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="w-full mt-2 border border-[#E8DCCF] bg-[#FFFBF2] px-4 py-3 text-[12px] outline-none focus:border-[#2B1A0E] transition" />
                    </div>
                    <div>
                      <label className="text-[8px] tracking-[0.3em] opacity-40">EMAIL*</label>
                      <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@email.com" className="w-full mt-2 border border-[#E8DCCF] bg-[#FFFBF2] px-4 py-3 text-[12px] outline-none focus:border-[#2B1A0E] transition" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[8px] tracking-[0.3em] opacity-40">TOPIC</label>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {['GENERAL','WHOLESALE','ORDER','REFILL $24','PRESS'].map(t=>(
                        <button key={t} onClick={()=>setForm({...form,topic:t})} className={`px-4 py-2 text-[9px] tracking-[0.2em] border transition ${form.topic===t?'bg-[#2B1A0E] text-white border-[#2B1A0E]':'bg-transparent border-[#E8DCCF] hover:border-[#2B1A0E]'}`}>{t}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[8px] tracking-[0.3em] opacity-40">MESSAGE*</label>
                    <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="How can we help? Order number, store details, ritual question..." className="w-full mt-2 border border-[#E8DCCF] bg-[#FFFBF2] px-4 py-3 h-28 text-[12px] outline-none focus:border-[#2B1A0E] transition resize-none" />
                  </div>

                  <button onClick={()=>{if(form.name&&form.email&&form.message) setSent(true)}} className="w-full bg-[#2B1A0E] text-white py-4 text-[11px] tracking-[0.3em] hover:bg-black transition">SEND MESSAGE →</button>

                  <p className="text-[8px] leading-relaxed opacity-40 text-center">By sending, you agree to ritual emails (1/month). No spam. Asante.</p>
                </div>
              </>
            ) : (
              <div className="py-16 text-center">
                <div className="w-12 h-12 mx-auto border border-[#2B1A0E] rounded-full flex items-center justify-center">✓</div>
                <p className="font-serif text-[28px] mt-6">Asante, {form.name}.</p>
                <p className="text-[12px] opacity-60 mt-3 leading-relaxed max-w-[300px] mx-auto">We received your {form.topic.toLowerCase()} message. Reply within 24H to {form.email} from hello@lunacandles.com — check spam if EAT night.</p>
                <button onClick={()=>setSent(false)} className="mt-8 border border-[#2B1A0E] px-6 py-2.5 text-[9px] tracking-[0.3em] hover:bg-[#2B1A0E] hover:text-white transition">SEND ANOTHER</button>
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="bg-[#2B1A0E] text-white p-4 text-center"><p className="text-[9px] tracking-widest">RESPONSE</p><p className="font-serif text-lg mt-1">24H</p></div>
            <div className="bg-[#F5F1EB] border border-[#F0E6D8] p-4 text-center"><p className="text-[9px] tracking-widest opacity-40">EAT TIME</p><p className="font-serif text-lg mt-1">GMT+3</p></div>
            <div className="bg-[#F5F1EB] border border-[#F0E6D8] p-4 text-center"><p className="text-[9px] tracking-widest opacity-40">KARIBU</p><p className="font-serif text-lg mt-1">Welcome</p></div>
          </div>
        </div>
      </section>

      {/* MAP / STUDIO IMAGE STRIP */}
      <section className="border-t border-[#F0E6D8] grid md:grid-cols-3">
        <div className="aspect-[4/3] md:aspect-[4/3.5] bg-[#F5F1EB] relative overflow-hidden"><img src="/candles/oba.jpg" alt="Studio" className="w-full h-full object-cover" /><div className="absolute bottom-0 left-0 bg-[#FFFCF7] px-3 py-1.5 text-[7px] tracking-widest">STUDIO • KENDWA</div></div>
        <div className="aspect-[4/3] md:aspect-[4/3.5] bg-[#E8DCCF] relative overflow-hidden"><img src="/candles/sana.jpg" alt="Clay" className="w-full h-full object-cover" /><div className="absolute bottom-0 left-0 bg-[#FFFCF7] px-3 py-1.5 text-[7px] tracking-widest">CLAY PIT • 2KM</div></div>
        <div className="aspect-[4/3] md:aspect-[4/3.5] bg-[#D6C0A8] relative overflow-hidden"><img src="/candles/zola.jpg" alt="Ocean" className="w-full h-full object-cover" /><div className="absolute bottom-0 left-0 bg-[#FFFCF7] px-3 py-1.5 text-[7px] tracking-widest">OCEAN • 10 MINS</div></div>
      </section>
    </main>
  )
}