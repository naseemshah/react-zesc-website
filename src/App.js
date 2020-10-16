import React from 'react';
import NavBar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import StatsSection from './components/StatsSecition/StatsSection';
import CoreFeaturesSection from './components/coreFeaturesSection/coreFeaturesSection';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeroSection />
        <StatsSection />
        <CoreFeaturesSection />
      </header>
    </div>
  );
}

export default App;
