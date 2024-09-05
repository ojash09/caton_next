import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome user!</h1>
        <p style={styles.description}>
          At caton, you can book clinic appointments with the best doctors in any location and manage your health records.
        </p>
        <button style={styles.button}>Let's Explore</button>
      </div>
      <div style={styles.imageContainer}>
        <img src="/assets/undraw_medicine.svg" alt="Healthcare illustration" style={styles.image} />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9DDAB9',
    padding: '20px',
    height:'500px'
  },
  textContainer: {
    flex: 1,
    paddingRight: '20px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#000',
    marginLeft:'62px' ,
  },
  description: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#333',
    marginBottom: '20px',  
    paddingLeft:'62px' ,

  },
  button: {
    backgroundColor: '#172dd4',
    color: '#fff',
    fontSize: '18px',
    padding: '10px 30px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '62px'
    
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
  },
};

export default WelcomeSection;
