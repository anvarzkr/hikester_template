import React from 'react';
import FontAwesome from 'react-fontawesome';
import EventListItem from './EventListItem';

export default class EventList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let events = this.props.events.map(function(event, index){
      return <EventListItem key={index} event={event} />
    });
    return (
      <div className="event-list row mx-0">
        {events}
      </div>
    );
  }

}
