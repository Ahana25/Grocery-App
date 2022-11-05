import axios from 'axios'

let url1="http://127.0.0.1:8000"


let authenticateUser=async(user)=>{
    try{
        return await axios.post(`${url1}/signup`,user)
    }
    catch(error){
        console.log('Error while sending signup api')
    }
    
}

let authenticateLogin=async(user)=>{
  try{
   return await axios.post(`${url1}/login`,user)
  }catch(error){
      console.log('Error while calling api')
  }
}
// let url="http://127.0.0.1:8000"

let getGrocery=async()=>{
    try{
    return await axios.get(`${url1}/products`)
    // dispatch({type:action.GET_GROCERY_SUCCESS,payload:data});
}catch(error){
    // dispatch({type:action.GET_GROCERY_FAIL,payload:error.response});
  console.log('Error')    

}
}

export {authenticateUser,authenticateLogin,getGrocery}