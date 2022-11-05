import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Button } from 'semantic-ui-react';
import {carouselData} from '../Constants/data'
import Carousel from 'react-material-ui-carousel';


let useStyles= makeStyles({
    box:{
        float:"left",
        boxShadow:"2px 3px 10px black",
        background:"#F2F2F2",
        marginTop:"15px",
        textAlign:"center",
        padding:"2px",
        textDecoration:"none",
        display:"flex",
        flexDirection:"row",
        margin:"10px",
        height:"40px"
        
    },
    list:
    {
        padding:"8px",
        fontFamily:"cursive",
        textDecoration:"none",
        listStyleType:"none",
    },
    btn:{
        backgroundColor:"lightgrey",
        padding:"5px",
        border:"1px solid black",
        borderRadius:"10px", 
        width:"70px",
    },
    carousel:{
        marginTop:"10px",
        width:"1200px",
        marginLeft:"10px"
    }
    
})

function Filter() {
    let classes= useStyles();
    return (
        <div>
            <Box className={classes.box} >
            {
                <Carousel className={classes.carousel} indicators={false} navButtonsAlwaysInvisible={false}>
            {
                carouselData.map( (item) => {return(
                    <Button variant="contained">
                        <a href={item.url}>{item.title}</a>
                    </Button>
                )
                } )
            }
        </Carousel>
                
                /* <Carousel className={classes.carousel} indicators={false} navButtonsAlwaysInvisible={true}>
            {
                carouselData.map( (item) => {return(
                    <Button variant="contained">
                        <a href={item.url}>{item.title}</a>
                    </Button>
                )
                } )
            }
        </Carousel> */}
            </Box>
        </div>
    )
}

export default Filter
