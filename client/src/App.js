import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import OurOfficers from './components/pages/OurOfficers';
import Events from './components/pages/Events';
import Points from './components/pages/Points';
import JoinUs from './components/pages/JoinUs';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/our-officers' component={OurOfficers} />
        <Route path='/events' component={Events} />
        <Route path='/points' component={Points} />
        <Route path='/join-us' component={JoinUs} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Router>
    </>
  );
}

export default App;