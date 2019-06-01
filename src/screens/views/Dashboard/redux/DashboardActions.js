import NewsFeedApi from "../../../helpers/services";

const DashboardActionTypes = {
  SET_LOADING_STATUS: 'DASHBOARD/SET_LOADING_STATUS',
  SET_NEWS_FEED_DATA: 'DASHBOARD/SET_NEWS_FEED_DATA',
  SET_ERROR_STATE: 'DASHBOARD/SET_ERROR_STATE',
};

const DashboardActions = {
  setLoadingStatus: () => ({ type: DashboardActionTypes.SET_LOADING_STATUS}),
  setNewsFeed: payload => ({ type: DashboardActionTypes.SET_NEWS_FEED_DATA, payload }),
  failureGetNewsFeed: () => ({ type: DashboardActionTypes.SET_ERROR_STATE}),
  getNewsFeed: () => async(dispatch) => {
    try{
      dispatch(DashboardActions.setLoadingStatus());
      const json = await NewsFeedApi.getNewsFeed();
      dispatch(DashboardActions.setNewsFeed(json));
    }catch(error) {
      dispatch(DashboardActions.failureGetNewsFeed());
    }
  },
};
export {
  DashboardActions,
  DashboardActionTypes,
}