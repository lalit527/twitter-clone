import React from 'react';
import TweetBox from './tweetbox';
import TweetList from './tweetlist';
import TweetStore from './../stores/TweetStore';

import TweetAction from './../actions/tweetaction';
TweetAction.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Index extends React.Component   {
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

export default Index;
