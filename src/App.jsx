import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import HeroSection from "./components/Hero";
import ChatWrapper from "./components/chatWrapper";
import CommunityForum from "./components/communityChat";
import ProfilesPage from "./components/CommDoc";

const App = () => {
  return (
    <Router>
      {/* <Navbar />
      <HeroSection />
      <ChatWrapper /> */}
      {/* <CommunityForum/> */}
      <ProfilesPage />
    </Router>
  );
};

export default App;
