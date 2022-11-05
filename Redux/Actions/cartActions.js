import axios from 'axios'
import * as actionTypes from '../Constants/cartConstant'

let url="http://localhost:8000"


export let addToCart=(id)=>async(dispatch)=>{
    try{
     let {data} = await axios.get(`${url}/product/${id}`)
     dispatch({type:actionTypes.ADD_TO_CART,payload:data})

    }catch(error){
        console.log("Error while calling add to cart api")
    }
}

export let removeFromCart=(id)=>(dispatch)=>{
  dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id})
}