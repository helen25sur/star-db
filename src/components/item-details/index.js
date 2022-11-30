import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: <span className='term'>{item[field]}</span>
    </li>
  )
}

export default class ItemDetail extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;

    getData(itemId)
      .then((item) => {
        this.setState({
          item: item,
          loading: true,
          image: getImageUrl(item)
        })
      })
      .catch(this.onError)
  }

  render() {
    if (!this.state.item) return <span>Select an item from a list!</span>;

    const { name } = this.state.item;

    return (
      <div className='person-detail'>
        <div className="card border-dark mb-3 person-detail-card">
          <div className='person-detail-img'>
            <img src={this.state.image} className="card-img" alt="item"></img>
          </div>
          <div className='card-container'>
            <div className="card-header">
              <h2 className="card-title">{name}</h2>

            </div>
            <div className="card-body">
              <ul className="list-group person-detail-list">
                {
                  React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, { item: this.state.item });
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

