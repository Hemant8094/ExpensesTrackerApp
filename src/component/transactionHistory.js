import React,{useContext,useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";
import nothingFound from "../assets/nothing-found.png"

export function TransactionHistory(){
    const {transaction} =useContext(GlobalContext)
    const {deleteTransactions} =useContext(GlobalContext)


  
    
    return <div className ="transaction-history-container">

            <h3 style = {{color:"white"}}>Transaction History</h3>
            <div className ="history-container">
            { transaction.length >0 ? transaction.map(x=>{
                return <div className = {x.amount < 0 ? "item-Box red":"item-Box"} key ={x.id}>
                        <button className ="delete-button" onClick = {()=>deleteTransactions(x.id)}>X</button>
                        <div className ="text-Box">
                            {x.text}
                        </div>
                        <div className ="money-Box">
                           {x.amount<0 ?"-":"+"} ₹{Math.abs(x.amount) }
                        </div>
                    </div>
            }):<div className = "nothing-found-container">
                <img className = "nothing-found-image" alt = "nothing-Found " src = {nothingFound}/>
                <h4>Nothing Found Yet!!</h4>
            </div>  }
            </div>
    </div> 
}