import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {makeStyles,Box, Typography,Button} from '@material-ui/core'
import CartItem from './CartItem'
import {removeFromCart} from '../../Redux/Actions/cartActions'
import {useHistory} from 'react-router-dom'
import TotalView from './TotalView'

let useStyles= makeStyles({
    component:{
  marginTop:"55px",
  padding:"30px 135px",
  display:"flex"
    },
    leftcomponent:{
        width:"67%",
    },
    header:{
        padding:"15px 24px",
        background:"#fff"
    },
    placeorder:{
   width:"250px",
   height:"50px",
   display:"flex",
   float:"right",
   background:"#fb641b"
    },
    bottom:{
     padding:"16px 22px",
     background:"#fff",
     borderTop:"1px solid #f0f0f0",
     boxShadow:"0 2px 10px 0 rgb(0 0 0 /10%)",
     width:"auto",
   height:"50px"
    }
})
function Cart() {
    let classes= useStyles()

    let {cartItems} = useSelector(state => state.cart)
    let dispatch= useDispatch()

    useEffect(()=>{
        console.log(cartItems)
    })
    let removeItemFromCart=(id)=>{
      dispatch(removeFromCart(id));
    }
let history= useHistory();
    let moveHome=()=>{
        history.push('/')
    }

    let moveExit=()=>{
        history.push('/exit')
    }
    return (
        <div>
          {cartItems.length ? 
          <Box className={classes.component}>
          <Box className={classes.leftcomponent}>
   <Box className={classes.header}>
       <Typography style={{fontWeight:600,fontSize:18,textAlign:"left"}}>My Cart ({cartItems.length})</Typography>
   </Box>
   {
       cartItems.map(item=>(
           <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
       ))
   }
          <Box className={classes.bottom}>
              <Button variant="contained" className={classes.placeorder} onClick={moveExit}>Place Order</Button>
          </Box>
          </Box>
          <Box className={classes.rightcomponent}></Box>
         <TotalView cartItems={cartItems}/>
         {/* <span>{cartItems.discount}</span> */}
          </Box>: 
          
          <p style={{margin:80,fontSize:20,fontFamily:'cursive',color:"greenyellow"}}>
          <a href="/">Cart is now empty!!</a>
          <br style={{marginTop:30}}/>
          Move to Home 
          </p> 
          }
        </div>
    )
}

export default Cart
