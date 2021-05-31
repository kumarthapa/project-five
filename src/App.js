import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './component/sign up/Signup';
import Login from './component/login/Login';
import {AuthProvider} from './context/authContext';

function App() {
  return (
    <>
<Router>
<AuthProvider>
  <Switch>
    <Route  exact path="/" component={Signup}/>
    <Route  path="/login" component={Login}/>
  </Switch>
  </AuthProvider>
</Router>   
   
    
    </>
    
  );
}

export default App;
