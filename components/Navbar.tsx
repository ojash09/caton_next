import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="/assets/logo-no-background.png" alt="logo" style={styles.logo} />
      </div>
      <div style={styles.linksContainer}>
        <Link href="/" style={styles.link}>Home</Link> 
        <Link href="/services" style={styles.link}>Services</Link> 
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/contact" style={styles.link}>Contact us</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9DDAB9',
    padding: '10px 20px',
    borderBottom: '2px solid #318baf',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
    marginLeft: '10px'
  },
  linksContainer: {
    display: 'flex',
    gap: '70px',
    paddingRight:'200px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#000',
  },
};

export default Navbar;
