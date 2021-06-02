import { makeStyles } from "@material-ui/core";

const signupStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(52),
      height: theme.spacing(55),
    },
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: "2rem",
    [theme.breakpoints.down("sm")]: {
        margin: "2rem 0",
      },
  },
  form: {
    display: "flex",
    width: "30%",
    flexDirection: "column",
    margin: "3rem",
    padding: "2rem",
    boxSizing: "border-box",
    boxShadow: "1px 1px 6px 1px #ccc",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "1.5rem",
      margin: "1rem",
    },
  },
  textbox: {
    margin: "1rem 0",
  },
  button: {
    display: "flex",
    padding: "0.5rem",
    margin: "1rem 0",
  },
}));

export default signupStyles;
