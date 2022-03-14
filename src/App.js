import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { Home } from './pages'
import { Header, Footer } from './layout'

const App = () => {
return(
<>
  <Header />
  <Switch>
    <Route exact path='/'><Home /></Route>
    {/* <Route path='/'>< /></Route> */}
  </Switch>
  <Footer />
</>
)};

export default App;
