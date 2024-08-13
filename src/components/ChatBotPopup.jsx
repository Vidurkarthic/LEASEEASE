import React, { useState } from 'react';
import ChatBot from './ChatBot';
import './ChatBotPopup.css';
import ChatIcon from '@mui/icons-material/Chat'; // Using Material-UI icon

const ChatBotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-popup">
      <div className="chatbot-icon" onClick={toggleChatBot}>
        <ChatIcon style={{ fontSize: 40, color: 'white' }} />
      </div>

      {isOpen && (
        <div className="chatbot-popup-window">
          <div className="chatbot-popup-header">
            <span>Chat with us</span>
            <button onClick={toggleChatBot} className="close-button">X</button>
          </div>
          <ChatBot />
        </div>
      )}
    </div>
  );
};

export default ChatBotPopup;
