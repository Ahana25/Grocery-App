import React,{useEffect, useState} from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'


let useStyles= makeStyles({
    component:{
width:"90%",
background:"#fff",
marginLeft:"15px"
    },
    header:{
        padding:"5px 24px",
        borderBottom:"1px solid #f0f0f0"
    },
    container:{
        padding:"15px 24px",
        '& > *':{
            marginTop:"20px",
            fontSize:"14px"
        }
    },
    greyColor:{
        color:"#878787",
        fontWeight:"bold"
    },
    price:{
        float:"right",
    },
    totalamount:{
        fontSize:"13px",
        fontWeight:"bold",
        border:"4px dashed #f0f0f0"
    }
})
function TotalView({cartItems}) {
    let classes= useStyles();

    const [price,setPrice]= useState(0);
    const [discount,setDiscount]= useState(0);

    let totalAmount=()=>{
        let price=0;
        let discount=0;
        cartItems.map(item=>{
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost)
        });
        setPrice(price);
    setDiscount(discount);
    }

 

    useEffect(()=>{
        totalAmount();
    },[])
   
    
    return (
        <div>
            <Box className={classes.component}>
                <Box className={classes.header}>
                    <Typography className={classes.greyColor}>PRICE SUMMARY</Typography>
                </Box>
                <Box className={classes.container}>
                <Typography>PRICE ({cartItems.length} item) <span className={classes.price}>₹ {price}</span> </Typography>
                <Typography>Discount
                <span className={classes.price}>₹ {discount}</span>
                </Typography>
                <Typography className={classes.totalamount}>Total Amount
                <span className={classes.price}>₹ {price-discount}</span>
                </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default TotalView
