import React from 'react';
import { FaUserMd } from 'react-icons/fa'; // Using doctor icon from react-icons

const StatisticsSection: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Title */}
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>
          <span style={styles.greenText}>Patients</span> Statistics
        </h2>
        <p style={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
      </div>

      {/* Statistics Cards */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <FaUserMd style={styles.icon} />
          <h3 style={styles.statNumber}>10000+</h3>
          <p style={styles.statLabel}>Patients Reached</p>
        </div>

        <div style={styles.statCard}>
          <FaUserMd style={styles.icon} />
          <h3 style={styles.statNumber}>500+</h3>
          <p style={styles.statLabel}>Doctors Connected</p>
        </div>

        <div style={styles.statCard}>
          <FaUserMd style={styles.icon} />
          <h3 style={styles.statNumber}>20%+</h3>
          <p style={styles.statLabel}>Growth Rates</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#E0F3F8',
    padding: '50px 20px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  titleContainer: {
    textAlign: 'center' as 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold' as 'bold',
  },
  greenText: {
    color: '#1DBF73',
  },
  subtitle: {
    fontSize: '16px',
    color: '#555',
  },
  statsContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  statCard: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as 'center',
    width: '200px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '32px',
    color: '#1DBF73',
    marginBottom: '10px',
  },
  statNumber: {
    fontSize: '24px',
    fontWeight: 'bold' as 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: '16px',
    color: '#555',
    marginTop: '10px',
  },
};

export default StatisticsSection;
