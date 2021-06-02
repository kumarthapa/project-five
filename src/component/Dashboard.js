import React,{useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import {useAuth} from '../context/authContext'
import {useHistory}  from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(62),
        height: theme.spacing(22),
      },
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2rem",
    },
    form: {
      display: "flex",
      width: "30%",
      flexDirection: "column",
      margin: "3rem",
      padding: "2rem",
  
      boxSizing: "border-box",
      boxShadow: "1px 1px 6px 1px #ccc",
    },
    TextField: {
      margin: "1rem",
    },
    button: {
      padding: "0.5rem",
      margin: "1rem",
    },
    login: {
      color: "blue",
      "&:hover": {
        cursor: "pointer",
      },
    },
  }));
const Dashboard = () => {
    const classes = useStyles();
    const [error,setError]=useState("");
    const {currentUser,logout}=useAuth();
   const history=useHistory()
    const handleLogout=async()=>{
   setError(' ');
   try{
  await logout();
  history.push("/login")
   }catch{
       setError('Failed To Logout')
   }
    }
    return (
        <>
        {error && <Alert severity="error">{error}</Alert>}
        
        <div className={classes.root}>
           <div className={classes.form}>
               <p><strong>Email: </strong>{currentUser?.email}</p>
               <Button className={classes.button} variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
               </div>
           
     
       </div>  
        
        </>
    )
}

export default Dashboard
