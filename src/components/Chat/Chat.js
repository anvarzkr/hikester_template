import React from 'react';
import FontAwesome from 'react-fontawesome';
import MessageList from './MessageList';

export default class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div id="chat-section" className="container-fluid d-flex px-0">
        <MessageList messages={this.props.messages} />
        <div className="chat-form">
          <input type="text" placeholder="Message.." className="chat-form-input" />
          <button className="button chat-form-submit">
            Send
          </button>
        </div>
      </div>
    );
  }

}
