// Contact.js
import React from 'react';
import '../styles/Contact.css'; // Import the CSS file for Contact styles

const Contact = () => {
    return (
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-text">
            Interested in our services? Let's discuss how we can help your business succeed in the digital sphere.
          </p>
          <div className="contact-details">
            <p>Email: info@chandra.one</p>
            <p>Phone: +1 (678) 580-7377</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
