import withData from '../helper/hoc/with-data';
import './item-list.css';


import SwapiService from '../../services/swapi-service';

const ItemList = (props) => {

  const { itemList, onItemSelected, children: renderLabel } = props;

  const items = itemList.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li key={id}
        className="list-group-item"
        onClick={() => onItemSelected(id)}>
        {/* <span className='name'>{item.name} </span> */}
        {label}
      </li>
    )

  })

  return (
    <ul className="list-group item-list-component">
      {items}
    </ul>
    // const { loading } = this.state;
    // const { itemList } = this.props;

    // const content = this.renderItems(itemList); // и тут уже itemList, а не personList

    // return (
    //   <ul className="list-group item-list-component">
    //     {content}
    //   </ul>
    // )
  )
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople)
