import React from 'react';
import { FaSearch, FaInfoCircle } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Top Buttons */}
      <div style={styles.topButtons}>
        <button style={styles.button}>Book your Appointment</button>
        <button style={styles.button}>Organize Medical Records</button>
      </div>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input 
          type="text" 
          placeholder="Search by your city" 
          style={styles.searchInput} 
        />
        <FaSearch style={styles.searchIcon} />
      </div>

      {/* Cards */}
      <div style={styles.cardsContainer}>
        {['Kolkata', 'Ahmedabad', 'Banaras', 'Nagpur'].map((city) => (
          <div key={city} style={styles.card}>
            <div style={styles.cardHeader}>
              <FaInfoCircle style={styles.infoIcon} />
              <h3 style={styles.cityName}>{city}</h3>
            </div>
            <p style={styles.cardBody}>
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
            <button style={styles.cardButton}>Button</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#E0F3F8',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  topButtons: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '15px 40px',
    backgroundColor: '#0033cc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: '#000',
    margin: '30px 0',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  searchInput: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '300px',
    fontSize: '16px',
  },
  searchIcon: {
    marginLeft: '-30px',
    color: '#555',
    cursor: 'pointer',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  card: {
    backgroundColor: '#A9D8E5',
    padding: '20px',
    borderRadius: '8px',
    width: '280px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  infoIcon: {
    color: '#333',
    fontSize: '24px',
    marginRight: '10px',
  },
  cityName: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  cardBody: {
    color: '#333',
    marginBottom: '20px',
  },
  cardButton: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#e7dfdff5',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HomePage;
