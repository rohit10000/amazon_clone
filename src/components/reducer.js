import Product from "./Product";
import React from "react";

export const initialState = {
  basket:[
      {
          id:"1234",
          title:"Henna Montena",
          price: 11.96,
          rating: 5,
          image: "https://d1478j0kge9vfg.cloudfront.net/homepage/c27ab5188d5f7efcc7bef8715f340a9c_300x442.jpg"
      }
  ]
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action){
    console.log(action);

    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
            break;
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
    };
            break;
        case 'REMOVE_FROM_BASKET':
            //Login for removing item from basket
            var newBasket = [...state.basket];
            const index = state.basket.findIndex(function(basketItem){
                return (basketItem.id === action.id)    ;
            });
            if(index >= 0){
                //item exists in basket, remove it...
                newBasket.splice(index, 1);
            }
            else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not there.   `
                )
            }

            return {
                ...state,
                basket: newBasket
            };
            break;
        default:
            return state;
    }
}

export default reducer;
