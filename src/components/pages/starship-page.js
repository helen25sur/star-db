import { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sdb-components';
import Container from '../container';

export default class StarshipPage extends Component {

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
          second={<StarshipList onItemSelected={this.onItemSelected} />}
          third={<StarshipDetails itemId={selectedItem} />} />
      </div>
    );
  }
}