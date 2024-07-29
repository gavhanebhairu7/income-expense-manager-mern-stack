import React, { useContext } from "react"
import "../App.css"
import { GlobalContext } from "../Context/GlobalState"
function Profile({ setBool }) {
  const { username } = useContext(GlobalContext)
  return (
    <>
      <div id="welcome">Welcome, {username}</div>
      <button
        className="btn btn1"
        onClick={() => setBool(false)}>
        Change User
      </button>
    </>
  )
}

export default Profile
