import TweetAction from '../actions/TweetAction';

export default class TweetBox extends React.Component {
  sendTweet(event) {
    event.preventDefault();
    let form = event.target;
    //this.props.sendTweet(this.refs.tweetTextArea.value);
    let tweet = form.elements['tweet'].value;
    //this.props.sendTweet(tweet);
    TweetAction.createTweet(tweet);
    console.log(tweet);
    //console.log(this.refs.tweetTextArea.value);
    form.elements['tweet'].value = '';

  }
  render() {
    return (
      <div className="row">
        <form onSubmit={this.sendTweet.bind(this)}>
          <div className="input-field">
            <textarea   name ='tweet' className="materialize-textarea"/>
              <label>What's Happening</label>
              <button type="submit" className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}

//ref={(textarea) => { this.tweetTextArea = textarea; }}
