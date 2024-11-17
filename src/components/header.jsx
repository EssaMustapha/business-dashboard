// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Business Dashboard</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  },
};

export default Header;
