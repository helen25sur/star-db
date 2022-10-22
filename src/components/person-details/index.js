import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader';

export default class PersonDetail extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person: person,
          loading: true
        })
      })
  }

  render() {
    if (!this.state.person) return <span>Select a person from a list!</span>;

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    // const content = this.state.loading ? <Person person={this.state.person} /> : <Loader />
    return (
      <div className='person-detail'>
        <div className="card border-dark mb-3 person-detail-card">
          <div className='person-detail-img'>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img" alt="person"></img>
          </div>
          <div className='card-container'>
            <div className="card-header">
              <h2 className="card-title">{name}</h2>

            </div>
            <div className="card-body">
              <ul className="list-group person-detail-list">
                <li className="list-group-item">
                  Gender: <span className='gender'>{gender}</span>
                </li>
                <li className="list-group-item">
                  Birth year: <span className='b-year'>{birthYear}</span>
                </li>
                <li className="list-group-item">
                  Eye color: <span className='eye'>{eyeColor}</span>
                </li>

              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

// const Person = (props) => {

//   const { id, name, gender, birthYear, eyeColor } = props.person;

//   return (
//     <React.Fragment>
//       <div className='person-detail-img'>
//         <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img" alt="person"></img>
//       </div>
//       <div className='card-container'>
//         <div className="card-header">
//           <h2 className="card-title">{name}</h2>

//         </div>
//         <div className="card-body">
//           <ul className="list-group person-detail-list">
//             <li className="list-group-item">
//               Gender: <span className='gender'>{gender}</span>
//             </li>
//             <li className="list-group-item">
//               Birth year: <span className='b-year'>{birthYear}</span>
//             </li>
//             <li className="list-group-item">
//               Eye color: <span className='eye'>{eyeColor}</span>
//             </li>

//           </ul>
//         </div>

//       </div>
//     </React.Fragment>
//   )
// }