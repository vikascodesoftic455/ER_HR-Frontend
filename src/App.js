// import logo from './logo.svg';
// import React from 'react';
// import {BrowserRouter as Router,Switch,Route,}from "react-router-dom";
// import './App.css';
// import  PublicRoutes from './router/index'
// import AppRoute from './router/route'
// function App() {
//   return (
//       <React.Fragment>
//           <Router>
//              <Switch>
//                  {PublicRoutes.map((route,id)=>{
//                       <Route path={route.path}/>
//                  })}
//              </Switch>
//           </Router>
//       </React.Fragment>
//   );
// }

// export default App;

import React  from "react";
import {BrowserRouter as Router,Switch,Route,}from "react-router-dom";
import './App.css';
import Login from "./Pages/Authentication/login";
import SignUp from "./Pages/Authentication/SignUp";


function App(){
  return(
       <React.Fragment>
            <Router>
                <Switch>
                 <Route path="/">
                    <Login/>
                  </Route>
                  <Route path="/signup">
                       <SignUp/>
                  </Route>
                </Switch> 
            </Router>
       </React.Fragment>
  )
}

export default App