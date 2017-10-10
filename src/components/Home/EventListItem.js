import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class EventListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <a href="/event" className="col-4 event-item">
        <img src="/assets/images/questroom.jpg" className="event-item-image" />
        <div className="event-item-description">
          <div className="event-item-name text-center">
            {this.props.event.name}
          </div>
        </div>
      </a>
    );
  }

}
