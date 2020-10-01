import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Weather from "./Weather"
import Timer from "./Timer"
import Stuff from "./Stuff";
import Contact from "./Contact";
import Game from "./Game/Game";
import TableForm from "./TableForm/TableForm";
import "bootswatch/dist/lux/bootstrap.css";

document.title = "Портфолио";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div class="bg">
          <h1>Портфолио</h1>
          <ul className="header">
           <li><NavLink exact to="/">Знакомство</NavLink></li>
           <li><NavLink to="/weather">Погода</NavLink></li>
           <li><NavLink to="/timer">Таймер</NavLink></li>
           <li><NavLink to="/game">Игра</NavLink></li>
           <li><NavLink to="/table">Таблица</NavLink></li>
           <li><NavLink to="/stuff">Знания</NavLink></li>
           <li><NavLink to="/contact">Контакты</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/weather" component={Weather}/>
            <Route path="/timer" component={Timer}/>
            <Route path="/game" component={Game}/>            
            <Route path="/table" component={TableForm}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;