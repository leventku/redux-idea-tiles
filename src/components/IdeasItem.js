import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateIdea } from '../actions';


class IdeasItem extends Component {
  handleFormBlur(id) {
    this.props.updateIdea({
      id,
      title: this.refs.title.value,
      body: this.refs.body.value,
    });
  }

  render() {
    const idea = this.props.idea;
    return (
      <li className="idea-item" key={idea.id}>
        <span className="idea-id">{idea.id}</span>
        <span className="idea-created-date">{idea.created_date.toString()}</span>
        <form onBlur={ this.handleFormBlur.bind(this, idea.id) }>
          <input type="text" className="idea-title" defaultValue={idea.title} ref="title" />
          <input type="text" className="idea-body" defaultValue={idea.body} ref="body" />
        </form>
      </li>
    )
  }
}

export default connect(null, { updateIdea })(IdeasItem);