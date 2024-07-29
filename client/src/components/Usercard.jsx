import React, { useContext, useState } from "react"
import "../App.css"
import { GlobalContext } from "../Context/GlobalState"

function Usercard({ setBool }) {
  const { updateUser, username } = useContext(GlobalContext)
  const [temp, setTemp] = useState(username)
  const handleSubmit = (e) => {
    e.preventDefault() // Prevents the default form submission behavior
    const res = updateUser(temp)
    if (res) setBool(true)
  }

  return (
    <div className="user-card">
      <form onSubmit={handleSubmit}>
        <h3 className="headline">username: {temp}</h3>
        <input
          className="username-input"
          type="text"
          name="username"
          placeholder="enter username..."
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <button
          className="btn btn1"
          type="submit">
          submit
        </button>
      </form>
    </div>
  )
}

export default Usercard
