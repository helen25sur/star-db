import { Component } from 'react';
import './random-planet.css';

import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

  constructor() {
    super();

    this.updatePlanet();
  }


  swapiService = new SwapiService();

  state = {
    planet: {}
  }

  onPlanetLoaded = (planet) => {
    console.log(planet);
    this.setState({ planet })
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 19 + 1);
    // console.log(id);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
  }


  render() {
    const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;


    return (
      <div className='random-planet'>
        <div className="card border-dark mb-3 random-planet-card">
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
        </div>
      </div>
    )
  }
}