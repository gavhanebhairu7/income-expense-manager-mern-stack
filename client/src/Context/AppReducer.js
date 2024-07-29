export default (state, action)=>{
    switch(action.type){
        case "DELETE_TRANSACTION":
        //     console.log("State before delete:", state.transactions);
        //     // const updatedTransactions = state.transactions.filter(transaction => transaction._id !== action.payload);
        //     console.log("State after delete:", updatedTransactions);
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
            // const data =action.payload;
            
        case "GET_TRANSACTIONS":
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case "SET_ERROR":
            console.log("error occurred !")
            return {
                ...state,
                error: true,
                err_message: action.payload
            }
        
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: false,
                err_message: 'default',
            };
        case 'SET_USER':
            console.log("use is set: ", action.payload);
            return {
                ...state,
                username:action.payload
            }
        default:
            return state;
    }
}