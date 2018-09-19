
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Login from './login/login';
import Table  from './table/table';
import Dashboard from './dashboard/dashboard'
import { Route, Switch } from 'react-router-dom'

render((
  <BrowserRouter>
   <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/table' component={Table}/>
  </Switch>
  </BrowserRouter>
), document.getElementById('wind'));

 
