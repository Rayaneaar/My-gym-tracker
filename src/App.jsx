import React from "react";
import Navbar from './Components/Navbar';
import LongTestPage from './Pages/testPage.jsx';
import MainHeroSection from "./Pages/HomeHeroSection.jsx";
import GlassCards from "./Components/GlassCards.jsx";
import './app.css'
export default function App() {
  return (
    <div>
      <Navbar/>
      <MainHeroSection/>
    </div>
  );
}
