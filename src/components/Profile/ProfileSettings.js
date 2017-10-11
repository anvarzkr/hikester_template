import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ProfileSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="profile-settings">
        <div className="profile-description-item-list">
          <div className="title">General Information</div>
          <div className="profile-description-item row d-flex align-items-center">
            <div className="profile-description-item-name col-3 text-right">
              Name
            </div>
            <div className="profile-description-item-value col-9 text-left">
              <input type="text" class="input-text" placeholder="Name" value={this.props.user.name}/>
            </div>
          </div>
          <div className="profile-description-item row d-flex align-items-center">
            <div className="profile-description-item-name col-3 text-right">
              Email
            </div>
            <div className="profile-description-item-value col-9 text-left">
              <input type="text" class="input-text" placeholder="Email" value={this.props.user.email}/>
            </div>
          </div>
          <div className="profile-description-item row d-flex align-items-center">
            <div className="profile-description-item-name col-3 text-right">
              Phone
            </div>
            <div className="profile-description-item-value col-9 text-left">
              <input type="text" class="input-text" placeholder="Phone" value={this.props.user.phone}/>
            </div>
          </div>
          <div className="profile-description-item row d-flex align-items-center">
            <div className="profile-description-item-name col-3 text-right">
              Location
            </div>
            <div className="profile-description-item-value col-9 text-left">
              <input type="text" class="input-text" placeholder="Location" value={this.props.user.location}/>
            </div>
          </div>
          <div className="profile-description-item row d-flex align-items-center">
            <div className="profile-description-item-name col-3 text-right">
              Birthdate
            </div>
            <div className="profile-description-item-value col-9 text-left">
              <input type="text" class="input-text" placeholder="dd.mm.yyyy format" value={this.props.user.birthdate}/>
            </div>
          </div>
          <div className="profile-description-item row d-flex align-items-center">
            <div className="profile-description-item-name col-3 text-right">
              About
            </div>
            <div className="profile-description-item-value col-9 text-left">
              <textarea  class="input-text" placeholder="About" value={this.props.user.about}/>
            </div>
          </div>
          <div className="profile-description-item row d-flex align-items-center">
            <div className="profile-description-item-name col-3 text-right">
              Sex
            </div>
            <div className="profile-description-item-value col-9 text-left">
              <select value={this.props.user.sex}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="title mt-3">Change Password</div>
          <div>
            <div className="profile-description-item row d-flex align-items-center">
              <div className="profile-description-item-name col-3 text-right">
                New Password
              </div>
              <div className="profile-description-item-value col-9 text-left">
                <input type="password" class="input-text" placeholder="Password" value=""/>
              </div>
            </div>
            <div className="profile-description-item row d-flex align-items-center">
              <div className="profile-description-item-name col-3 text-right">
                Confirm Password
              </div>
              <div className="profile-description-item-value col-9 text-left">
                <input type="password" class="input-text" placeholder="Confirm Password" value=""/>
              </div>
            </div>
            <div className="profile-description-item row d-flex align-items-center">
              <div className="profile-description-item-name col-3 text-right">
                Current Password
              </div>
              <div className="profile-description-item-value col-9 text-left">
                <input type="password" class="input-text" placeholder="Current Password" value=""/>
              </div>
            </div>
          </div>
          <button className="button button-fluid">Save Settings</button>
        </div>
      </div>
    );
  }

}
