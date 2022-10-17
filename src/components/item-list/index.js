import { Component } from 'react';
import './item-list.css';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader';

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null,
    loading: false
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList: peopleList,
          loading: true
        });
        console.log(this.state);
      })
  }

  renderItems = (arr) => {
    return arr.map(({ id, name, birthYear }) => {
      return (
        <li key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}>
          <span className='name'>{name} </span>
          <span className='details'>({birthYear})</span>
        </li>
      )
    })
  }

  render() {
    const { peopleList, loading } = this.state;

    const content = !loading ? <Loader /> : this.renderItems(peopleList);

    return (
      <ul className="list-group item-list-component">
        {content}
      </ul>
    )
  }
}
