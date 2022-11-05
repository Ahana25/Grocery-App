import * as actionTypes from '../Constants/cartConstant'

export let cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            let item= action.payload
           let exist=  state.cartItems.find(product=>product.id===item.id)

           if(exist) return;
           return{...state,cartItems:[...state.cartItems,item]}

           case actionTypes.REMOVE_FROM_CART:
               return{...state,cartItems:state.cartItems.filter(product=>product.id !==action.payload)}
           default:
               return state;
    }
}
