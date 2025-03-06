import React, { useState } from 'react';

const MindfulnessForum = () => {
  // Initial posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Sarah",
      avatar: "S",
      content: "Welcome everyone to our mindfulness support space. This is a safe place to share your journey and support each other.",
      timestamp: "09:15",
      likes: 5,
      isLiked: false,
      comments: [
        { id: 101, author: "Michael", avatar: "M", content: "Thank you for creating this space!", timestamp: "09:20" }
      ],
      isExpanded: false
    },
    {
      id: 2,
      author: "Michael",
      avatar: "M",
      content: "I've been practicing the 5-minute breathing exercise every morning and it's really helping with my anxiety. Has anyone else tried this?",
      timestamp: "09:32",
      likes: 3,
      isLiked: false,
      comments: [
        { id: 201, author: "Jessica", avatar: "J", content: "Yes! I do something similar. I find that focusing on my breath for even just a few minutes helps ground me for the day ahead.", timestamp: "09:45" }
      ],
      isExpanded: false
    },
    {
      id: 3,
      author: "David",
      avatar: "D",
      content: "I'm new to mindfulness practice. Can anyone recommend some beginner-friendly resources or techniques?",
      timestamp: "10:03",
      likes: 1,
      isLiked: false,
      comments: [
        { id: 301, author: "Sarah", avatar: "S", content: "The Headspace app has some great guided meditations for beginners. Also, try simply sitting quietly and counting your breaths to ten, then restart.", timestamp: "10:15" },
        { id: 302, author: "You", avatar: "Y", content: "Thanks for the recommendations! I'll check out Headspace today.", timestamp: "10:22" }
      ],
      isExpanded: true
    }
  ]);
  
  const [newPost, setNewPost] = useState('');
  const [newComments, setNewComments] = useState({});
  const [onlineUsers] = useState(6);

  // Avatar colors that complement the green theme
  const avatarColors = {
    "S": "bg-green-600",
    "M": "bg-emerald-600",
    "J": "bg-teal-600",
    "D": "bg-green-700",
    "Y": "bg-teal-500"
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() === '') return;
    
    const post = {
      id: Date.now(),
      author: "You",
      avatar: "Y",
      content: newPost,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      likes: 0,
      isLiked: false,
      comments: [],
      isExpanded: false
    };
    
    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const toggleComments = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isExpanded: !post.isExpanded
        };
      }
      return post;
    }));
  };

  const handleCommentSubmit = (postId) => {
    if (!newComments[postId] || newComments[postId].trim() === '') return;
    
    const comment = {
      id: Date.now(),
      author: "You",
      avatar: "Y",
      content: newComments[postId],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment],
          isExpanded: true
        };
      }
      return post;
    }));
    
    setNewComments({...newComments, [postId]: ''});
  };

  return (
    <div className="flex flex-col bg-green-50 text-green-900 rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-green-600 text-green-50">
        <h1 className="text-lg font-semibold">Mindfulness Community</h1>
        <div className="bg-green-500 bg-opacity-30 text-green-50 px-2 py-1 rounded-full text-xs">
          {onlineUsers} online
        </div>
      </div>
      
      {/* New Post Form */}
      <form onSubmit={handlePostSubmit} className="p-3 bg-green-100 border-b border-green-200">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your mindfulness journey..."
          className="w-full p-2 bg-white text-green-800 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 text-sm resize-none"
          rows="2"
        />
        <div className="flex justify-end mt-2">
          <button 
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Post
          </button>
        </div>
      </form>
      
      {/* Posts Container */}
      <div className="flex-grow overflow-y-auto max-h-96">
        <div className="divide-y divide-green-100">
          {posts.map((post) => (
            <div key={post.id} className="p-3 bg-white">
              {/* Post Header */}
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full ${avatarColors[post.avatar] || "bg-green-500"} flex items-center justify-center text-white font-medium`}>
                  {post.avatar}
                </div>
                <div className="ml-2">
                  <p className="font-medium text-sm">{post.author}</p>
                  <p className="text-xs text-green-600">{post.timestamp}</p>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="mt-2 text-sm">
                {post.content}
              </div>
              
              {/* Post Actions */}
              <div className="mt-3 flex items-center space-x-4 text-xs font-medium">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center ${post.isLiked ? 'text-emerald-600' : 'text-green-800 hover:text-emerald-600'} transition-colors duration-200`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill={post.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
                </button>
                <button 
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center text-green-800 hover:text-emerald-600 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {post.comments.length} {post.comments.length === 1 ? 'Comment' : 'Comments'}
                </button>
              </div>
              
              {/* Comments Section */}
              {post.isExpanded && (
                <div className="mt-3 pt-2 border-t border-green-100">
                  {/* Existing Comments */}
                  <div className="space-y-2 mb-2">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex items-start">
                        <div className={`w-6 h-6 rounded-full ${avatarColors[comment.avatar] || "bg-green-500"} flex items-center justify-center text-white text-xs font-medium mt-1`}>
                          {comment.avatar}
                        </div>
                        <div className="ml-2 bg-green-50 px-3 py-2 rounded-lg text-xs flex-grow">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{comment.author}</span>
                            <span className="text-green-600 text-xs">{comment.timestamp}</span>
                          </div>
                          <p className="mt-1">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* New Comment Form */}
                  <div className="flex items-center mt-2">
                    <div className={`w-6 h-6 rounded-full ${avatarColors["Y"]} flex items-center justify-center text-white text-xs font-medium`}>
                      Y
                    </div>
                    <input
                      type="text"
                      value={newComments[post.id] || ''}
                      onChange={(e) => setNewComments({...newComments, [post.id]: e.target.value})}
                      placeholder="Add a comment..."
                      className="ml-2 flex-grow bg-green-50 text-green-800 rounded-full px-3 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-green-400"
                      onKeyPress={(e) => e.key === 'Enter' && handleCommentSubmit(post.id)}
                    />
                    <button 
                      onClick={() => handleCommentSubmit(post.id)}
                      className="ml-2 bg-green-500 hover:bg-green-600 text-white p-1 rounded-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MindfulnessForum;