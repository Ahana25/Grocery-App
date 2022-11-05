import React, { useState } from 'react'
// import { makeStyles } from '@mui/styles';
import { InputBase } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { styled, alpha } from '@mui/material/styles';
// import {products} from '../Constants/data'
// import { Card, CardActions ,Button, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core'

let useStyles= makeStyles({
    search:
    {
        marginLeft:"400px"
    },
    card:{
      margin:"10px",
      display:"inline-flex"
  },
  title:
  {
      fontSize:"13px"
  }
})
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
// backgroundColor:"black",
border:"solid black",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '300px'
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
color:"black",
  fontSize:"13px",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
function SearchBar() {
  let [search,setSearch]= useState('');
    let classes= useStyles();
    let searchData=(event)=>{
  setSearch(event.target.value)
    }
    return (
        <div>
            <Search className={classes.search} >
            <SearchIconWrapper >
              <SearchRoundedIcon/>
            </SearchIconWrapper>
            <StyledInputBase onChange={searchData}
              placeholder="Search grocery items"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
        </div>
    )
}

export default SearchBar
