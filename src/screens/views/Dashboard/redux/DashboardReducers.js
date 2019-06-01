import {DashboardActionTypes} from "./DashboardActions";
const initialState = {
  isLoading: true,
  isError: false,
};
const DashboardReducer = (state=initialState,action) => {
  switch(action.type) {
    case DashboardActionTypes.SET_LOADING_STATUS:
      return ({
        ...state,
        isLoading: true,
      });
    case DashboardActionTypes.SET_NEWS_FEED_DATA:
      return ({
        ...state,
        isLoading: false,
        newsFeedData: {...action.payload},
      });
    case DashboardActionTypes.SET_ERROR_STATE:
      return ({
        ...state,
        isLoading: false,
        isError: true,
      });
    default:
      return state;
  }
}
export default DashboardReducer;