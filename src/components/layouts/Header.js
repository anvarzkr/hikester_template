import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <header
        id="header">
        <div className="container d-flex align-items-stretch justify-content-end">
          <div className="left mr-auto d-flex align-items-stretch">
            <a href="/" className="logo">
              <img src="/assets/images/hikester_logo_white.png" className="logo-image"/>
            </a>
            <div className="menu-item">
              Support
            </div>
            <div className="menu-item">
              About
            </div>
          </div>
          <div className="right d-flex align-items-stretch">
            <a href="/" className="menu-item">
              Map
            </a>
            <div className="menu-item">
              My events
            </div>
            <div className="menu-item dropdown">
              <div className="dropdown-title">
                <img src="/assets/images/user_photo.jpg" className="dropdown-photo" />
              </div>
              <div className="dropdown-content">
                <ul>
                  <a href="/profile">
                    <li className="dropdown-item">Anvar Zakirov</li>
                  </a>
                  <li className="divider"></li>
                  <li className="dropdown-item">Notifications</li>
                  <li className="dropdown-item">My Events</li>
                  <li className="dropdown-item">Event History</li>
                  <li className="divider"></li>
                  <li className="dropdown-item">Settings</li>
                  <li className="dropdown-item">Sign Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

}
