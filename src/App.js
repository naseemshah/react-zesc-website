import React from 'react';
import NavBar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection'
import StatsSection from './components/StatsSecition/StatsSection'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeroSection />
        <StatsSection />
      </header>
    </div>
  );
}

export default App;
