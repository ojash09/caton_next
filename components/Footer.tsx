import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h3 style={styles.title}>About</h3>
          <p style={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div style={styles.socialIcons}>
            <FaFacebookF style={styles.icon} />
            <FaTwitter style={styles.icon} />
            <FaInstagram style={styles.icon} />
            <FaYoutube style={styles.icon} />
          </div>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.title}>Quick Links</h3>
          <ul style={styles.list}>
            <li><Link href="/symptoms" style={styles.link}>Symptoms</Link></li>
            <li><Link href="/prevention" style={styles.link}>Prevention</Link></li>
            <li><Link href="/faqs" style={styles.link}>FAQs</Link></li>
            <li><Link href="/about-coronavirus" style={styles.link}>About Coronavirus</Link></li>
            <li><Link href="/contact" style={styles.link}>Contact Us</Link></li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.title}>Helpful Links</h3>
          <ul style={styles.list}>
            <li><Link href="/healthcare-professional" style={styles.link}>Healthcare Professional</Link></li>
            <li><Link href="/lgu-facilities" style={styles.link}>LGU Facilities</Link></li>
            <li><Link href="/protect-family" style={styles.link}>Protect Your Family</Link></li>
            <li><Link href="/world-health" style={styles.link}>World Health</Link></li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.title}>Resources</h3>
          <ul style={styles.list}>
            <li><Link href="https://www.who.int" style={styles.link}>WHO Website</Link></li>
            <li><Link href="https://www.cdc.gov" style={styles.link}>CDC Website</Link></li>
            <li><Link href="https://www.gov.com" style={styles.link}>Gov Website</Link></li>
            <li><Link href="https://www.doh.gov" style={styles.link}>DOH Website</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#A8D5B3',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  footerContainer: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerSection: {
    flex: 1,
    marginRight: '20px',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: '#6B47DC',
    textDecoration: 'none',
    marginBottom: '10px',
    display: 'block',
  },
  socialIcons: {
    display: 'flex',
    marginTop: '10px',
  },
  icon: {
    fontSize: '24px',
    color: '#555',
    marginRight: '10px',
    cursor: 'pointer',
  },
};

export default Footer;
