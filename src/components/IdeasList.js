import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import IdeasItem from './IdeasItem';

import { fetchIdeas, addIdea } from '../actions';

class IdeasList extends Component {
  componentWillMount () {
    this.props.fetchIdeas();
  }

  renderIdeas() {
    return this.props.ideas.map(idea => {   
      return (
        <IdeasItem key={idea.id} idea={idea}/>
      )
    })
  }
  
  render() {
    return (
      <div>
        <button className="btn-add-idea" onClick={this.props.addIdea}>Add idea</button>
        <ul className="ideas-list">
          { this.renderIdeas() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    ideas: appState.ideas.all
  }
}

export default connect(mapStateToProps, { fetchIdeas, addIdea })(IdeasList);