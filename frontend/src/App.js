import React from 'react';
import LoginForm from './Login';
import FixedMenuLayout from './navbar';
import MenuExampleSecondary from "./navbar";

const App = () => {
//function App () {

  // function handleCallbackResponse(response){
  //   console.log("Encoded JWT ID token: " + response.credential);
  // }

  // useEffect(() => {
  //   /* global google*/
  //   google.accounts.id.initialize({
  //     client_id: "344740471658-vb65l37ooa6q139og1aifau3p14vvq0k.apps.googleusercontent.com";
  //     callback: handleCallbackResponse
  //   })

  //   google.accounts.id.renderButton(

  //     document.getElementById("signInDiv"),
  //     {
  //     theme: "outline", size: "large"
  //     }
  //     )

  // }, []);

  return (
    <div>
      <LoginForm/>
      <FixedMenuLayout/>
      </div>
  );
};

export default App;