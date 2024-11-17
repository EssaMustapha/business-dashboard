
import React from 'react';
import Header from "./Header.jsx";;
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => (
  <div className="container">
    <Header />
    <nav>
      <Link to="/">Overview</Link>
      <Link to="/income">Income</Link>
      <Link to="/expenses">Expenses</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <div>{children}</div>
  </div>
);

export default MainLayout;
