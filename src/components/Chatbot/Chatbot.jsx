import React, { Component } from "react";
import ChatBot from 'react-simple-chatbot';

class Chatbot extends Component {
  render() {
    return <ChatBot
    steps={[
      {
        id: 'hello-world',
        message: '¿En qué puedo ayudarte?',
        end: true,
      },
    ]}
  />;
  }
}

export default Chatbot;
