import { Typography,makeStyles } from '@material-ui/core'
import { Menu } from '@mui/material'
import React, { useState } from 'react'
import { MenuItem } from 'semantic-ui-react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';


let useStyles=makeStyles({
    name:{
        marginTop:"10px",
        float:"right",
        marginLeft:"500px"
    },
    power:{
        width:"5px"
    },
    text:{
        fontSize:"15px",
        margin:"10px"
    },
    menu:{
        height:"120px"
    }
})
function Profile({account,setAccount}) {
    let [open,setOpen]= useState(false)

    let handleClose=()=>{
        setOpen(false)
    }
    let handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    let classes= useStyles()
    return (
        <div>
            <>
            <Link><Typography className={classes.name} onClick={handleClick}>{account} </Typography></Link>
            <Menu 
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose();}} className={classes.menu}>
           <PowerSettingsNewIcon fontSize="small" style={{marginLeft:20}}/> <Typography className={classes.text}>Logout</Typography>
            
        </MenuItem>
      </Menu>
            </>
        </div>
    )
}

export default Profile
