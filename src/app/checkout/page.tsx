'use client'
import { useState } from 'react'
import Link from 'next/link'

const demoCart=[
  {id:1,name:'OBA',sub:'Smoked Cedar',price:48,img:'/candles/oba.jpg'},
  {id:2,name:'SANA',sub:'Eucalyptus',price:48,img:'/candles/sana.jpg'},
]

export default function CheckoutDemo(){
  const [sent,setSent]=useState(false)
  return(
    <main className="bg-[#FFFCF7] text-[#2B1A0E] min-h-screen">
      <div className="max-w-[960px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-[9px] tracking-[0.4em] opacity-40">DEMO CHECKOUT • SAMPLE SITE</p>
          <h1 className="font-serif text-5xl leading-[0.9] mt-4">Checkout<br/><span className="italic font-light">— Demo</span></h1>
          <p className="text-[11px] opacity-60 mt-4 max-w-[320px] leading-relaxed">This is a sample store. No real payment. Stripe / M-Pesa will be added when client approves.</p>

          {!sent? (
            <div className="mt-10 space-y-3">
              <input placeholder="Email (demo)" className="w-full border border-[#E8DCCF] bg-white p-3.5 text-sm outline-none focus:border-[#2B1A0E]" />
              <input placeholder="Shipping Address (demo)" className="w-full border border-[#E8DCCF] bg-white p-3.5 text-sm outline-none focus:border-[#2B1A0E]" />
              <input placeholder="Country (demo)" className="w-full border border-[#E8DCCF] bg-white p-3.5 text-sm outline-none focus:border-[#2B1A0E]" />
              <button onClick={()=>setSent(true)} className="w-full bg-[#2B1A0E] text-white py-4 text-[11px] tracking-[0.3em] hover:bg-black transition">PLACE DEMO ORDER →</button>
              <p className="text-[9px] opacity-40 text-center mt-3">DEMO ONLY • No Stripe keys needed • For client presentation</p>
            </div>
          ):(
            <div className="mt-10 bg-white border border-[#F0E6D8] p-8 text-center">
              <p className="font-serif text-3xl">Asante — Demo Order Received.</p>
              <p className="text-[11px] opacity-60 mt-3">This is sample flow. When live, this will redirect to Stripe / M-Pesa.</p>
              <Link href="/shop" className="inline-block mt-6 border border-[#2B1A0E] px-6 py-2.5 text-[10px] tracking-[0.3em]">BACK TO SHOP</Link>
            </div>
          )}
        </div>

        <div className="bg-white border border-[#F0E6D8] p-6 h-fit">
          <p className="text-[9px] tracking-[0.3em] opacity-40">DEMO CART • 2 ITEMS</p>
          <div className="mt-6 space-y-4">
            {demoCart.map(i=>(
              <div key={i.id} className="flex gap-4">
                <div className="w-16 h-20 bg-[#F5F1EB]"><img src={i.img} className="w-full h-full object-cover" alt="" /></div>
                <div><p className="text-[11px] tracking-widest">{i.name} — {i.sub}</p><p className="text-[9px] opacity-50 mt-1">60H • Shea Wax</p></div>
                <p className="ml-auto text-[11px]">${i.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-[#2B1A0E] pt-4 flex justify-between text-[12px] font-medium"><span>Total (Demo)</span><span>$96</span></div>
          <p className="mt-4 text-[8px] opacity-30 tracking-widest text-center">60H • REUSABLE TERRACOTTA • KENDWA, ZANZIBAR</p>
        </div>
      </div>
    </main>
  )
}