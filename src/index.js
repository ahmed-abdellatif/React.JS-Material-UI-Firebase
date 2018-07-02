import React from 'react';
import ReactDOM from 'react-dom';
import Index from './view/index';
import Home from './view/Home/home';
import About from './view/About/about';
import Topics from './view/Topics/topics';
import Register from './view/Register/register';
import Login from './view/Login/login';
import { BrowserRouter } from 'react-router-dom'



import 'typeface-roboto';

import {BrowserRouter as Router, Route, Switch, Redirect,
  //Link
} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Index />
      <Redirect to="/home" />
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>

   </Switch>
    </div>
  </BrowserRouter>,document.querySelector('#root'));
