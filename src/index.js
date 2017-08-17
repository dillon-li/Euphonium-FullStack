import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Homepage from './Homepage';
import Display from './components/Display'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Homepage} />
      <Route path='/display' component={Display} />
    </div>
  </Router>
  ,
  document.getElementById('root')
);
registerServiceWorker();
