import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Container from '../container';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sdb-components';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: 3
  }

  render() {

    return (
      <ErrorBoundry>
        <div className='App container' >
          <Header />

          <Container
            first={<RandomPlanet />}
            second={<PersonList />}
            third={<PersonDetails itemId={4} />} />

          <Container
            first={<StarshipDetails itemId={9} />}
            second={<PlanetList />}
            third={<StarshipList />} />

        </div>
      </ErrorBoundry>
    )
  }
}
