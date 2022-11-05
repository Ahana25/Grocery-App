import axios from 'axios'
import * as action from '../Constants/groceryConstant'
let url="http://127.0.0.1:8000"

// let getGrocery=()=>async(dispatch)=>{
//     try{
//     let {data}= await axios.get(`${url}/grocery`)
//     dispatch({type:action.GET_GROCERY_SUCCESS,payload:data});
// }catch(error){
//     dispatch({type:action.GET_GROCERY_FAIL,payload:error.response});

// }
// }



    // export {getGrocery}


    export let getProductDetails=(id)=>async(dispatch)=>{
        try{
    let {data}= await axios.get(`${url}/product/${id}`)
    dispatch({type:action.GET_GROCERY_DETAIL_SUCCESS,payload:data});
        }catch(error){
            dispatch({type:action.GET_GROCERY_DETAIL_FAIL,payload:error.response});

        }
    }
