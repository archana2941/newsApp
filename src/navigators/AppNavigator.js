import { createStackNavigator, createAppContainer } from 'react-navigation';
import DashboardContainer from '../screens/views/Dashboard/DashboardContainer';
import DetailContainer from '../screens/views/NewsDetails/DetailsContainer';

const AppNavigator = createStackNavigator({
  Dashboard: {screen: DashboardContainer},
  Details: {screen: DetailContainer},
});
export default createAppContainer(AppNavigator);