import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetail, { Record } from '../item-details';
import Container from '../container';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: 3
  }

  render() {

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const random = (<RandomPlanet />);
    const detailPerson = (
      <ItemDetail
        getData={getPerson}
        getImageUrl={getPersonImage}
        itemId={11} >
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth year" />
        <Record field="eyeColor" label="Eye color" />
      </ItemDetail>
    );

    const detailStarship = (
      <ItemDetail
        getData={getStarship}
        getImageUrl={getStarshipImage}
        itemId={5}>
        <Record field="model" label="Model" />
        <Record field="costInCredits" label="Cost" />
        <Record field="length" label="Length" />
      </ItemDetail>

    );
    return (
      <ErrorBoundry>
        <div className='App container' >
          <Header />
          <Container
            first={random}
            second={detailPerson}
            third={detailStarship}
          />
        </div>
      </ErrorBoundry>
    )

  }
}
