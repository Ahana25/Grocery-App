import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {getProductDetails} from '../Redux/Actions/productActions'
import {Box,makeStyles, Typography} from '@material-ui/core'
import clsx from 'clsx'
import { Button } from '@material-ui/core'
import { addToCart } from '../Redux/Actions/cartActions'
import {useHistory} from 'react-router-dom'

let useStyles= makeStyles({
    component:{
        marginTop:"55px",
        backgroundColor:"#F2F2F2"
    },
    container:{
     margin: "0 80px",
     backgroundColor:"white",
     display:"flex"
    },
    rightContainer:{
        marginLeft:"100px",
        marginTop:"50",
        '& > *':{
            marginTop:"10px"
        }
    },
    smallText:{
        fontSize:"14px"
    },
    greyColor:{
        color:"#878787"
    },
    price:{
        fontWeight:"bold",
        fontSize:"28px"
    },
    image:{
        width:"280px"
    },
    button:{
        margin:"15px"
    },
    addCart:{
        background:"#ff9f00",
        color:"white",
        textShadow:"2px 4px 3px black"
    },
    order:{
        background:"#fb641b",
        color:"white",
        textShadow:"2px 4px 3px black"
    }
})
function ViewDetails({match}) {
    let history= useHistory();
    
    let classes= useStyles();
    let {product}= useSelector(state=> state.getProductDetails);
    let dispatch= useDispatch();
    useEffect(()=>{
dispatch(getProductDetails(match.params.id))
    },[dispatch])


    let addItemToCart=()=>{
     dispatch(addToCart(product.id))
     history.push('/cart')
    }

    let moveExit=()=>{
        history.push('/exit')
    }
    return (
        <div >
        <Box className={classes.component}>
        {product && Object.keys(product).length &&
            <Box className={classes.container} >
                <Box style={{minWidth:'40%'}}>
                    <img src={product.url} alt="Product Image" className={classes.image} />
                    <Button onClick={()=>addItemToCart()} className={clsx(classes.button, classes.addCart)} variant="contained">Add to Cart</Button>
                    <Button className={clsx(classes.button,classes.order)} variant="contained" onClick={moveExit}>Place Order</Button>
                </Box>
                <Box className={classes.rightContainer}>
                    <Typography style={{color:"black",fontWeight:"bold",fontFamily:"cursive",fontSize:"30px"}}>{product.title.shortTitle}</Typography>
                    <Typography className={clsx(classes.smallText,classes.greyColor)}>{product.category}</Typography>
                
                    <Typography>
                        <span className={classes.price}>₹{product.price.mrp}</span> &nbsp; &nbsp; &nbsp;
                        <span className={classes.greyColor}> <strike>₹</strike> <strike>{product.price.cost}</strike></span> &nbsp; &nbsp; &nbsp;
                        <span style={{color:'#388E3C'}}>{product.price.discount}off</span>
                    </Typography>
                    <Typography style={{color:"green",fontWeight:"bold",fontFamily:"cursive"}}>Available Quantity: {product.quantAvail}</Typography>
                    <Typography style={{color:"red",fontWeight:"bold",fontFamily:"cursive"}}>Quantities Sold: {product.quantSold}</Typography>
                    <Typography style={{fontSize:13,fontFamily:"cursive"}}>Current Delivery Status: {product.status}</Typography>

                </Box>
            </Box>
        }
            </Box>
        </div>
    )
}

export default ViewDetails
