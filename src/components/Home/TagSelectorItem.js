import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class TagSelectorItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="col-4">
        <div className="ui toggle checkbox">
          <input type="checkbox" id={this.props.tag.name} name="public" defaultChecked={this.props.tag.selected} />
          <label htmlFor={this.props.tag.name}>{this.props.tag.name}</label>
        </div>
      </div>
    );
  }

}
