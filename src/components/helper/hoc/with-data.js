import { Component } from 'react';
import Loader from '../../loader';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
    }
    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data: data
          });
        })
    }

    render() {
      const { data } = this.state;
      if (!data) return <Loader />;
      return (
        <View {... this.props} data={data} />
      )
    }
  }
}

export default withData;