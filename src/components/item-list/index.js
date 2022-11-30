import './item-list.css';
import PropTypes from 'prop-types';

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

ItemList.defaultProps = {
  onItemSelected: () => { console.log('Didn\'t get onItemSelected'); }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;