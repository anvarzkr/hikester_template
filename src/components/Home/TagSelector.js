import React from 'react';
import FontAwesome from 'react-fontawesome';
import TagSelectorItem from './TagSelectorItem';

export default class TagSelector extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let t = this;
    let tags = this.props.tags.map(function(tag, index){
      return <TagSelectorItem tag_selector_id={t.props.id} key={index} tag={tag} />
    });
    return (
      <div className="tags row">
        {tags}
      </div>
    );
  }

}
