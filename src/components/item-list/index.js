import withData from '../helper/hoc/with-data';
import './item-list.css';
import SwapiService from '../../services/swapi-service';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li key={id}
        className="list-group-item"
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )

  })

  return (
    <ul className="list-group item-list-component">
      {items}
    </ul>
  )
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);

