import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lineup } from './components/Lineup'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

function App() {
  const [isOnSale, setIsOnSale] = useState(false);

  useEffect(() => {
    // Check Sale Status
    // Logic: Sale starts on Dec 15, 2025. 
    // Debugging: Add ?mode=sale to URL to force sale mode.
    const checkStatus = () => {
      const now = new Date();
      // Using current year/month context from task
      const saleStart = new Date('2025-12-15T12:00:00');

      const params = new URLSearchParams(window.location.search);
      const mode = params.get('mode');

      if (mode === 'sale') {
        setIsOnSale(true);
      } else {
        // If current time is past sale start
        setIsOnSale(now >= saleStart);
      }
    };

    checkStatus();
  }, []);

  const scrollToLineup = () => {
    document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero isOnSale={isOnSale} onScrollToLineup={scrollToLineup} />
        <Features />
        <Lineup isOnSale={isOnSale} />
      </main>
      <Footer />
    </div>
  )
}

export default App
