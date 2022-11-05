import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { getGrocery } from '../../service/Api';
import {makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

let useStyles= makeStyles({
    card:{
        margin:"25px",
        padding:"10px",
        display:"inline-flex",
        boxShadow:"2px 4px 6px white"
    },
    title:
    {
        fontSize:"13px"
    },
    head:{
      fontFamily:"cursive",
      textAlign:"center",
      fontSize:"15px",
      color:"green",
      
    }
})



function Items() {
    let classes= useStyles();
    let [items,setItems]= useState([])

let getGroceryData=async()=>
{
    let res= await getGrocery();
    console.log(res)
    setItems(res.data)

}
useEffect(()=>
{
    getGroceryData();
})
    return (
        <div>
            <Typography className={classes.head}>View All Items</Typography>
           {items.map((list)=>{
               return(
            <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={list.url}
        //   alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div" className={classes.title}>
            Product:{list.title.shortTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
        In stock:{list.quantAvail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
                 <Link to={`/product/${list.id}`}>
        <Button size="small" color="primary" variant="contained">
          Buy Now
        </Button>
    </Link>
      </CardActions>
    </Card>
               )
           })}
        </div>
    )
}

export default Items
