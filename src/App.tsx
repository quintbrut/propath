import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { GamePage } from './pages/GamePage';
import { LanguageSwitcher } from './components/LanguageSwitcher';

const AppContent = () => {
  const location = useLocation();
  const showLanguageSwitcher = location.pathname !== '/login';

  return (
    <div className="min-h-screen w-full">
    
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
        {/* Перенаправляем корневой путь на /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;