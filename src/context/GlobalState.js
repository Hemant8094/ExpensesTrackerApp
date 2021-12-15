import React,{createContext,useReducer} from "react";
import {Reducer} from "./AppReducer.js"

const initialState = {
    transaction: JSON.parse(localStorage.getItem("saveTransactions"))||[]
    
}


export const GlobalContext = createContext(initialState);

export const Globalprovider =({children})=>{

    const [state,dipatch] = useReducer(Reducer,initialState)

    //actions
    function deleteTransactions(id){
        dipatch({
            type:"DELETE_TRANSACTIONS",
            payload:id
        })

    }

    function addTransactions(transactions){
        dipatch({
            type:"ADD_TRANSACTIONS",
            payload:transactions
        })
    }

    function SaveInLocalStorage(){
        dipatch({
            type:"SAVE_TRANSACTIONS",
            
        })
    } 
    function getDataFromLocalStorage(){
        dipatch({
            type:"GET_TRANSACTIONS",
            
        })
    }

    return(<GlobalContext.Provider value = {{
    transaction:state.transaction,
    deleteTransactions,
    addTransactions,
    SaveInLocalStorage,
    getDataFromLocalStorage
   }}>
       {children}
   </GlobalContext.Provider>) 
}