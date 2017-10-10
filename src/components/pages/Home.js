import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow,
} from "react-google-maps";
import HomeSearch from './HomeSearch';
import HomeCreate from './HomeCreate';

const Map = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [
        {id: 0, name: 'Quest Room'},
        {id: 1, name: 'Quest Room 1'},
        {id: 2, name: 'Quest Room 2'},
        {id: 3, name: 'Quest Room 3'},
        {id: 4, name: 'Quest Room 4'},
        {id: 4, name: 'Quest Room 5'},
        {id: 5, name: 'Quest Room 6'},
        {id: 6, name: 'Quest Room 7'},
        {id: 7, name: 'Quest Room 8'},
      ],
      search_tags: [
        {name: 'Sport', selected: false},
        {name: 'Entertainment', selected: false},
        {name: 'Quest Room', selected: false},
        {name: 'Cinema', selected: false},
        {name: 'Relax', selected: false},
      ]
    };

    this.state.create_tags = this.state.search_tags;
  }

  render() {
    return (
      <div id="home-section" className="page-section container-fluid d-flex px-0">
        <div className="col-4 px-0" id="search-create">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item col px-0">
              <a className="nav-link active" id="search-tab" data-toggle="tab" href="#search" role="tab" aria-controls="search" aria-expanded="true">Search</a>
            </li>
            <li className="nav-item col px-0">
              <a className="nav-link" id="create-tab" data-toggle="tab" href="#create" role="tab" aria-controls="create">Create</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="search" role="tabpanel" aria-labelledby="search-tab">
              <HomeSearch events={this.state.events} tags={this.state.search_tags} />
            </div>
            <div className="tab-pane fade" id="create" role="tabpanel" aria-labelledby="create-tab">
              <HomeCreate tags={this.state.create_tags} />
            </div>
          </div>
        </div>
        <div className="col-8 px-0">
          <Map
            isMarkerShown={true}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
      </div>
    );
  }

}
