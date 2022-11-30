import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './random-planet.css';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  }

  componentDidMount() {
    this.updatePlanet();
    const { updateInterval } = this.props;
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  swapiService = new SwapiService();

  state = {
    planet: { id: 2 },
    loading: true
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet: planet,
      loading: false,
      isError: false
    })
  }

  onError = (err) => {
    this.setState({
      isError: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, isError } = this.state;

    const hasData = !(loading || isError);

    const errorMessage = isError ? <ErrorIndicator /> : null;
    const loader = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className='random-planet'>
        <div className="card border-dark mb-3 random-planet-card">
          {errorMessage}
          {loader}
          {content}
        </div>
      </div>
    )
  }
}

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number
}

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <div className='random-planet-img'>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img" alt="planet"></img>
      </div>
      <div className='card-container'>
        <div className="card-header">
          <h2 className="card-title">{name}</h2>

        </div>
        <div className="card-body">
          <ul className="list-group random-planet-list">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}