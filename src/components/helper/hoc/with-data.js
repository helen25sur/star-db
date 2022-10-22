import { Component } from 'react';
import Loader from '../../loader';

const withData = (View, getData) => {
  return class extends Component {

    state = {
      itemList: null, // не забыть изменить
    }

    componentDidMount() {

      getData()
        .then((itemList) => {
          this.setState({
            itemList: itemList
          });
          console.log(this.state);
        })
    }


    render() {
      const { itemList } = this.state;

      if (!itemList) return <Loader />;

      return (
        <View {...this.props} itemList={itemList} />

      )
    }
  };
}

export default withData;