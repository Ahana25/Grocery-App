import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import SearchBar from './SearchBar'
import Headerbtn from './Headerbtn'

let useStyles= makeStyles(
    {
        head:
        {
            backgroundColor:"deepblue",
            height:"60px"
        }
    }
)

function Header() {
    let classes= useStyles();
    return (
        <div>
<AppBar position="static" className={classes.head}>
        <Toolbar>
        <SearchBar/>
        <Headerbtn/>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Header
