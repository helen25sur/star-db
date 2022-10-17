import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetail from '../person-details';
import { Component } from 'react';

export default class App extends Component {

  state = {
    selectedPerson: null
  }

  onPersonSelected = (id) => {
    console.log('selected', id);
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    return (
      <div className='App container' >
        <Header />
        <RandomPlanet />
        <ItemList onItemSelected={this.onPersonSelected} />
        <PersonDetail personId={this.state.selectedPerson} />
      </div>
    )

  }
}
