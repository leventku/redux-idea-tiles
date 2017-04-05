import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { updateIdea, deleteIdea } from '../actions';

const maxLength = 140;

class IdeasItem extends Component {
  componentDidMount() {
    if(!this.refs.title.value.length){
      this.refs.title.focus();
    }
  }

  handleFormBlur(id) {
    this.props.updateIdea({
      id,
      title: this.refs.title.value,
      body: this.refs.body.value,
    });
  }

  render() {
    const { id, created_date, title, body } = this.props.idea;
    const formattedDate = moment(created_date).format('ll')

    return (
      <li className="ideas-item" key={id}>
        <span className="idea-id">id: {id}</span>
        <span className="idea-created-date">{formattedDate}</span>
        <form onBlur={this.handleFormBlur.bind(this, id)}>
          <label>
            Title:
            <input type="text" className="idea-title" defaultValue={title} maxLength={maxLength} ref="title" />
          </label>
          
          <label>
            Body:
            <input type="text" className="idea-body" defaultValue={body} maxLength={maxLength} ref="body" /></label>
        </form>
        <button className="destroy" onClick={() => this.props.deleteIdea(id)} />
      </li>
    )
  }
}

export default connect(null, { updateIdea, deleteIdea })(IdeasItem);