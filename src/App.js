import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './component/sign up/Signup';
import Login from './component/login/Login';
import {AuthProvider} from './context/authContext';
import Dashboard from "./component/Dashboard"
import PrivateRoute from "./component/PrivateRoute"
import Forgetpassword from "./component/Forgetpassword"
function App() {
  return (
    <>
<Router>
<AuthProvider>
  <Switch>
    <PrivateRoute exact path="/" component={Dashboard} />
    <Route path="/signup" component={Signup}/>
    <Route  path="/login" component={Login}/>
    <Route  path="/forgetpassword" component={Forgetpassword}/>
  </Switch>
  </AuthProvider>
</Router>   
   
    
    </>
    
  );
}

export default App;
