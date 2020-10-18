import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/';
import Nav from './components/Nav/';
import Signin from './components/Signin';
import ProtectedRoute from './ProtectedRoute';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      isLoggedIn: false
    }
  }
  handleChange=(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignin = () => {
    const {username, password} = this.state;
    if(username && password){
      this.setState({
        isLoggedIn: true
      },console.log(this.state.isLoggedIn))
    } else {
      console.error("Username and Password is Required");
    }
    console.log("Working");
  }

  render(){
    const {username, password, isLoggedIn} = this.state;
    return (
      <div className="App">
        <BrowserRouter>
        <Nav />
        <Switch>
          {/* <Route exact path='/' component={Home}/> */}
          
          <ProtectedRoute 
          exact = {true}
          path='/'
          isLoggedIn={isLoggedIn}
          component={Home}
          />

          <Route 
          exact 
          path='/signin/' 
          render={ (props) =>{
            return(
              <Signin 
                username ={username}
                password={password}
                isLoggedIn={isLoggedIn}
                handleChange={this.handleChange}
                handleSignin={this.handleSignin}
                {...props}
              />
            );
          }}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
