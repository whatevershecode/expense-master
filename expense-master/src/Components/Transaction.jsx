import React ,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalContext'

const Transaction = ({trans}) => {
  const {deleteTransaction} =useContext(GlobalContext)
    const sign = trans.amount < 0 ? '-' :'+'
  return (
    
    <div>
      <li className={trans.amount<0? 'minus':'plus'}>
         {trans.text}<span>{sign}${Math.abs( trans.amount) }</span><button className="delete-btn" onClick={()=>deleteTransaction(trans.id)}>x</button>
        </li>
    </div>
  )
}

export default Transaction
