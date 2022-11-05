import React from 'react'
import {bannerData} from '../Constants/data'
import Carousel from 'react-material-ui-carousel'
import { makeStyles, Typography } from '@material-ui/core'

let useStyles= makeStyles({
    image:{
        width:"200px",
        boxShadow:"2px 2px 20px black",
        marginLeft:"60px"
    },
    carousel:{
        marginTop:"5px",
        height:"auto"
    },
    text:{
        fontFamily:"cursive",
        marginTop:"5px",
        // marginLeft:"500px"
        textAlign:"center"
    }
})

function Banner() {
    let classes= useStyles();
    return (
        <div>
           {
            <Carousel className={classes.carousel} autoPlay={true} animation="slide" navButtonsAlwaysVisible={true} cycleNavigation={true}>
            {
                bannerData.map( (item) => {return(<><img src={item.url} alt={item.alt} className={classes.image}/>
                <Typography className={classes.text}>{item.text}</Typography></>
                )
                } )
            }
        </Carousel>
           }
        </div>
    )
}

export default Banner
