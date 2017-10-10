import React from 'react';
import FontAwesome from 'react-fontawesome';
import Tag from './Tag';

export default class Tags extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let t = this;
    let tags = this.props.tags.map(function(tag, index){
      return <Tag name={tag.name} />
    });
    return (
      <div className="event-parameter-value event-tags">
        {tags}
      </div>
    );
  }

}
