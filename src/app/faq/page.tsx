'use client'
import { useState } from 'react'

const faqs=[
  {cat:'ZANZIBAR ORIGIN',q:'Where in Zanzibar is LUNA made?',a:'Kendwa, North Coast — 10 mins from Kendwa Rocks. 6°07′S 39°11′E. We throw terracotta with local fundis (artisans), sun-dry 3 days, fire in solar kiln at 980°C. You can visit by appointment. WhatsApp +255 777 XXX.'},
  {cat:'ZANZIBAR ORIGIN',q:'Why terracotta, not glass?',a:'Glass is imported, cold, landfill. Kendwa clay is here — dug 2km from studio, hand-thrown, heavy 1.2kg, embossed with tribal patterns. After 60H burn, wash with warm water and reuse as planter for succulents, brush holder, or incense bowl. Zero waste luxury.'},
  {cat:'ZANZIBAR ORIGIN',q:'What does Asante mean?',a:'Asante Sana = Thank You Very Much in Swahili. We say it after every burn. Also why our thank-you note is in Swahili and English.'},
  {cat:'EAST AFRICA MATERIALS',q:'Shea butter wax — from where?',a:'Ghana, Tamale women co-op. Not soy from USA. Shea burns 30% slower, cleaner, soot-free. 100% vegan, no paraffin, no palm, no beeswax. We buy direct — no middleman, co-op gets 40% above market.'},
  {cat:'EAST AFRICA MATERIALS',q:'Essential oils — African?',a:'Yes. Eucalyptus from Usambara Mountains TZ, Baobab oil from Dodoma, Lavender from Njombe highlands, Oud blend + Clove from Pemba island. All ethically sourced, steam-distilled.'},
  {cat:'EAST AFRICA SHIPPING',q:'Do you ship within East Africa?',a:'Yes. Tanzania, Kenya, Uganda, Rwanda via DHL Express + bus cargo for cheaper. 1-3 days TZ, 2-4 days Kenya/Uganda. M-Pesa, Tigo Pesa, Airtel Money accepted. Free shipping over $120 / TZS 300k.'},
  {cat:'EAST AFRICA SHIPPING',q:'Worldwide shipping from Zanzibar?',a:'DHL Express from Dar es Salaam hub. 3-7 days worldwide. We pack in plastic-free: recycled kraft, sisal rope from Tanga, banana fiber. No bubble wrap. Shipping $15, free over $120.'},
  {cat:'EAST AFRICA SHIPPING',q:'M-Pesa / Tigo Pesa accepted?',a:'Yes! At checkout choose Pay with M-Pesa. Lipa number 514... or Stripe for cards / PayPal. For wholesale: M-Pesa + bank transfer + Wise.'},
  {cat:'RITUAL & BURN',q:'Burn time 60H — real?',a:'Yes, 180g = 45H, 250g terracotta = 60H if you: 1) First burn to edge (2.5hrs), 2) Trim wick to 5mm every time, 3) No draft from ocean breeze. Shea holds scent better than soy, so last hours still smell.'},
  {cat:'RITUAL & BURN',q:'Is jar reusable? How to clean shea wax?',a:'Shea is easy — unlike paraffin. After burn, pour warm water, wait 2 mins, wipe with cloth. No freezer needed. Then reuse: succulent planter (drainage hole pre-drilled), makeup brush holder, coffee cup (food-safe after wash).'},
  {cat:'RITUAL & BURN',q:'Returns?',a:'Unused, unopened within 14 days. But we rarely get returns — shea wax is gentle. If jar cracked from Zanzibar transit, we resend free. Just WhatsApp photo. Candle safety: never leave unattended, keep from kanga curtains.'},
]

const cats=['ALL','ZANZIBAR ORIGIN','EAST AFRICA MATERIALS','EAST AFRICA SHIPPING','RITUAL & BURN']

export default function FAQ(){
  const [open,setOpen]=useState<string>('Where in Zanzibar is LUNA made?')
  const [cat,setCat]=useState('ALL')
  const filtered = cat==='ALL'? faqs : faqs.filter(f=>f.cat===cat)

  return(
    <main className="bg-[#FFFCF7] text-[#2B1A0E]">
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-[9px] tracking-[0.4em] opacity-40">FAQ • ZANZIBAR • EAST AFRICA • SHIPPING</p>
          <h1 className="font-serif text-[42px] md:text-[58px] leading-[0.85] mt-5">Shipping<br/><span className="italic font-light">& Rituals.</span></h1>
          <p className="text-[12px] leading-[1.8] opacity-60 mt-6 max-w-[340px]">Made in Kendwa, shipped from Dar. Shea from Ghana, clay from Zanzibar, soul from East Africa.</p>

          <div className="mt-10 flex flex-wrap gap-2">
            {cats.map(c=>(
              <button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 text-[8px] tracking-[0.25em] border transition ${cat===c?'bg-[#2B1A0E] text-white border-[#2B1A0E]':'border-[#E8DCCF] opacity-60 hover:opacity-100 hover:border-[#2B1A0E]'}`}>{c}</button>
            ))}
          </div>

          <div className="mt-12 bg-[#F5F1EB] p-6 border border-[#F0E6D8]">
            <p className="text-[9px] tracking-[0.3em] opacity-40">KARIBU KENDWA</p>
            <p className="font-serif text-[18px] mt-3 leading-tight">Visit our studio.<br/>Kendwa Rocks, Zanzibar.</p>
            <p className="text-[11px] opacity-60 mt-3 leading-relaxed">By appointment only. See clay throwing, shea melting. WhatsApp +255 777 XXX • hello@lunacandles.com</p>
            <p className="text-[8px] tracking-widest mt-4 opacity-40">6°07'S 39°11'E • 10 MINS FROM OCEAN</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="border border-[#F0E6D8] divide-y divide-[#F0E6D8] bg-white">
            {filtered.map(f=>{
              const isOpen = open===f.q
              return(
                <div key={f.q} className="group">
                  <button onClick={()=>setOpen(isOpen? '' : f.q)} className="w-full text-left p-6 md:p-7 flex justify-between items-start gap-6 hover:bg-[#FFFBF2] transition">
                    <div>
                      <p className="text-[7px] tracking-[0.3em] opacity-30">{f.cat}</p>
                      <p className={`font-serif text-[17px] md:text-[19px] leading-[1.2] mt-2 transition ${isOpen?'italic':''}`}>{f.q}</p>
                    </div>
                    <span className={`text-[14px] mt-1 w-7 h-7 border flex items-center justify-center shrink-0 transition ${isOpen?'bg-[#2B1A0E] text-white border-[#2B1A0E]':'border-[#E8DCCF] group-hover:border-[#2B1A0E]'}`}>{isOpen?'—':'+'}</span>
                  </button>
                  <div className={`grid transition-all duration-500 ${isOpen?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-7 pb-7 text-[12px] leading-[1.8] opacity-60 max-w-[540px]">{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-[9px] tracking-[0.2em]">
            <div className="bg-[#2B1A0E] text-white p-4 text-center">M-PESA OK</div>
            <div className="border border-[#F0E6D8] bg-[#FFFBF2] p-4 text-center">DHL 3-7 DAYS</div>
            <div className="border border-[#F0E6D8] bg-[#FFFBF2] p-4 text-center">FREE OVER $120</div>
          </div>
        </div>
      </section>
    </main>
  )
}