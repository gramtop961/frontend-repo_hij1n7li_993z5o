import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkAndContact from './components/WorkAndContact';

function App() {
  return (
    <div className="scroll-smooth bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <WorkAndContact />
    </div>
  );
}

export default App;
