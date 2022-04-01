import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage } from '../pages';
import { PlanetPage, StarshipPage } from '../pages';
import { Provider } from '../swapi-context';
import SwapiService from '../../services/swapi-service';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './app.css';

const swapi = new SwapiService();

const App = () => {

  return (
    <div>
      <Provider value={swapi}>
        
        <Router>
          <Header />
          <RandomPlanet />

          <Route path='/' exact={true} render={() => <h1>Hello, my dear friend</h1>}/>
          <Route path='/people/' component={PeoplePage}/>
          <Route path='/planets/' component={PlanetPage}/>
          <Route path='/starships/' component={StarshipPage}/>
          
        </Router>
      </Provider>

    </div>
  );
};

export default App;
