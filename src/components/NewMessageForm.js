import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewMessageForm extends Component {
  static propTypes = {
    onSend: PropTypes.func
  }

  state = { inputText: '' }

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSend = () => {
    this.sendMessage()
    this.setState({ inputText: '' })
  }

  sendMessage = () => {
    debugger
    const { inputText } = this.state;
    const { onSend } = this.props;
    onSend(inputText);
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <input type='text' data-testid='messageText' value={inputText} onChange={this.handleTextChange}></input>
        <button type='submit' data-testid="sendButton" onClick={this.handleSend}>Send Message</button>
      </div>
    )
  }
}





