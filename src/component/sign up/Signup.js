import React, {useState} from 'react'
import signupStyles from "./signupStyle";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Alert } from "@material-ui/lab";
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from "../../context/authContext"    
const Signup = () => {
    const history = useHistory()
    const classes = signupStyles();
    const {signup,currentUser}=useAuth()
    const [signupData, setSignUp] = useState({
    email:'',
    password:''
    })
    const [error,setError]=useState("")

const handleChange = name=> e =>{
    e.preventDefault()
    setSignUp({
        ...signupData,
        [name]: e.target.value
    })

}

const submithandler = async (event) =>{
event.preventDefault();

try{
    if(signupData.email == ''||signupData.password ==''){
        setError('please fill all the fields!')
    }else{
        await signup(signupData.email,signupData.password)
        setError('')
        history.push("/login")
    }

}catch{
return setError("Failed To Signup")
}

}

    return (
        <>
        {error&& <Alert severity="error">{error}</Alert>}
         <div className={classes.root}>
         
         <form className={classes.form} autoComplete="off">
            <h2>Signup</h2>
           <TextField 
            className={classes.textbox}
            id="standard-basic"
            label="Email"
            onChange={handleChange("email")}
            name="email"
            value={signupData.email}
           />

           <TextField
           className={classes.textbox}
           id="standard-basic"
           label="Password"
           onChange={handleChange('password')}
           name="password"
           value={signupData.password}
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

            Already have a account? <Link to="/login">Log In</Link>
            </h3>
         </form>

         </div>  
        </>
    )
}
export default Signup;