import React, { useState } from 'react'
import {Button,ButtonGroup,makeStyles} from '@material-ui/core'


let useStyles= makeStyles({
    component:{
        marginTop:"10px"
    },
    button:{
        borderRadius:"30%"    }
})

function GroupButton() {
    let [counter,setCounter]= useState(1);

    let handleIncrement=()=>{
        setCounter(counter=>counter+1)
    }

    let handleDecrement=()=>{
        setCounter(counter=>counter-1)
    }
    let classes= useStyles();
    return (
        <div>
            <ButtonGroup className={classes.component}>
                <Button className={classes.button} onClick={()=>handleDecrement()} disabled={counter===1}>-</Button>
                <Button>{counter}</Button>
                <Button className={classes.button} onClick={()=>handleIncrement()}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default GroupButton
