  import React, {useContext, useEffect} from 'react'
  import { GlobalContext } from '../Context/GlobalState'
  function History() {
    const {transactions, deleteTransaction} = useContext(GlobalContext)

    return (
      <div>
          <h3>History</h3>
          <ul className="list">
              {transactions.map((instance)=>{
                return(<li key={instance._id} className={instance.amount >= 0 ? "plus":"minus"}>
              {instance.text}<span>{instance.amount >= 0 ? "$": "-$"}{Math.abs(instance.amount)}</span>
                <button className="delete-btn" onClick={()=>deleteTransaction(instance._id)}>x</button>
                </li>)
                
              })}
          </ul>
          </div>
    )
  }

  export default History