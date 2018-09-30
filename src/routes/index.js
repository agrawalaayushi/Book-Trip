import React from 'react';
import {
  BrowserRouter, Route, Switch
 } from 'react-router-dom';
 import '../styles/app.css';
 import Home from '../components/Home/home';

export default () => (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props}/>} />
      <Route path="/flights" exact render={props => <Home {...props}/>} />
      {/* <Route exact path="/:movieImdbId" render={(props)=> <MovieDetailPage {...props}/>} />
      <Route exact path="/:searchKeyword" render={(props)=> <Home {...props}/>} /> */} */}
    </Switch>
   </BrowserRouter>
 )