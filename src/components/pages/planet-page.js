import { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sdb-components';
import Container from '../container';

export default class PlanetPage extends Component {

  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem: selectedItem })
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <div>
        <Container
          first={null}
          second={<PlanetList onItemSelected={this.onItemSelected} />}
          third={<PlanetDetails itemId={selectedItem} />} />
      </div>
    );
  }
}