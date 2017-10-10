import React from 'react';
import FontAwesome from 'react-fontawesome';
import EventList from '../Home/EventList';
import TagSelector from '../Home/TagSelector';

export default class HomeSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="panel">
        <div className="p-3">
          <input
            type="text"
            className="input-text"
            placeholder="Event Name.."/>
          <div className="row mt-3">
            <div className="col">
              <div className="input-date-group">
                <input type="text" className="input-date" placeholder="Start Date"/>
                <FontAwesome name="calendar" className="input-date-icon" />
              </div>
            </div>
            <div className="col">
              <div className="input-date-group">
                <input type="text" className="input-date" placeholder="Finish Date"/>
                <FontAwesome name="calendar" className="input-date-icon" />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <div className="title">Tags:</div>
            <TagSelector id='tag_selector_search' tags={this.props.tags} />
          </div>
        </div>
        <div className="divider"></div>
        <div className="search-result-text text-center">Results</div>
        <div className="divider"></div>
        <EventList events={this.props.events} />
      </div>
    );
  }

}
