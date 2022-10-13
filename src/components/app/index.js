import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetail from '../person-details';

const App = () => {
  return (
    <div className='App container'>
      <Header />
      <RandomPlanet />
      <ItemList />
      <PersonDetail />
    </div>
  )
}


export default App;