import React from 'react'
import { Route, Switch } from 'react-router-dom';
export default (
  <Switch> 
    <Route exact path='/' />
    <Route exact path='/about' />
    <Route exact path='/skills' />
    <Route exact path='/projects' />
    <Route exact path='/404' />
  </Switch>
)