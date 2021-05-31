import { makeStyles } from "@material-ui/core";

const LoginStyles = makeStyles((theme) => ({
root: {
    // display: 'flex',
    // margin:'50px auto',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: '20px',

    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(52),
      height: theme.spacing(52),
    },
    justifyContent: 'center',
    alignItems: 'center',


},
form: {
    // padding: 50,
    // boxShadow:'1px 1px 6px 1px #ccc'
    display: "flex",
    width: "30%",
    flexDirection: "column",
    margin: "3rem",
    padding: "2rem",
    boxSizing: "border-box",
    boxShadow: "1px 1px 6px 1px #ccc",
},

textbox : {
    // display: 'flex',
    // flexDirection: 'columns',
    // margin: '20px 0'
  
        margin: "1rem",
      
},
button: {
    // margin: '20px 0',
    // width:'100%'
    padding: "0.5rem",
    margin: "1rem",
}

}));

export default LoginStyles;
