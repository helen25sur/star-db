import { Component } from 'react';

import './person-details.css';

export default class PersonDetail extends Component {


  render() {
    return (
      <div className='person-detail'>
        <div className="card border-dark mb-3 person-detail-card">
          <div className='person-detail-img'>
            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img" alt="person"></img>
          </div>
          <div className='card-container'>
            <div className="card-header">
              <h2 className="card-title">Luke Skywalker</h2>

            </div>
            <div className="card-body">
              <ul className="list-group person-detail-list">
                <li className="list-group-item">
                  Gender: <span className='gender'>male</span>
                </li>
                <li className="list-group-item">
                  Birth year: <span className='b-year'>19BBY</span>
                </li>
                <li className="list-group-item">
                  Eye color: <span className='eye'>blue</span>
                </li>

              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  }
}