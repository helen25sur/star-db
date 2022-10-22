import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';

import { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

export default class App extends Component {

  state = {

    hasError: false
  }

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({ hasError: true });
  }



  render() {
    if (this.state.hasError) return <ErrorIndicator />;

    return (
      <div className='App container' >
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />

      </div>
    )

  }
}
