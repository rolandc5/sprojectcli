import React, { Component } from 'react';
import './Global.css';
import { Route } from 'react-router-dom';

import * as Pages from './index';

export default class Main extends Component {
   render() {
     return (
       <div>
        <Pages.Menu/>
        <Route exact path='/' component={ Pages.Projects }/>
        <Route exact path='/project' component={ Pages.DisplayProject }/>
        <Route excat path='/create' component={ Pages.Create }/>
       </div>
     )
   }
}

///
