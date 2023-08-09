// Services.js
import React from 'react';
import '../styles/Services.css'; // Import the CSS file for Services styles

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        {/* <div className="services-grid">
          <div className="box2">
            <h3 className="service-title">Website Design</h3>
            <p className="service-description">
              We create modern and responsive websites that reflect your brand identity and provide a seamless user experience. Our designs are tailored to engage your target audience and drive conversions.
            </p>
          </div>
          <div className="box2">
            <h3 className="service-title">Digital Marketing</h3>
            <p className="service-description">
              Our digital marketing strategies are designed to increase your online visibility, attract qualified leads, and boost your business growth. We employ various channels and techniques to optimize your digital presence.
            </p>
          </div>
          <div className="box2">
            <h3 className="service-title">Branding Solutions</h3>
            <p className="service-description">
              We help you create a strong and memorable brand presence. From logo design to brand guidelines, we ensure consistency across all touchpoints to enhance brand recognition and establish trust.
            </p>
          </div>
          <div className="box2">
            <h3 className="service-title">SEO and Analytics</h3>
            <p className="service-description">
              We implement effective SEO strategies to improve your search engine rankings and drive organic traffic to your website. Our analytics solutions provide valuable insights to optimize your online performance.
            </p>
          </div>
        </div> */}


<main class="page-content">

  {/* card 1 */}
  <div class="servicebox1">
    <div class="card">
      <div class="content">
        <h2 class="title1">Website Design</h2>
        <p class="copy">We create modern and responsive websites that reflect your brand identity and provide a seamless user experience. Our designs are tailored to engage your target audience and drive conversions.</p>
        
      </div>
    </div>
  </div>

 {/* card 2  */}
  
    <div class="card">
      <div class="content">
        <h2 class="title1">Digital Marketing</h2>
        <p class="copy">Our digital marketing strategies are designed to increase your online visibility, attract qualified leads, and boost your business growth. We employ various channels and techniques to optimize your digital presence.</p>
        
      </div>
    </div>
  

  {/* card 3  */}
 
    <div class="card">
      <div class="content">
        <h2 class="title1">Branding Solutions</h2>
        <p class="copy">We help you create a strong and memorable brand presence. From logo design to brand guidelines, we ensure consistency across all touchpoints to enhance brand recognition and establish trust.</p>
        
      </div>
    </div>

  
  {/* card 4  */}
  <div class="servicebox12">
    <div class="card">
      <div class="content">
        <h2 class="title1">SEO and Analytics</h2>
        <p class="copy">We implement effective SEO strategies to improve your search engine rankings and drive organic traffic to your website. Our analytics solutions provide valuable insights to optimize your online performance.</p>
        
      </div>
    </div>
  </div>

  
      
  

  
</main>



      </div>
    </section>
  );
}

export default Services;
