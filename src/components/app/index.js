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

    const personList = (
      <PersonList
        onItemSelected={(id) => console.log('Selected:', id)}>
        {({ name, birthYear }) => <span>{name} ({birthYear})</span>}
      </PersonList>);
    const planetList = (<PlanetList>
      {({ name }) => <span>{name}</span>}
    </PlanetList>);
    const starshipList = (<StarshipList>
      {({ name }) => <span>{name}</span>}
    </StarshipList>);

    return (
      <ErrorBoundry>
        <div className='App container' >
          <Header />

          <Container
            first={<RandomPlanet />}
            second={personList}
            third={<PersonDetails itemId={4} />} />

          <Container
            first={<StarshipDetails itemId={9} />}
            second={planetList}
            third={starshipList} />

        </div>
      </ErrorBoundry>
    )

  }
}
