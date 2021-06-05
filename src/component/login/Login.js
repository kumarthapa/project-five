import React, {useState} from 'react'
import LoginStyles from "./Loginstyle";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Alert } from "@material-ui/lab";
import {useAuth} from "../../context/authContext"
import {Link, useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const {login} = useAuth()
    const classes = LoginStyles();
    const [loginData, setLoginData] = useState({
    email:'',
    password:''
    })
const [error,setError]=useState("")
const handleChange = name=> e =>{
    e.preventDefault()
    setLoginData((prevState)=>{
        return{
            ...prevState,
            [name]:e.target.value
        }
        
    })

}

const submithandler = async (event) =>{
event.preventDefault()

try{
    if(loginData.email == ''||loginData.password==''){
        setError('please fill all the fields!')
        }else{
            await login(loginData.email, loginData.password)
            setError('')
            history.push("/")
        }
}catch{ 
return setError('Failed to login')
}
}
const forgetPassword = () =>{
    history.push("/forgetpassword")
}  
    return (
        <>
        {error&& <Alert severity="error">{error}</Alert>}
         <div className={classes.root}>
         <form className={classes.form} autoComplete="off">
            <h2>Login</h2>
           <TextField 
            className={classes.textbox}
            id="standard-basic"
            label="Email"
            onChange={handleChange("email")}
            name="email"
            value={loginData.email}
           />

           <TextField
           className={classes.textbox}
           id="standard-basic"
           label="Password"
           onChange={handleChange('password')}
           name="password"
           value={loginData.password}
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
            Need to create account <Link to="/signup">Sign up</Link>
            <br/>
            <Link onClick={forgetPassword} >Forget Password</Link>
            </h3>
         </form>

         </div>  
        </>
    )
}
export default Login