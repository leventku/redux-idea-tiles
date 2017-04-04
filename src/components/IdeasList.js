import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchIdeas, updateIdea } from '../actions';

class IdeasList extends Component {
  componentWillMount () {
    this.props.fetchIdeas();
  }

  handleFormBlur(id) {
    this.props.updateIdea({
      id,
      title: this.refs.title.value,
      body: this.refs.body.value,
    });
  }

  renderIdeas() {
    return this.props.ideas.map(idea => {   
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
    })
  }
  
  render() {
    return (
    <ul>
      { this.renderIdeas() }
    </ul>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    ideas: appState.ideas.all
  }
}

export default connect(mapStateToProps, { fetchIdeas, updateIdea })(IdeasList);