import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';

import Index from './pages/Index';
import Client from './pages/Client';

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ Index } ></Route>
      <Route exact path="/client" component={ Client } ></Route>
    </div>
  </BrowserRouter>,
  app);
