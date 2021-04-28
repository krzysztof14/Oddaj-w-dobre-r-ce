import React from 'react';
import Home from './components/Home';
import { HomeLogin } from './components/Login'
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={HomeLogin} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
