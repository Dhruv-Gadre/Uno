import React, { useState } from 'react';

const CommunityForum = () => {
  // Initial messages to make the chat feel more real
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome everyone to our mindfulness support space. This is a safe place to share your journey and support each other.",
      sender: "Sarah",
      timestamp: "09:15",
      avatar: "S",
      isCurrentUser: false
    },
    {
      id: 2,
      text: "I've been practicing the 5-minute breathing exercise every morning and it's really helping with my anxiety. Has anyone else tried this?",
      sender: "Michael",
      timestamp: "09:32",
      avatar: "M",
      isCurrentUser: false
    },
    {
      id: 3,
      text: "Yes! I do something similar. I find that focusing on my breath for even just a few minutes helps ground me for the day ahead.",
      sender: "Jessica",
      timestamp: "09:45",
      avatar: "J",
      isCurrentUser: false
    },
    {
      id: 4,
      text: "I'm new to mindfulness practice. Can anyone recommend some beginner-friendly resources or techniques?",
      sender: "David",
      timestamp: "10:03",
      avatar: "D",
      isCurrentUser: false
    },
    {
      id: 5,
      text: "David, the Headspace app has some great guided meditations for beginners. Also, try simply sitting quietly and counting your breaths to ten, then restart. It's simple but effective!",
      sender: "Sarah",
      timestamp: "10:15",
      avatar: "S",
      isCurrentUser: false
    },
    {
      id: 6,
      text: "Thanks for the recommendations! I'll check out Headspace today.",
      sender: "You",
      timestamp: "10:22",
      avatar: "Y",
      isCurrentUser: true
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers] = useState(6);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    const message = {
      id: Date.now(),
      text: newMessage,
      sender: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "Y",
      isCurrentUser: true
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };

  // Avatar colors that complement the green theme
  const avatarColors = {
    "S": "bg-green-600",
    "M": "bg-emerald-600",
    "J": "bg-teal-600",
    "D": "bg-green-700",
    "Y": "bg-teal-500"
  };

  return (
    <div className="flex flex-col h-screen bg-green-50 text-green-900">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-green-600 text-green-50 shadow-md">
        <h1 className="text-xl font-bold">Mindfulness Support</h1>
        <div className="bg-green-200 bg-opacity-30 text-green-50 px-3 py-1 rounded-full text-xs font-medium">
          {onlineUsers} online
        </div>
      </div>
      
      {/* Messages Container */}
      <div className="flex-grow overflow-y-auto px-4 py-4 bg-green-50">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.isCurrentUser ? 'items-end' : 'items-start'}`}>
              <div className={`flex items-center ${msg.isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full ${avatarColors[msg.avatar] || "bg-green-500"} flex items-center justify-center ${msg.isCurrentUser ? 'ml-2' : 'mr-2'} text-white font-medium shadow-sm`}>
                  {msg.avatar}
                </div>
                <span className="font-medium text-green-800">{msg.sender}</span>
                <span className={`text-xs text-green-600 ${msg.isCurrentUser ? 'mr-2' : 'ml-2'}`}>{msg.timestamp}</span>
              </div>
              <div className={`mt-1 max-w-md ${msg.isCurrentUser ? 'bg-emerald-500 text-white' : 'bg-white text-green-800'} px-4 py-2 rounded-lg shadow-sm ${msg.isCurrentUser ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="px-4 py-3 bg-green-100 border-t border-green-200 shadow-inner">
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-grow bg-white text-green-800 rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 border-0 shadow-sm"
          />
          <button 
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-r-md font-medium transition-colors duration-200 shadow-sm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunityForum;