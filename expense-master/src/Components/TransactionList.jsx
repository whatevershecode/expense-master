import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import Transaction from './Transaction'


const TransactionList = () => { 
  const  {transaction} = useContext(GlobalContext)
  console.log(transaction)
  return (
    <div>
        <h3>History</h3>
      <ul className="list">
        {transaction.map(trans=>( <Transaction key={trans.id} trans={trans}/>))}
      
      </ul>
    </div>
  )
}

export default TransactionList
