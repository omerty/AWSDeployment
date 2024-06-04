import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);

  const sendMessage = async () => {
    try {
      const response = await axios.post('https://immense-shelf-64013-cf032f3f3f78.herokuapp.com/api/chatbot', { message: userMessage });
      setBotResponse(response.data.response);
      setUserMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  return (
    <div>
      {!showChatbot && (
        <button
          onClick={toggleChatbot}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#31aaf5',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            zIndex: '1000', // Ensure the button is above other content
          }}
        >
          Open Chatbot
        </button>
      )}

      <div
        className={`chatbot-popup${showChatbot ? ' active' : ''}`}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'black',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '10px',
          borderRadius: '5px',
          width: '300px',
          display: showChatbot ? 'block' : 'none', // Toggle display based on showChatbot state
        }}
      >
        <button
          onClick={closeChatbot}
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#fff',
          }}
        >
        </button>
        <div>
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
        {botResponse && <p>Bot: {botResponse}</p>}
      </div>
    </div>
  );
};

export default Chatbot;
