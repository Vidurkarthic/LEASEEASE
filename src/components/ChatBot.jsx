import React, { useState } from 'react';
import './ChatBot.css';
const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { user: true, text: input }];
      setMessages(newMessages);
      setInput('');
      setTimeout(() => {
        const botResponse = getBotResponse(input);
        setMessages([...newMessages, { user: false, text: botResponse }]);
      }, 500);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const getBotResponse = (message) => {
    // Define basic bot responses here
    if (message.toLowerCase().includes('hello')) {
      return 'Hello! How can I assist you today with Lease Ease?';
    }
    if (message.toLowerCase().includes('rent')) {
      return 'We have a variety of rental options available. Please visit our products page.';
    }
    if (message.toLowerCase().includes('contact')) {
      return 'You can contact us at contact@leaseease.com or call us at 123-456-7890.';
    }
    return "I'm here to help! Could you please provide more details?";
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message ${msg.user ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
