import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ProfileAbout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="profile-about">
        <div className="profile-description-item-list">
          <div className="profile-description-item row">
            <div className="profile-description-item-name col-3 text-right">
              Location
            </div>
            <div className="profile-description-item-value col-9 text-left">
              {this.props.user.location}
            </div>
          </div>
          <div className="profile-description-item row">
            <div className="profile-description-item-name col-3 text-right">
              Age
            </div>
            <div className="profile-description-item-value col-9 text-left">
              {this.props.user.age}
            </div>
          </div>
          <div className="profile-description-item row">
            <div className="profile-description-item-name col-3 text-right">
              Sex
            </div>
            <div className="profile-description-item-value col-9 text-left">
              {this.props.user.sex}
            </div>
          </div>
          <div className="profile-description-item row">
            <div className="profile-description-item-name col-3 text-right">
              Attended Events
            </div>
            <div className="profile-description-item-value col-9 text-left">
              {this.props.user.attended_events_count}
            </div>
          </div>
          <div className="profile-description-about text-center">
            Theres some 'about me' information. For example I could write here about my interests. I like to play football very much. Also I like traveling.
          </div>
        </div>
      </div>
    );
  }

}
