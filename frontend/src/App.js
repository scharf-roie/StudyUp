import React from 'react';
import LoginForm from './Login';
import FixedMenuLayout from './navbar';
import MenuExampleSecondary from "./navbar";

const App = () => {
  return (
    <div>
      <LoginForm/>
      <FixedMenuLayout/>
      </div>
  );
};

export default App;