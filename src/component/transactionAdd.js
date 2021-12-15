import React,{useState,useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export function AddTransactions(){

 const [text,setText] = useState("")
 const [amount,setAmount] = useState(0)
 const {addTransactions} = useContext(GlobalContext)
 const {SaveInLocalStorage} = useContext(GlobalContext)
 const onSubmit = ()=>{
     const newTransaction = {
         id:Math.floor(Math.random()*1000000),
         text,
         amount: parseInt(amount, 10)
     }

     addTransactions(newTransaction)
     setAmount(0)
     setText("")
     SaveInLocalStorage()
 }

    return <div style ={{textAlign:"center"}}>
        <input 
            className ="text-field" 
            type = "text" 
            placeholder ="Add label..."
            value={text}
            onChange ={(e)=>setText(e.target.value)}
            />
        <input 
            className ="text-field" 
            type = "number" 
            placeholder ="Add Amount..."
            value={amount}
            onChange ={(e)=>setAmount(e.target.value)}
            />

        <div 
            style ={{marginBottom:"8px",fontWeight:"bold"}}>
            
            Add negative (-) ahead amount for Expenses
        </div>
        <button 
            className = "Add-Transaction"
            onClick = {()=>onSubmit()}>
            
            Add Transaction
        </button>
    </div>
}