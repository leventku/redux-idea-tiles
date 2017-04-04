import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateIdea, deleteIdea } from '../actions';

const maxLength = 140;

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
          <input type="text" className="idea-title" defaultValue={idea.title} maxLength={maxLength} ref="title" />
          <input type="text" className="idea-body" defaultValue={idea.body} maxLength={maxLength} ref="body" />
        </form>
        <button className="destroy" onClick={() => this.props.deleteIdea(idea.id)} />
      </li>
    )
  }
}

export default connect(null, { updateIdea, deleteIdea })(IdeasItem);