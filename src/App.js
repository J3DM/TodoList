import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import MainComponent from "./components/MainComponent"


class App extends React.Component {
  constructor(){
    super()
    this.state={
      newTask:"",
      user:"",
      items:[{key:1,name:"uno",compleated:false},{key:2,name:"dos",compleated:true}],
      modalItem:{
          key:0,name:"",compleated:false
      }
    }
    this.handlerLogin=this.handlerLogin.bind(this)
    this.handlerLogout=this.handlerLogout.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)
  }

  handlerLogin(event){
    console.log("Login!")
  }

  handlerLogout(event){
    console.log("Logout!")
  }

  handleInputChange(event){
    this.setState({
        [event.target.name]:event.target.value        
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar 
          handlerLogin={this.handlerLogin} 
          handlerLogout={this.handlerLogout}/>
        <MainComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
