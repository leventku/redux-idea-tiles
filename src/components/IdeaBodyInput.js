import React, { Component } from 'react';

export default class IdeaBodyInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.text || '',
      maxLength: this.props.maxLength || -1,
      charCount: this.props.text.length || 0
    }
  }

  handleKeyUp(e) {
    this.setState({charCount: e.target.value.length})
  }

  render() {
    const remaininChars = this.state.maxLength - this.state.charCount;
    
    return (
      <div className="idea-body-input">
        <input type="text" 
          className="idea-body"
          defaultValue={this.state.text}
          maxLength={this.state.maxLength}
          ref="input" 
          onKeyUp={this.handleKeyUp.bind(this)} />
        
        <span className={remaininChars < 16 ? 'char-count': 'hidden'}>{remaininChars}</span>
      </div>
    )
  }
}