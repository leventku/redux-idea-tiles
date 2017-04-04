import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchIdeas } from '../actions';

class IdeasList extends Component {
  componentWillMount () {
    this.props.fetchIdeas();
  }

  renderIdeas() {
    return this.props.ideas.map(idea => {   
      return (
        <li className="idea-item" key={idea.id}>{idea.title} - {idea.body}</li>
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

export default connect(mapStateToProps, { fetchIdeas })(IdeasList);