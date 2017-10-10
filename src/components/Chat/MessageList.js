import React from 'react';
import FontAwesome from 'react-fontawesome';
import Message from './Message';

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let messages = this.props.messages.map(function(message){
      return <Message author={message.author} text={message.text} />
    });
    return (
      <div className="message-list">
        {messages}
      </div>
    );
  }

}
