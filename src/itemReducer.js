function reducer(state = {cart: [], items: []}, action) {

    switch (action.type) {
        case "ADD_ITEM":
            return ({
                ...state,
                cart: [...state.cart, action.payload]
            })
        case "GOT_ITEMS":
            return ({
                ...state,
                items: action.payload
            })

    
        default:
            return state
    }

}

export default reducer