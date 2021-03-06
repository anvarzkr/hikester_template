import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Message extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log(this.props);
    let active_message = this.props.active ? ' active' : '';
    return (
      <div className={"message-item d-flex justify-content-center" + active_message}>
        <div className="message-person-photo-wrapper">
          <img src="/assets/images/user_photo.jpg" className="message-person-photo" />
        </div>
        <div className="message-wrapper">
          <div className="message-person">
            {this.props.name}
          </div>
          <div className="message-text">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }

}
