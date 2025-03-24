import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
// Import Components
import Home from './Home';
import Chatbot from './Chatbot';
import Notes from './Notes';
import Discussion from './Discussion';
import Teacher from './Teacher';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chatbot">Chatbot</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/discussion">Discussion</Link></li>
            <li><Link to="/teacher">AI Teacher</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
