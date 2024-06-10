import React, { useState } from 'react';
import api from '../services/api';

const CreateAudience = () => {
  const [rules, setRules] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  const addRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const handleChange = (index, field, value) => {
    const newRules = [...rules];
    newRules[index][field] = value;
    setRules(newRules);
  };

  const checkAudience = async () => {
    try {
      const response = await api.post('/', { rules });
      console.log("Backend Response:", response.data);
      setCustomers(response.data);
    } catch (error) {
      setError("An error occurred while checking audience.");
    }
  };

  return (
    <div>
      <h2>Create Audience</h2>
      {rules.map((rule, index) => (
        <div key={index}>
          <select onChange={(e) => handleChange(index, 'field', e.target.value)}>
            <option value="totalSpends">Total Spends</option>
            <option value="maxVisits">Max Visits</option>
            <option value="lastVisit">Last Visit</option>
          </select>
          <select onChange={(e) => handleChange(index, 'operator', e.target.value)}>
            <option value="$gt">Greater than</option>
            <option value="$lt">Less than</option>
            <option value="$eq">Equal to</option>
          </select>
          <input type="text" onChange={(e) => handleChange(index, 'value', e.target.value)} />
        </div>
      ))}
      <button onClick={addRule}>Add Rule</button>
      <button onClick={checkAudience}>Check Audience</button>
      {error && <div>Error: {error}</div>}
      {customers.length > 0 && (
        <div>
          <h3>Customers:</h3>
          <ul>
            {customers.map((customer, index) => (
              <li key={index}>{customer.name} - {customer.email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateAudience;
