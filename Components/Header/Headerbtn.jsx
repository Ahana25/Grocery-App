import { Badge, Button, Link, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useHistory } from 'react-router';
import Login from '../Login/Login'
import {LoginContext} from '../../Context/ContextProvider'
import Profile from '../Header/Profile'
import {useSelector} from 'react-redux'
let useStyles= makeStyles({
    login:
    {
        marginLeft:"660px",
        width:"30px",
        height:"auto",
        fontSize:"12px",
        padding:"5px",
        position:"absolute"

    },
    cart:
    {
       marginLeft:"560px",
       fontSize:"12px",
    //    position:"fixed"
       
    },
    badge:{
        marginBottom:"2px"
    }
})

function Headerbtn() {
    let [open,setOpen]= useState(false)
    let  {account,setAccount}= useContext(LoginContext)
    let {cartItems}= useSelector(state=> state.cart)
    let history=useHistory();


    let openLoginDialog=()=>{
        setOpen(true)
    }
    let moveCart=()=>
    {
        history.push('/cart')
    }
    let classes= useStyles();
    return (
        <div>
        <div>
        {
            account? <Profile account={account} setAccount={setAccount}/> :

            <Link> 
            <Button variant="contained" color="white" className={classes.login} onClick={()=>openLoginDialog()}>Login</Button>
            </Link>
        }
       
            <Button  color="white" className={classes.cart} onClick={moveCart}><Badge badgeContent={cartItems.length} color="secondary" className={classes.badge}>
            <ShoppingCartRoundedIcon/>
</Badge>Cart</Button>
</div>
<Login open={open} setOpen={setOpen} setAccount={setAccount}/>
        </div>
        
    )
}

export default Headerbtn
