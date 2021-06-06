import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import AppRoutes from './Component/routes.js';


export default function App() {
  console.log('App', AppRoutes.map(({path, component}) => path));
  return (
    <Router>
      <div>
        <Switch>
          {
            AppRoutes.map(({path, component}) => 
              <Route path={path} component={component} />
            )
          }
        </Switch>
      </div>
    </Router>
  );
}
