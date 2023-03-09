const initState = null;

const reducer = (state=initState, action) =>{
    switch(action.type){
        case "set_user":
            let userDetails = action.payload
            return userDetails
        default:
            return state
    }
}

export default reducer