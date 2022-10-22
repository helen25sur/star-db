import { Component } from 'react';
import './item-list.css';

import Loader from '../loader';

export default class ItemList extends Component {

  state = {
    itemList: null, // не забыть изменить
    loading: false,
  }

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList: itemList,
          loading: true
        });
        console.log(this.state);
      })
  }



  renderItems = (arr) => {
    return arr.map((item) => {
      const label = this.props.children(item)
      return (
        <li key={item.id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(item.id)}>
          {/* <span className='name'>{item.name} </span> */}
          {label}
        </li>
      )
    })
  }

  render() {
    const { itemList, loading } = this.state;
    console.log(itemList);
    const content = !loading ? <Loader /> : this.renderItems(itemList); // и тут уже itemList, а не personList

    return (
      <ul className="list-group item-list-component">
        {content}
      </ul>
    )
  }
}
