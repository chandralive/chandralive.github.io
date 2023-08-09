import React from 'react';
import teamMember1 from '../images/team/team-member-1.jpg';
import teamMember2 from '../images/team/team-member-2.jpg';
import teamMember3 from '../images/team/team-member-3.jpg';
import '../styles/CompanyDesc.css'; // Import the CSS file for CompanyDescription styles

const CompanyDescription = () => {
  return (
    <section id="bpx" className="company-section">
      <div class="box" id="box">
        <div className="container">
          <h2 className="company-title">About Us</h2>
          <p className="company-text">
            Chandra is a modern web design and branding company that specializes in bringing local businesses to the digital sphere. We believe in the power of creative and effective online presence to drive growth and success for our clients.
          </p>
          <p className="company-text">
            With our team of talented designers and marketers, we create captivating websites, implement effective digital marketing strategies, and develop strong branding solutions that resonate with your target audience.
          </p>
          <p className="company-text">
            At Chandra, we are passionate about helping businesses thrive in the digital world. Let us be your partner in establishing a strong online presence that sets you apart from the competition.
          </p>
          <div className="team-section">
            <h3 className="team-title">Our Team</h3>
            <div className="team-members">
              <div className="team-member">
                <img src={teamMember1} alt="Team Member 1" className="team-member-image" />
                <h4 className="team-member-name">Justin Moonjeli</h4>
                <p className="team-member-role">CEO & Web Deployment Lead</p>
              </div>
              <div className="team-member">
                <img src={teamMember2} alt="Team Member 2" className="team-member-image" />
                <h4 className="team-member-name">Dara Dawodu</h4>
                <p className="team-member-role">Head of Design & Automation</p>
              </div>
              <div className="team-member">
                <img src={teamMember3} alt="Team Member 3" className="team-member-image" />
                <h4 className="team-member-name">Bob Smith</h4>
                <p className="team-member-role">Marketing Coordinator</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
