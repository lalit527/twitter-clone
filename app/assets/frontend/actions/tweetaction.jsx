import API from '../API';
export default {
  getAllTweets() {
    console.log(1, 'TweetAction');
    API.getAllTweets();
  },
  createTweet(body) {
    API.createTweet(body);
  }
}
