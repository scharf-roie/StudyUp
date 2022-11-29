import React from 'react';
import LoginForm from './Login';
import FixedMenuLayout from './navbar';
import Table from './table';
import MenuExampleSecondary from "./navbar";

const App = () => {
  return (
    <div>
     {/* <Table/> */}
      <LoginForm/>
      <FixedMenuLayout/>
      </div>
  );
};

export default App;