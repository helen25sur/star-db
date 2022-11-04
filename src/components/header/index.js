import { Component } from 'react';
import './header.css';

export default class Header extends Component {


  render() {
    return (
      <header className='header'>
        <div className='logo'>
          <h1 className='title'><a href='/' className='text-info logo-title'>Star DB</a></h1>
        </div>
        <nav>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link " data-bs-toggle="tab" href="/" aria-selected="false" role="tab">People</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="/planet" aria-selected="false" role="tab" >Planets</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/starships" aria-selected="false" role="tab">Starships</a>
            </li>
          </ul>
        </nav>

      </header>
    )
  }
}