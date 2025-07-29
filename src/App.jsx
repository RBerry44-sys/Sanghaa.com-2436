import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <LandingPage />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;