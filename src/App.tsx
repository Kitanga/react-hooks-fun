import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Route, Routes } from 'react-router-dom';
import Liked from './routes/Liked';
import Home from './routes/Home';

function App() {
  return (
    <div id='app'>
      <nav className="navbar is-black is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <NavLink to="/" className="navbar-item nav-no-hover-bg" style={{
              fontFamily: "monospace",
            }}>Newflix</NavLink>
          </div>

          <div className="navbar-end">
            <NavLink to="/liked" className="navbar-item nav-no-hover-bg">
              <FontAwesomeIcon icon={faHeart} className="has-text-danger" />
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default App;
