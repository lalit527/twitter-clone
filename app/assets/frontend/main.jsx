import TweetBox from './components/tweetbox';
import TweetList from './components/tweetlist';

let mockTweets = [
  {id:1, name: 'Test1', body: 'First Tweet'},
  {id:2, name: 'Test1', body: 'First Tweet'},
  {id:3, name: 'Test1', body: 'First Tweet'},
  {id:4, name: 'Test1', body: 'First Tweet'}
];

class Main extends React.Component   {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList tweets={mockTweets}/>
      </div>

    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
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
