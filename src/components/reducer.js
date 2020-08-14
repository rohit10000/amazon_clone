export const initialState = {
  basket:[]
};

function reducer(state, action){
    console.log(action);

    switch (action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
    };
            break;
        case 'REMOVE_FROM_BASKET':
            //Login for removing item from basket
            return {state};
            break;
        default:
            return state;
    }
}

export default reducer;
