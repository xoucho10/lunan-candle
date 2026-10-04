import { products } from '@/lib/products'
import Link from 'next/link'
export default function ProductPage({params}:{params:{slug:string}}){
  const p = products.find(x=>x.slug===params.slug)
  if(!p) return <div className="p-20">Not found — <Link href="/shop" className="underline">Back to shop</Link></div>
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16">
      <div className="bg-sand aspect-[4/5] flex items-center justify-center"><div className="w-52 h-72 rounded-b-[60px] rounded-t-2xl shadow-2xl flex items-end justify-center pb-8 bg-espresso"><span className="bg-ivory px-6 py-2 text-xs tracking-widest border border-gold">{p.name}</span></div></div>
      <div>
        <p className="text-xs tracking-widest opacity-60">{p.burn} • {p.size}</p>
        <h1 className="font-serif text-6xl mt-2">{p.name}</h1>
        <p className="mt-4 opacity-70 text-sm">{p.desc}</p>
        <div className="mt-6 grid grid-cols-3 gap-4 text-xs border-y py-6">
          <div><p className="font-bold">TOP</p><p className="opacity-60">{p.noteTop}</p></div>
          <div><p className="font-bold">HEART</p><p className="opacity-60">{p.noteMid}</p></div>
          <div><p className="font-bold">BASE</p><p className="opacity-60">{p.noteBase}</p></div>
        </div>
        <p className="mt-2 text-xs opacity-60"><b>Ingredients:</b> {p.ingredients}</p>
        <p className="mt-8 text-2xl font-serif">${p.price}</p>
        <div className="mt-6 flex gap-3"><Link href="/cart" className="flex-1 bg-espresso text-ivory py-3 text-center text-xs tracking-widest">ADD TO CART — ${p.price}</Link><Link href="/checkout" className="border border-espresso px-8 py-3 text-xs">BUY NOW</Link></div>
        <div className="mt-10 bg-sand p-6 text-sm"><h4 className="font-serif text-lg">Story of {p.name}</h4><p className="mt-2 opacity-70">{p.story}</p></div>
        <div className="mt-6 text-xs opacity-60 flex gap-4"><span>60H BURN</span><span>VEGAN</span><span>WORLDWIDE SHIPPING</span><span><Link href="/faq" className="underline">RETURNS</Link></span></div>
      </div>
    </main>
  )
}
