import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import { DashboardActions }from './redux/DashboardActions';
import Dashboard from './components/Dashboard';
import NavigationService from '../../../utils/NavigationService';

class DashboardContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTitleStyle: {
     color: '#FFF'
    },
    headerBackTitle: null,
  });

  async componentDidMount() {
    await this.props.dispatch(DashboardActions.getNewsFeed());
  }

  showDetails = (data) => {
    NavigationService.navigate('Details',data);
  };

  render() {
    if(this.props.dashboard.isLoading) {
      return (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
      )
    }
    return (
      <Dashboard
        data={this.props.dashboard.newsFeedData}
        showDetails={this.showDetails}
      />
    )
  }
}
const mapStateToProps = (store) => ({
  dashboard: store.dashboard,
});
export default connect(mapStateToProps)(DashboardContainer);