import React from 'react';
import './App.css';
import Header from './Components/header';
import Events from './views/events';
import Schedule from './views/schedule';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' render={() => <Schedule />} />
      <Route exact path='/events' render={() => <Events />} />
      </Switch>
    </div>
  );
}

export default App;
