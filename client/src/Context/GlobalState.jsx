import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"
import axios from "axios"
//initialization
const initialState = {
  transactions: [
    // { id: 1, text: "flower", amount: -20 },
    // { id: 2, text: "salary", amount: 300 },
    // { id: 3, text: "books", amount: -50 },
    // { id: 4, text: "camera", amount: 150 },
  ],
  error: false,
  err_message: "default",
  username: "",
  loading: false,
}

//create context
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //actions
  //to get data from database
  async function getData() {
    try {
      console.log("getting data for ", state.username)
      const res = await axios.get(`http://localhost:3000/api/v1/transactions/${state.username}`)
      dispatch({ type: "GET_TRANSACTIONS", payload: res.data.data })
    } catch (err) {
      console.log("Global :: State error ::", err)
    }
  }

  async function deleteTransaction(id) {
    console.log("Delete Transaction called !")
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/transactions/${id}`)
      console.log("response on delete request: ", response)
      if (response.data.success) {
        dispatch({ type: "DELETE_TRANSACTION", payload: id })
      } else {
        dispatch({ type: "SET_ERROR", payload: response.data.error })
      }
    } catch (err) {
      console.log("Global state :: error ::", err)
    }
    dispatch({ type: "DELETE_TRANSACTION", payload: id })
  }
  async function addTransaction(obj) {
    // console.log("Add Transaction is called !", obj);
    // dispatch({type:"ADD_TRANSACTION", payload:obj})
    try {
      console.log("request sent for ", state.username)
      const res = await axios.post(`http://localhost:3000/api/v1/transactions/${state.username}`, obj)
      console.log("response for add transaction: ", res)
      if (res.data.success) {
        dispatch({ type: "ADD_TRANSACTION", payload: res.data.data })
      }
    } catch (err) {
      console.log("error data: ", err.response.data)
      dispatch({ type: "SET_ERROR", payload: err.response.data.error })
    }
  }

  function set_error(message) {
    dispatch({ type: "SET_ERROR", payload: message })
  }

  function reset_error() {
    dispatch({
      type: "CLEAR_ERROR",
      payload: "",
    })
  }

  function updateUser(user_name) {
    console.log("user_name in update: ", user_name)
    dispatch({ type: "SET_USER", payload: user_name })
    return true
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        err_message: state.err_message,
        error: state.error,
        loading: state.loading,
        username: state.username,
        deleteTransaction,
        addTransaction,
        getData,
        set_error,
        reset_error,
        updateUser,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
