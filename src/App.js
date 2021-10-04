import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Home from './components/Home/Home';
import Nav2 from './components/Nav/Nav';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Agenda from './components/Agenda/Agenda';
import Registration from './components/Registration/Registration';


function App() {
  return(
<>
     <Nav2 />
   
      <Route exact path="/" component={ Home}/>
      <Route exact path="/Agenda" component={ Agenda}/>
      <Route exact path="/Registration" component={ Registration}/>
      
    
      </>
      
  );
}

export default App;
