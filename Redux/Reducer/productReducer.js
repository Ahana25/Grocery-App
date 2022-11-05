import * as actionType from '../Constants/groceryConstant'

// export let getProductsReducer=(state={products:[]},action)=>{

//   switch(action.type){
//       case actionType.GET_GROCERY_SUCCESS:
//           return {products: action.payload}

//       case actionType.GET_GROCERY_FAIL:
//       return {error: action.payload}
//       default:
//           return state

//   }

// }

export let getProductDetailsReducer=(state={product:{}},action)=>{
switch(action.type){
  case actionType.GET_GROCERY_DETAIL_SUCCESS:
    return {product:action.payload}
    case actionType.GET_GROCERY_DETAIL_FAIL:
      return {error: action.payload}
      default:
        return state
}
}