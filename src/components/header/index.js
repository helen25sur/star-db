import { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {


  render() {
    return (
      <header className='header'>
        <div className='logo'>
          <h1 className='title'><Link to='/' className='text-info logo-title'>Star DB</Link></h1>
        </div>
        <nav>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <Link className="nav-link " data-bs-toggle="tab" to="/" aria-selected="false" role="tab">People</Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" data-bs-toggle="tab" to="/planet/" aria-selected="false" role="tab" >Planets</Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/starships/" aria-selected="false" role="tab">Starships</Link>
            </li>
          </ul>
        </nav>

      </header>
    )
  }
}