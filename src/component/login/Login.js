import React, {useState} from 'react'
import LoginStyles from "./Loginstyle";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {Link} from 'react-router-dom'

const Login = () => {
    const classes = LoginStyles();
    const [login, setLogin] = useState({
    email:'',
    password:''
    })

const handleChange = name=> e =>{
    e.preventDefault()
    setLogin((prevState)=>{
        return{
            ...prevState,
            [name]:e.target.value
        }
        
    })

}

const submithandler = () =>{
console.log(login)
}

    return (
        <>
         <div className={classes.root}>
         <form className={classes.form} autoComplete="off">
            <h2>Login</h2>
           <TextField 
            className={classes.textbox}
            id="standard-basic"
            label="Email"
            onChange={handleChange("email")}
            name="email"
            value={Login.email}
           />

           <TextField
           className={classes.textbox}
           id="standard-basic"
           label="Password"
           onChange={handleChange('password')}
           name="password"
           value={Login.password}
           />

           <Button onClick={submithandler}
              className={classes.button}
              variant="contained"
              color="primary"
           >
               Submit
           </Button>
           <br />
          <h3 className={classes.login}>
            Need to create account <Link to="/">Sign up</Link>
            </h3>
         </form>

         </div>  
        </>
    )
}
export default Login;