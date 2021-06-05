import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../context/authContext";
import { useHistory, Link } from "react-router-dom";
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
    height: "290px",
    flexDirection: "column",
    margin: "3rem",
    padding: "3rem 2rem 1rem 2rem",
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
const Forgetpassword = (props) => {
  const classes = useStyles();
  const [error, setError] = useState("");
 const [message,setMessage]=useState('')
  const { forgetPassword } = useAuth();
  const history = useHistory();

  const [Nemail, setEmail] = useState({
    email:''
  });

  const onChangePasshandler = name=> e =>{
    e.preventDefault()
    // setEmail({
    //     ...Nemail,
    //     [name]: e.target.value
    // })

    setEmail((prevState)=>{
      return {
         ...prevState,
        [name]: e.target.value
      }
    })
  };

  const updatehandler = async (event) => {
    event.preventDefault()
    try {
    console.log(Nemail.email)
      await forgetPassword(Nemail.email);
      setMessage("Please Check your email")

    } catch {
      setError("Failed To Logout");
    }
  };

//   const valuedata = props.location.state?.email;
//   console.log("email sttt", valuedata);
  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}
      <div className={classes.root}>
        <div className={classes.form}>
          {/* <p><strong>Email: </strong>{currentUser?.email}</p> */}
          <TextField
            id="standard-basic"
            label="Your Email"
            name="email"
            value={Nemail.email}
            onChange={onChangePasshandler('email')}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={updatehandler}
          >
            SAVE PASSWORD
          </Button>
          <Link to="/login">Back to login</Link>
        </div>
      </div>
    </>
  );
};

export default Forgetpassword;
