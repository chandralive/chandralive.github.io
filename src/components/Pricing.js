import React, { useState, useEffect } from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hovered) {
        document.querySelectorAll('.pricingbox1, .pricingbox2, .pricingbox3').forEach((box) => {
          box.style.opacity = 0.3;
        });
      }
    }, 200000);

    return () => clearTimeout(timeout);
  }, [hovered]);

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="pricing-title">Our Pricing</h2>
        <div className="pricing-grid">
          <div
            className="pricingbox1"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h3 className="pricing-tier">Standard</h3>
            <p className="pricing-price">$47/month</p>
            <p className="pricing-description">Perfect for small businesses</p>
            <li className='features'>Website Design</li>
            <li className='features'>Basic Branding </li>
            <li className='features'>System Maintenance </li>
          </div>

          <div
            className="pricingbox2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h3 className="pricing-tier">Premium</h3>
            <p className="pricing-price">$97/month</p>
            <p className="pricing-description">Ideal for growing businesses</p>
            <li className='features'>Website Design</li>
            
            <li className='features'>SEO and Analytics</li>

            <li className='features'>System Maintenance </li>
          </div>

          <div
            className="pricingbox3"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h3 className="pricing-tier">Premium+</h3>
            <p className="pricing-price">$197/month</p>
            <p className="pricing-description">All the features of Premium plus</p>
            <div classname="liststuff">
              <li className='features'>Backend Automation</li>
              <li className='features'>Brand Development </li>
              <li className='features'>Full AI Integration </li>
              <li className='features'>24/7 Security Coverage</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
