// src/components/MainLayout.jsx
import React from 'react';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default MainLayout;
