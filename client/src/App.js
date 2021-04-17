import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import OurOfficers from './components/pages/OurOfficers';
import Events from './components/pages/Events';
import Points from './components/pages/Points';
import JoinUs from './components/pages/JoinUs';
import SignIn from './components/pages/SignIn';
import {Provider} from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <>
      <Provider store={store}>
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
      </Provider>
      </>
  );
  }
}

export default App;