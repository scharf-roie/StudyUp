import React from 'react';
import LoginForm from './pages/Login';
import Dashboard from './pages/Dashboard';
import FixedMenuLayout from './navbar';

import MenuExampleSecondary from "./navbar";
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
function App() {
  return (
    <Router> 
      <div>
        <div className="cards">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
          </Routes>
          <Routes>
            <Route
              path="/Register"
              element={<Register />}
            />
          </Routes>
          <Routes>
            <Route
              path="/Login"
              element={<LoginForm />}
            />
          </Routes>
          <Routes>
            <Route
              path="/Dashboard"
              element={<Dashboard />}
            />
          </Routes>
          <Routes>
            <Route
              path="/Profile"
              element={<Profile />}
            />
          </Routes>
          <Routes>
            <Route
              path="/Settings"
              element={<Settings />}
            />
          </Routes>
        </div>
        <FixedMenuLayout/>
      </div>
    </Router>
  )
}
export default App;