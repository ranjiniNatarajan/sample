import React, { Component } from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import ReactTinyLinkComponent from './ReactTinyLinkComponent';
import GoogleMap from './GoogleMap';
import ApiCall from './ApiCall';
import TextEditor from './TextEditor';
import Login from "./Login";

class Router extends Component {
    render() {
        return (
           
//             <div>

// <h1>Simple SPA</h1>
//           <ul className="header">
//             <li><a href="/">Home</a></li>
//             <li><a href="/stuff">Stuff</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//           <div className="content">
             
//           </div>
//           </div>
<HashRouter>
          <div>
              
                 <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/ApiCall">List</NavLink></li>
            <li><NavLink to="/ReactTinyLinkComponent">LinkView</NavLink></li>
            <li><NavLink to="/GoogleMap">Map</NavLink></li>
            <li><NavLink to="/TextEditor">TextEditor</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/login" component={Login} />
          <Route exact path="/ApiCall" component={ApiCall}/>
            <Route path="/ReactTinyLinkComponent" component={ReactTinyLinkComponent}/>
            <Route path="/GoogleMap" component={GoogleMap}/>
            <Route path="/TextEditor" component={TextEditor}/>
             
          </div>
         
            </div>
            </HashRouter>
        )
    }
}

export default Router
