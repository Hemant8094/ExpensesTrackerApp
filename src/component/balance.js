import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export function Balance (){

    const {transaction}=useContext(GlobalContext)

    const amount = transaction.map(transaction=>transaction.amount)
    const total = amount.reduce((acc,item)=>(acc +=item),0).toFixed(1)
    
   return <div className ="balance-container">
       <div className ="balance-heading">
           Your Balance
       </div>
       <div className ="balance-box">
       ₹{total}
       </div>
   </div> 
}