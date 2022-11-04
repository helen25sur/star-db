import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

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
                <Route path="/" element={<PeoplePage />} />
                <Route path="/planet" element={<PlanetPage />} />

                <Route path="/starships" element={<StarshipPage />} />
              </Routes>

            </div>
          </SwapiServiceProvider>
        </Router>
      </ErrorBoundry >
    )
  }
}
