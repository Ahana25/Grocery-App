import { Dialog, DialogContent,makeStyles,Box, Typography, TextField, FormGroup, InputLabel, FormControl,Button,Input, Link } from '@material-ui/core'
// import { display, height } from '@mui/system';
import React, { useState } from 'react'
import { authenticateUser,authenticateLogin } from '../../service/Api'
// import { Button, Input } from 'semantic-ui-react';

let useStyles= makeStyles({
    component:{
     width:"50vw",
     height:"80vh"
    },
    text:{
       textAlign:"center",
       fontFamily:"cursive",
       fontSize:"25px",
       color:"Blue"
    },
    box:{
        display:"flex",
        flexDirection:"row",
        marginLeft:"160px",
        marginTop:"10px"
    },
    form:{
        width:"270px",
        marginTop:"30px"
    },
    btn1:{
        margin:"30px",
        marginLeft:"100px"
    },
    btn2:{
        marginLeft:"90px",
        margin:"30px"
    },
    typo:{
        margin:"30px"
    },
    type:{
        textAlign:"center"
    },
    btn3:{
        marginLeft:"70px",
        marginTop:"30px"
    },
    txt:{
        marginTop:"20px"
    },
    error:{
        fontSize:10,
        color:"#ff6161"
    }
})

function Login({open,setOpen,setAccount}) {
    let [signUp,setSignUp]= useState({
        firstname:"",
        lastname:"",
        email:"",
        username:"",
        password:"",
        phone:""
    })
let [login,setLogin]= useState({
    username:"",
    password:""
})
    let registerUser=async()=>{
      let res= await authenticateUser(signUp);
      if(!res) return;
      closeDialog();
      setAccount(signUp.username)
    }

    let initialValue={
        login:{
            view:"login",
            heading:"Login"
        },
        signup:{
            view:"signup",
            heading:"Register"
        }
    }
    let [account,setNewAccount]= useState(initialValue.login)
    let [error,setError]= useState(false)
    let classes= useStyles();
    let closeDialog=()=>{
        setOpen(false)
        setNewAccount(initialValue.login)

    }

    let toggleAccount=()=>{
        setNewAccount(initialValue.signup)
    }

    let updateVal=(event)=>{
      setSignUp({...signUp,[event.target.name]:event.target.value})
      console.log(signUp)
    }
    let updateLogin=(event)=>{
setLogin({...login,[event.target.name]:event.target.value})
    }

    let loginUser=async()=>{
  let response= await authenticateLogin(login)
  if(!response) {
  setError(true);
  return
  }
  closeDialog();
  setAccount(login.username)
    }
    return (
        <div>
            <Dialog open={open} onClose={closeDialog}>
                <DialogContent className={classes.component}>
                <Typography className={classes.text}>{account.heading}</Typography>
                    <Box className={classes.box}>
                    {
                        account.view==='login'?
                    
                    <Box className={classes.boxval}>
                        <FormGroup className={classes.form}>
                        <FormControl>
                      <InputLabel htmlFor="my-input">Username</InputLabel>
                     <Input id="my-input" placeholder="Enter username" name="username" value={login.username} onChange={updateLogin} />
                    </FormControl>
                   <FormControl>
                  <InputLabel htmlFor="my-input">Password</InputLabel>
                 <Input id="my-input" name="password" type="password" value={login.password} onChange={updateLogin}/>
</FormControl>
{error && <Typography className={classes.error}>Invalid Username or password</Typography>}
</FormGroup>
<Button variant="contained" color="primary" className={classes.btn1} onClick={()=>{loginUser()}}>Login</Button>
<Typography className={classes.type}>OR</Typography>
<Button variant="contained" color="secondary" size="small" className={classes.btn2}>Request OTP</Button>

<Link><Typography className={classes.typo} onClick={()=>toggleAccount()}>
    New User?
    <a>Register Today!</a>
</Typography></Link>

                        </Box>: 
                        <Box>
                    <FormGroup>
                    <FormControl>
  <InputLabel htmlFor="my-input">First Name</InputLabel>
  <Input id="my-input" name="firstname" value={signUp.firstname} onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Last Name</InputLabel>
  <Input id="my-input" name="lastname" onChange={updateVal} value={signUp.lastname} />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" name="email" value={signUp.email}  onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Username</InputLabel>
  <Input id="my-input" name="username" value={signUp.username} onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input id="my-input" name="password" onChange={updateVal} value={signUp.password} type="password"/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Phone Number</InputLabel>
  <Input id="my-input" name="phone" onChange={updateVal} value={signUp.phone}/>
</FormControl>
                    </FormGroup>
                    <Button variant="contained" color="secondary" className={classes.btn3} onClick={()=>registerUser()}>Register Now</Button>
                    <Typography className={classes.txt}>
                        Already a registered user?
                        <a >Login Now</a>
                    </Typography>
                        </Box>
                    }
                   </Box>
                </DialogContent>
            </Dialog>
        </div>
    ) 
}

export default Login
