import React, { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../Context/GlobalState"
function Balance() {
  const { transactions, getData } = useContext(GlobalContext)

  useEffect(() => {
    getData()
  }, [])

  const balance = transactions.reduce((sum, el) => sum + el.amount, 0)
  console.log(balance)
  return (
    <div id="balance">
      <h4>Your Balance</h4>
      <h3>{balance}</h3>
    </div>
  )
}

export default Balance
