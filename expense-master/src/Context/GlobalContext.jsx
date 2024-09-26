import React, { createContext, useReducer } from "react";
import Appreducer from "./Appreducer";
const initialState ={
    transaction: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider =({children})=>{

    const [state,dispatch] = useReducer(Appreducer ,initialState)

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return(
        <GlobalContext.Provider value={{
            transaction:state.transaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}