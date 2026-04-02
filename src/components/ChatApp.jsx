import React, { useState } from "react";

function ChatApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;

    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <h2>Mini Chat App</h2>

      {/* Input Section */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handleSend}>Send Message</button>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.length === 0 ? (
          <p className="no-msg">No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ChatApp;