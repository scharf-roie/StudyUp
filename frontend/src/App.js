import React from 'react';
import LoginForm from './pages/Login';
import FixedMenuLayout from './navbar';

import MenuExampleSecondary from "./navbar";
import Register from './pages/Register';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div>
        <div className="cards">
          <Routes>
            <Route
              path="/home"
              element={<Home/>}
            />
          </Routes>
          <Routes>
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
          <Routes>
            <Route
              path="/login"
              element={<LoginForm />}
            />
          </Routes>
        </div>
        <FixedMenuLayout/>
      </div>
    </Router>
  )
}
export default App;