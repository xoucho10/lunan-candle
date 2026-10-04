'use client'
import Link from 'next/link'
import { useCart } from '@/store/cart'

export default function Cart(){
  const { items, remove, inc, dec, total, count } = useCart()
  const shipping = total()>120?0:15
  const grandTotal = total()+shipping

  return(
    <main className="bg-[#FFFCF7] text-[#2B1A0E] min-h-[85vh]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[9px] tracking-[0.4em] opacity-40">CART • {count()} ITEMS • KENDWA, ZANZIBAR</p>
            <h1 className="font-serif text-[44px] md:text-[56px] leading-[0.9] mt-4">Cart</h1>
          </div>
          <Link href="/shop" className="hidden md:block text-[10px] tracking-[0.3em] border-b border-[#2B1A0E] pb-1">CONTINUE SHOPPING →</Link>
        </div>

        {items.length===0? (
          <div className="mt-20 py-20 border border-dashed border-[#E8DCCF] text-center bg-white">
            <p className="font-serif text-3xl">Your ritual is empty.</p>
            <p className="text-[11px] opacity-60 mt-3">Add a candle — 60H burn, reusable terracotta.</p>
            <Link href="/shop" className="inline-block mt-8 bg-[#2B1A0E] text-white px-8 py-3 text-[10px] tracking-[0.3em]">SHOP RITUALS</Link>
          </div>
        ):(
          <div className="mt-12 grid md:grid-cols-12 gap-10">
            {/* ITEMS */}
            <div className="md:col-span-8">
              <div className="border-t border-[#2B1A0E] divide-y divide-[#F0E6D8] bg-white border-x border-b">
                {items.map((it:any)=>(
                  <div key={it.cartId} className="p-6 md:p-8 flex gap-5 group">
                    <Link href={`/product/${it.id||'oba'}`} className="w-24 md:w-32 aspect-[4/5] bg-[#F5F1EB] overflow-hidden shrink-0">
                      <img src={it.img} alt={it.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    </Link>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="text-[8px] tracking-[0.3em] opacity-40">{it.ritual||'RITUAL'} • 60H • SHEA</p>
                          <p className="font-serif text-[18px] mt-1">{it.name} — <span className="opacity-60 text-[16px]">{it.sub}</span></p>
                          <p className="text-[10px] opacity-50 mt-1">Terracotta • Reusable • Vegan</p>
                        </div>
                        <p className="text-[13px] tracking-widest">${it.price*it.qty}</p>
                      </div>
                      <div className="mt-auto flex justify-between items-center pt-6">
                        <div className="flex items-center border border-[#E8DCCF]">
                          <button onClick={()=>dec(it.cartId)} className="w-8 h-8 text-[14px] hover:bg-[#F5F1EB]">—</button>
                          <span className="w-8 text-center text-[11px] tracking-widest">{it.qty}</span>
                          <button onClick={()=>inc(it.cartId)} className="w-8 h-8 text-[14px] hover:bg-[#F5F1EB]">+</button>
                        </div>
                        <button onClick={()=>remove(it.cartId)} className="text-[9px] tracking-[0.2em] opacity-40 hover:opacity-100 underline underline-offset-4">REMOVE</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#F5F1EB] border border-[#F0E6D8] p-5 flex flex-wrap gap-4 text-[9px] tracking-[0.2em]">
                <span>✓ 60H SHEA WAX</span><span>✓ REUSABLE TERRACOTTA</span><span>✓ REFILL $24</span><span>✓ DHL 3-7 DAYS</span>
              </div>
            </div>

            {/* SUMMARY - STICKY */}
            <div className="md:col-span-4">
              <div className="bg-[#2B1A0E] text-[#FFFCF7] p-8 md:sticky md:top-28">
                <p className="text-[9px] tracking-[0.4em] opacity-40">ORDER SUMMARY</p>
                <div className="mt-8 space-y-3 text-[12px]">
                  <div className="flex justify-between"><span className="opacity-60">Subtotal • {count()} items</span><span>${total()}</span></div>
                  <div className="flex justify-between"><span className="opacity-60">Shipping • DHL Express</span><span>{shipping===0?'FREE':`$${shipping}`}</span></div>
                  <div className="flex justify-between pt-4 border-t border-white/10 font-medium text-[14px]"><span>Total</span><span>${grandTotal}</span></div>
                  {total()<120 && <p className="text-[10px] opacity-50 leading-relaxed">Add ${(120-total()).toFixed(0)} more for free shipping.</p>}
                </div>

                <Link href="/checkout" className="block mt-8 bg-[#FFFCF7] text-[#2B1A0E] text-center py-4 text-[11px] tracking-[0.3em] hover:bg-white transition">CHECKOUT →</Link>
                <Link href="/shop" className="block mt-3 border border-white/20 text-center py-3.5 text-[10px] tracking-[0.3em] hover:bg-white/10 transition">CONTINUE SHOPPING</Link>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[8px] tracking-[0.3em] opacity-40">SECURE CHECKOUT</p>
                  <p className="text-[10px] opacity-50 mt-2 leading-relaxed">Stripe worldwide • M-Pesa / Tigo Pesa / Airtel for TZ/KE/UG • Taxes calculated at checkout.</p>
                  <p className="text-[9px] opacity-30 mt-4">Demo mode — no real payment until client approves.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}