import { Box } from '@mui/system'
import React from 'react'
import Banner from './Banner'
import { makeStyles, Typography } from '@material-ui/core'
import Filter from '../Header/Filter'
import Items from './Items'

let useStyles= makeStyles(
    {
        image:{
            padding:"10px",
            background:"#F2F2F2",
            marginTop:"20px"
        },
        heading:{
            fontSize:"50px",
            color:"yellow",
            fontWeight:"bold",
            fontFamily:"cursive",
            textAlign:"center",
            textShadow:"2px 5px 4px blue"
        }
    }
)
function Home() {
    let classes= useStyles();
    return (
        <div style={{backgroundColor:"#0d233a"}}>
        <Typography className={classes.heading}>ABC Grocery Store</Typography>
        <Box className={classes.image}>
        <Banner/>
        </Box>
            <Filter/>
            <Items/>
        </div>
    )
}

export default Home
