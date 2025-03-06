import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Paperclip, Smile } from 'lucide-react';

const ChatComponent = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Welcome to RecoveryPath. I'm here to support you on your journey. How are you feeling today?",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;

        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);

        // Simulated bot response
        setTimeout(() => {
            const botResponses = [
                "I understand. Recovery is a journey, and every step counts.",
                "Thank you for sharing. Your feelings are valid.",
                "Let's focus on your strengths and progress.",
                "Would you like to discuss some coping strategies?"
            ];

            const botResponse = {
                id: messages.length + 2,
                text: botResponses[Math.floor(Math.random() * botResponses.length)],
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prevMessages => [...prevMessages, botResponse]);
        }, 1000);

        setInputMessage('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div
            className={`fixed bottom-4 right-4 w-96 bg-[#264653] rounded-xl shadow-2xl transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                }`}
            style={{ maxHeight: '600px', height: isOpen ? 'auto' : 0 }}
        >
            {/* Chat Header */}
            <div className="bg-[#2A9D8F] text-[#F4EAE0] p-4 rounded-t-xl flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-semibold">RecoveryPath Support</span>
                </div>
                <button
                    onClick={onClose}
                    className="hover:bg-[#A7C957]/20 rounded-full p-1 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Messages Container */}
            <div className="p-4 space-y-4 overflow-y-auto max-h-[400px]" style={{ scrollbarWidth: 'thin' }}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'
                            }`}
                    >
                        <div
                            className={`max-w-[80%] p-3 rounded-xl ${message.sender === 'bot'
                                    ? 'bg-[#2A9D8F]/20 text-[#F4EAE0]'
                                    : 'bg-[#A7C957]/20 text-[#F4EAE0]'
                                }`}
                        >
                            <p className="text-sm">{message.text}</p>
                            <span className="text-xs text-[#F4EAE0]/60 block text-right mt-1">
                                {message.timestamp}
                            </span>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-[#2A9D8F]/20 flex items-center space-x-2">
                <button className="text-[#A7C957] hover:bg-[#A7C957]/10 p-2 rounded-full">
                    <Paperclip className="w-5 h-5" />
                </button>
                <button className="text-[#A7C957] hover:bg-[#A7C957]/10 p-2 rounded-full">
                    <Smile className="w-5 h-5" />
                </button>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyUp={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-grow bg-[#2A9D8F]/10 text-[#F4EAE0] p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-[#A7C957] text-[#264653] p-2 rounded-full hover:bg-[#E9C46A] transition-colors"
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

// Wrapper Component to Demonstrate Usage
const ChatWrapper = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="fixed bottom-4 right-4 bg-[#A7C957] text-[#264653] p-3 rounded-full shadow-lg hover:bg-[#E9C46A] transition-colors"
            >
                {isChatOpen ? <X /> : <MessageCircle />}
            </button>
            <ChatComponent
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </div>
    );
};

export default ChatWrapper;