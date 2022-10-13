import { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {

  render() {

    return (
      <ul className="list-group item-list-component">
        <li className="list-group-item"><span className='name'>Luke Skywalker</span> <span className='details'>(19BBY)</span></li>
        <li className="list-group-item"><span className='name'>C-3PO</span> <span className='details'>(112BBY)</span></li>
        <li className="list-group-item"><span className='name'>R2-D2</span> <span className='details'>(33BBY)</span></li>
        <li className="list-group-item"><span className='name'>Darth Vader</span> <span className='details'>(41.9BBY)</span></li>
        <li className="list-group-item"><span className='name'>Leia Organa</span> <span className='details'>(19BBY)</span></li>
        <li className="list-group-item"><span className='name'>Owen Lars</span> <span className='details'>(52BBY)</span></li>
        <li className="list-group-item"><span className='name'>Beru Whitesun lars</span> <span className='details'>(47BBY)</span></li>
        <li className="list-group-item"><span className='name'>R5-D4</span> <span className='details'>(unknown)</span></li>
        <li className="list-group-item"><span className='name'>Biggs Darklighter</span> <span className='details'>(24BBY)</span></li>
        <li className="list-group-item"><span className='name'>Obi-Wan Kenobi</span> <span className='details'>(57BBY)</span></li>


      </ul>
    )
  }
}