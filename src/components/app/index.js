import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';

import React, { Component } from 'react';
// import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetail from '../person-details';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

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
          <RandomPlanet />
          <PeoplePage />

          <React.Fragment>
            <ItemList
              getData={this.swapiService.getAllPlanets}
            // onItemSelected={this.onPersonSelected} 
            >
              {(i) => {
                return (
                  <span>{i.name} ({i.diameter})</span>
                )
              }}
            </ItemList>
            <PersonDetail />

          </React.Fragment>

          <React.Fragment>
            <ItemList
              getData={this.swapiService.getAllStarships}
            // onItemSelected={this.onPersonSelected} 
            >
              {(i) => {
                return (
                  <span>{i.name} ({i.length})</span>
                )
              }}
            </ItemList>
            <ErrorBoundry>
              <PersonDetail />
            </ErrorBoundry>

          </React.Fragment>

        </div>
      </ErrorBoundry>
    )

  }
}
