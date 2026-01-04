
import React from 'react';
import Hero from './components/Hero';
import GamifiedJourney from './components/GamifiedJourney';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#8BA888]/20 overflow-x-hidden">
      <Hero />
      <GamifiedJourney />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
