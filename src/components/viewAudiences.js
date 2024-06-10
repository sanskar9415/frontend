// src/components/ViewAudiences.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAudiences = () => {
  // State to store audiences
  const [audiences, setAudiences] = useState([]);

  // Function to fetch audiences from the API
  const fetchAudiences = async () => {
    try {
      const response = await axios.get('/api/audiences'); // Adjust the API endpoint as per your backend
      setAudiences(response.data);
    } catch (error) {
      console.error('Error fetching audiences:', error);
    }
  };

  // Fetch audiences when the component mounts
  useEffect(() => {
    fetchAudiences();
  }, []);

  return (
    <div>
      <h2>View Audiences</h2>
      <div>
        {/* Render each audience */}
        {audiences.map((audience) => (
          <div key={audience.id}>
            <h3>{audience.name}</h3>
            <p>Email: {audience.email}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAudiences;
