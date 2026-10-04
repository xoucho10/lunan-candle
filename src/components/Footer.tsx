'use client'
import Link from 'next/link'
export default function Footer(){
  return(
    <footer className="bg-[#2B1A0E] text-[#FFFCF7]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-[#FFFCF7] flex items-center justify-center"><img src="/logo.png" className="h-7 w-7 object-contain rounded-full"/></div><span className="font-serif text-[28px] tracking-[0.2em]">LUNAN</span></Link>
          <p className="mt-5 text-[11px] leading-relaxed opacity-60 max-w-[260px]">Rooted in ritual. Hand-poured in Kendwa, Zanzibar. Vegan shea wax • 60H • Reusable terracotta.</p>
          <div className="mt-5 text-[8px] tracking-widest opacity-40 leading-loose"><p>KENDWA ROCKS, ZANZIBAR</p><p>NUNGWI BEACH, ZANZIBAR</p><p>ritual@lunan.co • +255 77 123 4567</p></div>
        </div>
        <div className="md:col-span-2"><p className="text-[8px] tracking-[0.4em] opacity-30 mb-5">PAGES</p><div className="flex flex-col gap-2.5 text-[10px] tracking-[0.2em] opacity-70"><Link href="/">HOME</Link><Link href="/shop">SHOP</Link><Link href="/story">STORY</Link><Link href="/journal">RITUALS</Link><Link href="/stockists">STOCKISTS</Link><Link href="/faq">FAQ</Link><Link href="/stockists#contact">CONTACT</Link><Link href="/cart">CART</Link></div></div>
        <div className="md:col-span-2"><p className="text-[8px] tracking-[0.4em] opacity-30 mb-5">SHOP BY RITUAL</p><div className="flex flex-col gap-2.5 text-[10px] tracking-[0.2em] opacity-70"><Link href="/shop">FOCUS</Link><Link href="/shop">CALM</Link><Link href="/shop">BOLD</Link><Link href="/shop">EARTH</Link><Link href="/shop">REFILLS</Link></div></div>
        <div className="md:col-span-4"><p className="text-[8px] tracking-[0.4em] opacity-30 mb-5">KENDWA, ZANZIBAR</p><div className="aspect-[4/3] bg-[#3C2415] border border-white/10 overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.5!2d39.12!3d-5.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKendwa%2C%20Zanzibar!5e0!3m2!1sen!2stz!4v1700000000000" width="100%" height="100%" style={{border:0,filter:'grayscale(1) invert(0.9) sepia(0.2)'}} allowFullScreen loading="lazy"/></div></div>
      </div>
      <div className="border-t border-white/10 max-w-[1280px] mx-auto px-6 md:px-12 py-5 flex justify-between text-[8px] tracking-[0.3em] opacity-30"><p>© 2026 LUNA CANDLES — KENDWA, ZANZIBAR</p><p>Website designer <a href="https://wa.me/256700568634" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">Xoucho10</a></p></div>
    </footer>
  )
}

