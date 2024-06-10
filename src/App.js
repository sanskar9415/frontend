import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes here
import Dashboard from './components/Dashboard';
import CreateAudience from './components/CreateAudience';
import Campaigns from './components/Campaigns';
import Login from './components/Login';
import ViewAudiences from './components/viewAudiences';

const App = () => {
  return (
    <Router>
      <Routes> {/* Wrap Routes around Route components */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-audience" element={<CreateAudience />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view-audiences" component={ViewAudiences} />
      </Routes>
    </Router>
  );
};

export default App;
