import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Container from '../container';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';

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

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className='App container' >
            <Header />

            <Container
              first={<RandomPlanet />}
              second={<PersonList onItemSelected={this.onItemSelected} />}
              third={<PersonDetails itemId={this.state.selectedItem} />} />

            <Container
              first={null}
              second={<PlanetList />}
              third={<PlanetDetails itemId={3} />} />

            <Container
              first={null}
              second={<StarshipList />}
              third={<StarshipDetails itemId={9} />} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
