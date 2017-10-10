import React from 'react';
import FontAwesome from 'react-fontawesome';
import TagSelector from '../Home/TagSelector';

export default class HomeCreate extends React.Component {

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
          <div className="mt-3">
            <textarea className="input-text" placeholder="Description"/>
          </div>
          <div className="divider"></div>
          <div>
            <div className="title">Tags:</div>
            <TagSelector id='tag_selector_create' tags={this.props.tags} />
          </div>
          <div className="mt-3 mb-0 alert alert-warning" role="alert">
            Before creating an event choose place on the map
          </div>
        </div>
        <button className="button button-fluid">
          Create
        </button>
      </div>
    );
  }

}
