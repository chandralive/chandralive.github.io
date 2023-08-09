import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className='navbar'>
    <nav className="navbar">
      
      <div className='mottobox'>
        <h1 className="motto" onClick={scrollToTop}>
          Chandra
        </h1>
      </div>
      <div className="nav-links">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spyOffset={-70}
        >
          About
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spyOffset={-70}
        >
          Services
        </Link>
        <Link
          to="pricing"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spyOffset={-70}
        >
          Pricing
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spyOffset={-70}
        >
          Contact
        </Link>
      </div>
      
    </nav>
    </div>
  );
};

export default Header;
