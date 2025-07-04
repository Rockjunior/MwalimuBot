import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'sw' : 'en';
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <Router>
      <div>
        <button onClick={toggleLang} style={{ position: 'absolute', top: 10, right: 10 }}>
          {lang === 'en' ? 'Swahili' : 'English'}
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 