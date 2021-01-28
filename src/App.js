import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (

    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/explore' component={Explore} />
      <Route exact path='/messages' component={Messages} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />

    </Router>
  );
}

export default App;
