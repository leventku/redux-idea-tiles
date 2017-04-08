import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import IdeasItem from './IdeasItem';
import { fetchIdeas, addIdea } from '../actions';

export class IdeasList extends Component {
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
      <div className="ideas-list-wrapper">
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

IdeasList.propTypes = {
  ideas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })),
  fetchIdeas: PropTypes.func.isRequired,
  addIdea: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchIdeas, addIdea })(IdeasList);