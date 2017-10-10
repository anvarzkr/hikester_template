import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Tag extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="event-tag">
        {this.props.name}
      </div>
    );
  }

}
