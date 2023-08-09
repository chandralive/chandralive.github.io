// App.js
import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import CompanyDescription from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './styles/App.css'; // Import any global CSS styles

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <main>
        
            <section id="Hero">
              <Hero/>
            </section>
       
         
            <section id="about">
              <CompanyDescription />
            </section>
            <section id="services">
              <Services />
            </section>
            <section id="pricing">
              <Pricing />
            </section>
            <section id="contact">
              <Contact />
            </section>
          
          
       
      </main>
    </div>
  );
}

export default App;




