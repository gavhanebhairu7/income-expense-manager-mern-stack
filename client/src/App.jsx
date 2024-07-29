import Header from "./components/Header.jsx"
import "./App.css"
import Balance from "./components/Balance.jsx"
import IncomeExpense from "./components/IncomeExpense.jsx"
import History from "./components/History.jsx"
import AddTransaction from "./components/AddTransaction.jsx"
import { GlobalProvider } from "./Context/GlobalState.jsx"
import Error from "./components/Error.jsx"
import Usercard from "./components/Usercard.jsx"
import Profile from "./components/Profile.jsx"
import Dashboard from "./components/Dashboard.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Dashboard />
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
        <Error />
        <Footer />
      </div>
    </GlobalProvider>
  )
}

export default App
