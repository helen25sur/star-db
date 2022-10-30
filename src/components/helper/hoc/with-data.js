import { Component } from 'react';
import Loader from '../../loader';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    }
    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data: data
          });
          console.log('withData', this.state.data);
        })
    }

    render() {
      const { data } = this.state;
      console.log('withData', '21', data);
      if (!data) return <Loader />;
      return (
        <View {... this.props} data={data} />
      )
    }
  }
}

export default withData;