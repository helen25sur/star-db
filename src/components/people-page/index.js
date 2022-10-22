import React, { Component } from 'react';
// import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetail from '../person-details';
import './people-page.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  }

  onPersonSelected = (id) => {
    console.log('selected', id);
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    return (
      <React.Fragment>
        <ItemList
          getData={this.swapiService.getAllPeople}
          onItemSelected={this.onPersonSelected}>
          {(i) => {
            return (
              <span>{i.name} ({i.birthYear})</span>
            )
          }}
        </ItemList>
        <ErrorBoundry>
          <PersonDetail personId={this.state.selectedPerson} />
        </ErrorBoundry>

      </React.Fragment>
    )
  }
}