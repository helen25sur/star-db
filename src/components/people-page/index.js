import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetail from '../person-details';
import './people-page.css';


export default class PeoplePage extends Component {

  state = {
    selectedPerson: 3,
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    console.log('selected', id);
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;

    return (
      <React.Fragment>
        <ItemList onItemSelected={this.onPersonSelected} />
        <PersonDetail personId={this.state.selectedPerson} />

      </React.Fragment>
    )
  }
}