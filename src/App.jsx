import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import HeroSection from "./components/Hero";
import ChatWrapper from "./components/chatWrapper";
import CommunityForum from "./components/communityChat";


const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <ChatWrapper />
    </Router>
  );
};

export default App;
