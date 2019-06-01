const status = (response) => {
  if(response.status === 200) {
    return new Promise.resolve(response);
  }else {
    return new Promise.reject(response);
  }
}
const NewsFeedApi = {
  getNewsFeed: async () => {
    try {
      const url = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526'
      const response = await fetch(url,{
        credentials: 'same-origin',
        method: 'GET',
      });
      const result = await status(response);
      return result.json();
    } catch (error) {
      throw new Error(`Get News Feed api call failed with error: ${error.message}`);
    }
  }
};
export default NewsFeedApi;