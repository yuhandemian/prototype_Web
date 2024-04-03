import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ArServicePage from './ArServicePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navigation Bar would go here */}
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ar-services" element={<ArServicePage />} />
        </Routes>

        <aside className="App-aside">
          {/* Sidebar content */}
          <p>Ask me! My name is Warnie</p>
          {/* ... Other content ... */}
        </aside>

        <footer className="App-footer">
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
