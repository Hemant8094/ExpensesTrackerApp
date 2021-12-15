
export const Reducer = (state,action)=>{

    switch (action.type){

        case "DELETE_TRANSACTIONS":
            return {
                ...state,
                transaction: state.transaction.filter(transaction=>transaction.id !== action.payload),
                delete: window.localStorage.setItem("saveTransactions",JSON.stringify(state.transaction.filter(transaction=>transaction.id !== action.payload)))
            }
        case "ADD_TRANSACTIONS":
            return{
                ...state,
                transaction:[action.payload,...state.transaction]
            }
        case "SAVE_TRANSACTIONS":
            return{
                ...state,
                save: window.localStorage.setItem("saveTransactions",JSON.stringify([...state.transaction]))
            }
        // case "GET_TRANSACTIONS":
        //     return{
        //         ...state,
        //         transaction:state.save
        //     }
        default: 
            return state;
    }
}