import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/create-audience">Create Audience</Link>
      <Link to="/campaigns">Campaigns</Link>
      {/* <Link to="/view-audiences">
        <button>View Audiences</button>
      </Link> */}
    </div>
  );
};

export default Dashboard;
