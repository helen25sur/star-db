import './app.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <Router>
          <SwapiServiceProvider value={this.swapiService}>
            <div className='App container' >
              <Header />

              <RandomPlanet />

              <Routes>
                <Route path="/star-db/people" element={<PeoplePage />} />
                <Route path="/star-db/planet" element={<PlanetPage />} />
                
                <Route path="/star-db/starships" element={<StarshipPage />} />
              </Routes>

            </div>
          </SwapiServiceProvider>
        </Router>
      </ErrorBoundry >
    )
  }
}
