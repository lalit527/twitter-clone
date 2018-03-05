export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="row">
        <form onSumit={this.sendTweet}>
          <div className="input-field">
            <textarea ref="tweetTextArea" className="materialize-textarea"/>
              <label>What's Happening</label>
              <button type="submit" className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}
