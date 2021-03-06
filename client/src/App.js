import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Switch, Route, Redirect } from 'react-router-dom'

import Homepage from './components/pages/Homepage/Homepage'
import NavBar from './components/ui/NavBar'

import Signup from './components/pages/auth/signup/Signup'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/auth/login/Login'

import AuthServices from './services/auth.services'
import DishList from './components/pages/Dish/dishList/DishList';
import DishDetails from './components/pages/Dish/dishDetails/DishDetails';
import DishSearch from './components/pages/Dish/dishList/DishSearch';
import RestDetails from './components/pages/Restaurant/restDetails/RestDetails'
import RestSignup from './components/pages/Restaurant/restNew/RestSignUp'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.services = new AuthServices()
  }


  // componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
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
        <div className="general">
          <Switch>
            <Route exact path="/" render={() => <Homepage loggedInUser={this.state.loggedInUser} />} />
            <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} />
            <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
            <Route path="/profile/:id" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
            <Route exact path="/dishes/all" render={() => <DishList loggedInUser={this.state.loggedInUser} />} />
            <Route exact path="/rest/all" render={() => <DishList loggedInUser={this.state.loggedInUser} />} />
            <Route path="/rest/new" render={() => <RestSignup setTheUser={this.setTheUser} />} />
            <Route path="/dishes/search/:dish" render={(match) => <DishSearch {...match} loggedInUser={this.state.loggedInUser} />} />
            <Route path="/dishes/:id" render={props => <DishDetails loggedInUser={this.state.loggedInUser} {...props} />} />
            <Route path="/rest/:id" render={props => <RestDetails {...props} />} />
          </Switch>
        </div>
      </>
    )
  }
}


export default App