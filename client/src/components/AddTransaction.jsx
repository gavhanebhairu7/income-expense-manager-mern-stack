import React, { useContext, useState } from "react"
import { GlobalContext } from "../Context/GlobalState"
import "../App.css"
function AddTransaction() {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)
  const { addTransaction, set_error } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()
    var newtext = text == "" ? undefined : text
    const newTransaction = {
      amount: parseFloat(amount), // Ensure amount is a number
      text: newtext,
    }
    if (newTransaction.amount == 0) {
      return set_error("Please add some amount")
    }
    addTransaction(newTransaction)
    setText("")
    setAmount(0)
  }

  return (
    <div className="transaction-container">
      <h3>Add new transaction</h3>
      <form
        id="form"
        onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            name="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button
          className="btn"
          type="submit">
          Add transaction
        </button>
      </form>
    </div>
  )
}

export default AddTransaction
