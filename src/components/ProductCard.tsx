'use client'
import Link from 'next/link'
export default function ProductCard({p}:{p:any}){
  return (
    <Link href={`/product/${p.slug}`} className="group">
      <div className="bg-[#F5F1EB] aspect-[4/5] overflow-hidden flex items-center justify-center relative">
        <img
          src={p.img || `/candles/${p.slug}.jpg`}
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700"
        />
      </div>
      <div className="mt-4 flex justify-between text-xs tracking-widest">
        <div><h3 className="font-serif text-[13px] tracking-wider">{p.name}</h3></div>
        <p>${p.price}</p>
      </div>
    </Link>
  )
}
