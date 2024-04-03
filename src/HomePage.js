import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/ar-services">Using AR services on mobile phones</Link>
    </div>
  );
};

export default HomePage;
