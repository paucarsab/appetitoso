import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import Homepage from './components/pages/dishList/Homepage'
import NavBar from './components/ui/NavBar'

import Signup from './components/pages/auth/signup/Signup'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/auth/login/Login'

import AuthServices from './services/auth.services'
import DishList from './components/pages/dishList/DishList';
import DishDetails from './components/pages/dishDetails/DishDetails';
import DishSearch from './components/pages/dishList/DishSearch';

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.services = new AuthServices()
  }


  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()


  setTheUser = userObj => this.setState({ loggedInUser: userObj })
  fetchUser = () => {
    this.services.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }


  render() {

    return (
      <>
        <NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <Switch>
          <Route exact path="/" render={() => <Homepage loggedInUser={this.state.loggedInUser} />} />
          <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
          <Route exact path="/dishes/all" render={() => <DishList loggedInUser={this.state.loggedInUser} />} />
          <Route path="/dishes/search/:dish" render={(match) => <DishSearch {...match} loggedInUser={this.state.loggedInUser} />} />
          <Route path="/dishes/:id" render={props => <DishDetails {...props} />} />
        </Switch>
      </>
    )
  }
}


export default App