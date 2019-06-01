import { combineReducers } from 'redux';
import DashboardReducer from '../screens/views/Dashboard/redux/DashboardReducers';

export default combineReducers({
  dashboard: DashboardReducer,
})