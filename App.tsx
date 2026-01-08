
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Alerts from './pages/Alerts';
import Setup from './pages/Setup';
import Build from './pages/Build';
import Scanner from './pages/Scanner';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/build" element={<Build />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </Router>
  );
};

export default App;
