import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export function Transaction(){

    const {transaction} =useContext(GlobalContext)
    const amount = transaction.map(transaction=>transaction.amount)
  
    const income = amount.filter(item => item > 0).reduce((prev,item)=>(prev+=item),0).toFixed(1)
    const expense = (amount.filter(item => item < 0).reduce((prev,item)=>(prev+=item),0)*-1).toFixed(1)

    return <div className ="transaction-box">
    
                <div className ="income-container">
                    <div className ="income-box">
                        Income
                    </div>
                    <div className ="money-container">
                    ₹{income}
                    </div>
                </div>
                <div className ="expense-container">
                    <div className ="expense-box">
                        Expenses
                    </div>
                    <div className ="money-container">
                    ₹{expense}
                    </div>
                </div>
        
    </div>
}