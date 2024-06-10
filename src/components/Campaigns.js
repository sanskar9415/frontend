import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await api.get('/campaigns');
      setCampaigns(response.data);
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            {campaign.message} - {campaign.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Campaigns;
