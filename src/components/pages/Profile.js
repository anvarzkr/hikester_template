import React from 'react';
import FontAwesome from 'react-fontawesome';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileEvents from '../profile/ProfileEvents';
import ProfileSettings from '../profile/ProfileSettings';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Anvar Zakirov',
        email: 'anvarzkr@gmail.com',
        phone: '+79655969947',
        hikester_from_date: '17 Feb, 2016',
        location: 'Russia, Innopolis',
        sex: 'Male',
        age: 21,
        attended_events_count: 17,
        birthdate: '01.02.1996',
        about: "Theres some 'about me' information. For example I could write here about my interests. I like to play football very much. Also I like traveling."
      }
    };
  }

  render() {
    return (
      <div id="profile-section" className="page-section container justify-content-center">
        <div className="profile-notification text-center mt-3">
          Please, confirm your email to open the opportunity of creating events.
          <div className="profile-confirm-link-block mt-3">
            <a href="#" className="profile-confirm-link">
              Confirm Email
            </a>
          </div>
        </div>
        <div className="divider gradient"></div>
        <div className="profile-main row">
          <div className="col-3 profile-info-wrapper">
            <div className="profile-info panel">
              <img src="/assets/images/user_photo.jpg" className="profile-info-photo" />
              <div className="divider"></div>
              <div className="profile-info-name">
                {this.state.user.name}
              </div>
              <div className="divider"></div>
              <div className="profile-info-user-from">
                Hikester from {this.state.user.hikester_from_date}
              </div>
            </div>
          </div>
          <div className="col-9">
            <ul className="tabs nav nav-tabs profile-tabs" role="tablist">
              <li className="nav-item col px-0">
                <a className="nav-link active" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-expanded="true">About</a>
              </li>
              <li className="nav-item col px-0">
                <a className="nav-link" id="events-tab" data-toggle="tab" href="#events" role="tab" aria-controls="events">Events</a>
              </li>
              <li className="nav-item col px-0">
                <a className="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings">Settings</a>
              </li>
            </ul>
            <div className="tab-content panel" id="profile-tab-content">
              <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                <ProfileAbout user={this.state.user} />
              </div>
              <div className="tab-pane fade" id="events" role="tabpanel" aria-labelledby="events-tab">
                <ProfileEvents events={this.state.events} />
              </div>
              <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <ProfileSettings user={this.state.user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
