import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getProductDetailsReducer} from './Reducer/productReducer'
import {cartReducer} from '../Redux/Reducer/cartReducer'
let reducer= combineReducers({
    // getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
})

let middleware= [thunk]
let store= createStore(
reducer,
composeWithDevTools(applyMiddleware(...middleware))
)

export default store