'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function Header(){
  const [open,setOpen]=useState(false)
  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur border-b border-sand">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="LUNA CANDLES AFRICAN" className="h-12 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}}/>
          <span className="font-black text-xl tracking-tight">LUNA CANDLES</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-xs tracking-[0.2em] items-center">
          <Link href="/" className="border-b border-espresso">HOME</Link>
          <Link href="/shop">SHOP</Link>
          <Link href="/story">OUR STORY</Link>
          <Link href="/journal">RITUALS</Link>
          <Link href="/stockists">STOCKISTS</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <div className="flex gap-4 items-center">
          <Link href="/cart" className="text-xs tracking-widest bg-espresso text-ivory px-5 py-2.5">CART</Link>
          <button className="md:hidden text-xs" onClick={()=>setOpen(!open)}>MENU</button>
        </div>
      </div>
      {open && <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-ivory border-b text-xs tracking-widest">
        <Link href="/" onClick={()=>setOpen(false)}>HOME</Link>
        <Link href="/shop" onClick={()=>setOpen(false)}>SHOP</Link>
        <Link href="/story" onClick={()=>setOpen(false)}>OUR STORY</Link>
        <Link href="/journal" onClick={()=>setOpen(false)}>RITUALS</Link>
        <Link href="/stockists" onClick={()=>setOpen(false)}>STOCKISTS</Link>
        <Link href="/faq" onClick={()=>setOpen(false)}>FAQ</Link>
        <Link href="/cart" onClick={()=>setOpen(false)}>CART</Link>
      </div>}
    </header>
  )
}
