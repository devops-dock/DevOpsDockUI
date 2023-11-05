// src/pages/Home/Home.js

import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home container mt-5">
      <h1 className="display-4">Welcome to DevOpsDocker</h1>
      <p className="lead">DevOpsDocker is your one-stop solution for DevOps utilities. Explore our networking tools, CIDR calculators, and much more to streamline your DevOps workflows.</p>
      {/* Add more content about features here */}
    </div>
  );
}

export default Home;