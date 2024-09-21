import React, { useState, useEffect } from 'react';
import './AIChat.css'; // Add AI Chat specific CSS

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Automatically open the chat when the component mounts
        setIsOpen(true);
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'User' }]);
            setInput('');
            // Simulate an AI response
            setTimeout(() => {
                setMessages((prev) => [...prev, { text: 'AI response to: ' + input, sender: 'AI' }]);
            }, 1000);
        }
    };

    return (
        <div>
            {isOpen && (
                <div className="chat-container">
                    <div className="chat-header">
                        <h2>AI Chat</h2>
                        <button onClick={() => setIsOpen(false)} className="close-button">X</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender === 'User' ? 'message user' : 'message ai'}>
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AIChat;
