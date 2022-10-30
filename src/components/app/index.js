import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetail, { Record } from '../item-details';
import Container from '../container';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import ItemList from '../item-list';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: 3
  }

  render() {

    const { getPerson, getAllPeople, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

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

    const list = (
      <ItemList
        onItemSelected={(id) => console.log('Selected:', id)}
        getData={getAllPeople}>
        {(i) => {
          return (
            <span>{i.name} ({i.birthYear})</span>
          )
        }}
      </ItemList>)
    return (
      <ErrorBoundry>
        <div className='App container' >
          <Header />
          <Container
            first={<RandomPlanet />}
            second={list}
            third={detailPerson}
          />
        </div>
      </ErrorBoundry>
    )

  }
}
