import React from 'react';
import NavBar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import StatsSection from './components/StatsSecition/StatsSection';
import CoreFeaturesSection from './components/coreFeaturesSection/coreFeaturesSection';
import TokenomicsSection from './components/tokenomicsSection/TokenomicsSection'
import NewsletterSection from './components/NewsLetterSection/NewsLetterSection'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <HeroSection />
      <StatsSection />
      <CoreFeaturesSection />
      <TokenomicsSection />
      <NewsletterSection />
    </div>
  );
}

export default App;
