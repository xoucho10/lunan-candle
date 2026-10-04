'use client'
import { useState } from 'react'
import Link from 'next/link'
export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [logoErr,setLogoErr]=useState(false)
  const links=[
    {label:'HOME',href:'/'},{label:'SHOP',href:'/shop'},{label:'OUR STORY',href:'/story'},
    {label:'RITUALS',href:'/journal'},{label:'STOCKISTS',href:'/stockists'},
    {label:'FAQ',href:'/faq'},{label:'CONTACT',href:'/stockists#contact'}
  ]
  return(
    <nav className="sticky top-0 z-50 bg-[#FFFCF7] border-b border-[#F0E6D8]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          {!logoErr? (
            <img src="/logo.png" alt="LUNA CANDLES AFRICAN" className="h-[88px] md:h-[112px] lg:h-[128px] w-auto object-contain" onError={()=>setLogoErr(true)} />
          ) : (
            <span className="font-serif text-3xl tracking-[0.2em]">LUNAN</span>
          )}
        </Link>
        <div className="hidden lg:flex gap-8 text-[12px] tracking-[0.25em] font-medium">{links.map(l=><Link key={l.label} href={l.href} className="hover:opacity-60 transition-opacity">{l.label}</Link>)}</div>
        <div className="flex items-center gap-4"><Link href="/cart" className="border border-[#2B1A0E] px-6 py-2.5 text-[12px] tracking-widest font-medium hover:bg-[#2B1A0E] hover:text-white transition">CART (0)</Link><button onClick={()=>setOpen(!open)} className="lg:hidden text-2xl">☰</button></div>
      </div>
      {open && <div className="lg:hidden border-t px-6 py-8 flex flex-col gap-5 text-[13px] tracking-[0.3em]">{links.map(l=><Link key={l.label} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}</div>}
    </nav>
  )
}
