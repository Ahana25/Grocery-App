import React from 'react'
import { Card ,makeStyles, Typography,Box,Button} from '@material-ui/core'
import GroupButton from './GroupButton'

let useStyles= makeStyles({
    component:{
     display:"flex",
     borderRadius:"0",
     borderTop:"1px solid #f0f0f0"
    },
    leftcomponent:{
        margin:"20px",

    },
    rightcomponent:{
   marginTop:"20px"
    },
    greycolor:{
        color:"#878787"
    },
    price:{
        fontSize:"18px",
        fontWeight:"600"
    },
    image:{
        height:110,
        width:110
    },
    remove:{
        marginTop:"20px",
        color:"white",
        background:"red",
        margin:"2px"
    }
})
function CartItem({item,removeItemFromCart}) {
    let classes= useStyles()
    return (
        <div>
            <Card className={classes.component}>
      <Box className={classes.leftcomponent}>
    <img src={item.url} alt="Image of the grocery product selected" className={classes.image} />
    <GroupButton/>
      </Box>

       <Box className={classes.rightcomponent}>
       <Typography>{item.title.shortTitle}</Typography>
       <Typography style={{margin:"20px 0"}}>
           <span className={classes.price}>current price: ₹{item.price.cost}</span> &nbsp; &nbsp;&nbsp;
           <span className={classes.greycolor}><strike>Previous price: ₹{item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
           <span style={{color:"#388E3C"}}>Discount: {item.price.discount}</span>

       </Typography>
       <Button variant="contained" className={classes.remove} onClick={()=>removeItemFromCart(item.id)}>Remove</Button>
       </Box>
            </Card>
        </div>
    )
}

export default CartItem
