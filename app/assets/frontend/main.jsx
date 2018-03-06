import TweetBox from './components/tweetbox';
import TweetList from './components/tweetlist';
import TweetStore from './stores/TweetStore';

import TweetAction from './actions/tweetaction';
TweetAction.getAllTweets();

let mockTweets = [

];

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component   {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className="container">
        <TweetBox />
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
