import React from 'react';
import FontAwesome from 'react-fontawesome';
import Chat from '../Chat/Chat';
import Participants from '../Event/Participants';
import Tags from '../Event/Tags';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow,
} from "react-google-maps";

const Map = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

export default class Event extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          name: 'Anvar Zakirov',
          text: 'Hello, Hikester!',
          active: true
        },
        {
          name: 'Rinat Khatipov',
          text: 'Hello, Anvar!',
          active: false
        },
        {
          name: 'Anvar Zakirov',
          text: 'Hello, Hikester!',
          active: true
        },
        {
          name: 'Rinat Khatipov',
          text: 'Hello, Anvar!',
          active: false
        },
      ],
      participants: [
        {name: 'Anvar Z.'},
        {name: 'Rinat K.'},
        {name: 'Aydar N.'},
        {name: 'Kamil K.'},
        {name: 'Roman V.'},
        {name: 'Ilgiz Z.'},
        {name: 'Ilnar S.'},
        {name: 'Rinat G.'},
      ],
      tags: [
        {name: 'Entertainment'},
        {name: 'Quest Room'},
      ]
    };
  }

  render() {
    return (
      <div id="event-section" className="page-section container-fluid d-flex px-0">
        <div className="col-4 px-0" id="event-info">
          <div className="event-name">Quest Room</div>
          <div className="event-image-wrapper">
            <img src="/assets/images/questroom.jpg" className="event-image"></img>
          </div>
          <div className="event-parameter-group event-dates">
            <div className="event-parameter">
              <FontAwesome name="calendar" className="event-date-icon" />
              <div className="event-date">17 Feb. 2017</div>
            </div>
            <div className="event-parameter">
              <FontAwesome name="clock-o" className="event-date-icon" />
              <div className="event-days">4 days</div>
            </div>
          </div>
          <div className="event-parameter-group">
            <div className="event-parameter-value event-map">
              <Map
                isMarkerShown={true}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
          </div>
          <div className="event-parameters p-3">
            <div className="event-parameter-group">
              <div className="event-parameter-name">Tags:</div>
              <Tags tags={this.state.tags} />
            </div>
            <div className="event-parameter-group mt-3">
              <div className="event-parameter-name">Participants:</div>
              <Participants participants={this.state.participants} />
            </div>
          </div>
        </div>
        <div className="col-8 px-0">
          <Chat messages={this.state.messages}/>
        </div>
      </div>
    );
  }

}

// <div className="event-person">
//   <img src="/assets/images/user_photo.jpg" className="event-person-photo"/>
//   <div className="event-person-name">Anvar Zakirov</div>
// </div>
