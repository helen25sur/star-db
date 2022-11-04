import { Component } from 'react';
import { PersonDetails, PersonList } from '../sdb-components';
import Container from '../container';

export default class PeoplePage extends Component {

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
          second={<PersonList onItemSelected={this.onItemSelected} />}
          third={<PersonDetails itemId={selectedItem} />} />
      </div>
    );
  }
}