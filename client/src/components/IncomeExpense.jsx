import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

function IncomeExpense() {
  const {transactions} = useContext(GlobalContext)
  const income=transactions.reduce((sum, el)=>el.amount>=0 ?sum+el.amount:sum, 0);
  const expense=transactions.reduce((sum, el)=>el.amount <0 ?sum+Math.abs(el.amount):sum, 0);
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-${expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpense