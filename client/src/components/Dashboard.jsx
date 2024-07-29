import React, { useContext, useEffect, useState } from "react"
import Usercard from "./Usercard"
import Profile from "./Profile"
import { GlobalContext } from "../Context/GlobalState"

function Dashboard() {
  const { getData, username } = useContext(GlobalContext)
  const [isLogged, setBool] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      await getData()
    }

    fetchData()
  }, [username])
  return (
    // either show userCard if username is not ""
    //if valid username is present show result for profile
    <div className="dash">{isLogged == false ? <Usercard setBool={setBool} /> : <Profile setBool={setBool} />}</div>
  )
}

export default Dashboard
