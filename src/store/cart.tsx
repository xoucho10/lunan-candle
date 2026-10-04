'use client'
import { createContext, useContext, useState } from 'react'

const CartContext = createContext<any>(null)

export function CartProvider({children}:{children:React.ReactNode}){
  const [items,setItems]=useState<any[]>([
    {cartId:1,name:'OBA',sub:'Smoked Cedar',ritual:'BOLD',price:48,img:'/candles/oba.jpg',qty:1,id:'oba'}
  ])
  const add = (p:any) => setItems(s=>[...s,{...p,cartId:Date.now(),qty:1}])
  const remove = (cartId:number) => setItems(s=>s.filter(i=>i.cartId!==cartId))
  const inc = (cartId:number) => setItems(s=>s.map(i=>i.cartId===cartId?{...i,qty:i.qty+1}:i))
  const dec = (cartId:number) => setItems(s=>s.map(i=>i.cartId===cartId?{...i,qty:Math.max(1,i.qty-1)}:i))
  const total = () => items.reduce((a,i)=>a+i.price*i.qty,0)
  const count = () => items.reduce((a,i)=>a+i.qty,0)
  return <CartContext.Provider value={{items,add,remove,inc,dec,total,count}}>{children}</CartContext.Provider>
}
export const useCart = () => useContext(CartContext)