import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import $ from 'jquery';
import ReactTinyLinkComponent from './components/ReactTinyLinkComponent';
import GoogleMap from './components/GoogleMap';
import ApiCall from './components/ApiCall';
import Router from './components/Router';
import Login from './components/Login';


class App extends Component {
 
  render(){
    
  return (
    <div className="App">
     {/* <ApiCall />
   <ReactTinyLinkComponent />
   <GoogleMap /> */}
  
     <Login /> 
    {/* <Router /> */}
      
      {/* <NameList />  */}
      {/* <UserGreeting /> */}
   {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
     {/* <Message />
      <Greet name = "max">
       <p>checking..</p>
     </Greet>
     <Welcome  name = "max"></Welcome> */}
    </div>
  );
}
}

export default App;
