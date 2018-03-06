import TweetBox from './components/tweetbox';
import TweetList from './components/tweetlist';

let mockTweets = [

];

class Main extends React.Component   {
  constructor(props) {
    super(props);
    this.state = { tweetsList: mockTweets };
  }
  addTweet(tweetToAdd) {
    $.post("tweets", { body: tweetToAdd })
      .success( savedTweet => {
        let newTweetList = this.state.tweetsList;
        newTweetList.unshift(savedTweet);
        this.setState({ tweetsList: newTweetList });
      })
      .error(error => console.log(error));
  }
  componentDidMount() {
    $.ajax("/tweets")
      .success(data => this.setState({ tweetsList: data }))
      .error(error => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetsList}/>
      </div>

    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if(reactNode){
    ReactDOM.render(
      <Main />,
      reactNode
    );
  }
};

$(documentReady);



//var Main = React.createClass({ render: function() { return ( <Greet /> ) } });

// let documentReady = () => {
//   React.render(
//     <Main />,
//     document.getElementById('react')
//   );
// };


// let documentReady = createReactClass({
//   render: function() {
//     return (
//       <h1>Hello React</h1>,
//       document.getElementById('react')
//     )
//   }
// });
