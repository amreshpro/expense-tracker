"use client"
import { useState } from "react"
import useThemeStore from "@/store/themeStore"

export default function AddTransaction() {
  const {isDarkMode} = useThemeStore()

  const [transactionValue, setTransactionValue] = useState({
    title:'',
    amount:0
  })


  const transactionHandler =()=>{
console.log(transactionValue)


  }
  return (
    <div className={` ${isDarkMode ? 'bg-blue-950 ':'bg-red-100 '} flex flex-col gap-4 h-fit w-96 sm:w-full rounded-l-lg rounded-r-lg p-2 `}>
     <div className="item-1 flex flex-col gap-1">
     <label htmlFor="title">Text</label>
      <input id="title" type="text"  onInput={(e:any)=>{setTransactionValue({...transactionValue,title:e.target.value!})}} className={`${isDarkMode ? 'bg-slate-900':''} p-2 outline-none rounded-l-lg rounded-r-lg`} placeholder="Enter text..." />
     </div>

     <div className="item-2 flex flex-col gap-1">
     <label htmlFor="pay">Amount (Negative -Expense, Positive -Income)</label>
      <input id="pay" type="number" onInput={(e:any)=>{setTransactionValue({...transactionValue,amount:e.target.value!})}}   className={`${isDarkMode ? 'bg-slate-900':''} p-2 outline-none rounded-l-lg rounded-r-lg`} placeholder="Enter amount..." />
     </div>

      <button onClick={()=>transactionHandler()} className="bg-blue-500 text-white px-4 py-2 rounded-l-lg rounded-r-lg">Add Transaction</button>
    </div>
  )
}