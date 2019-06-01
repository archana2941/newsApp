import React,{Component} from 'react';
import Details from './components/Details';

class DetailContainer extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('pageTitle'),
    headerTintColor: '#000',
  });

  componentDidMount() {
    this.props.navigation.setParams({
      pageTitle: this.props.navigation.state.params.title,
    })
  }
  render() {
    return (
      <Details
        data={this.props.navigation.state.params}
      />
    )
  }
}
export default DetailContainer;