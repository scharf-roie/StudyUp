import React from 'react';

const Register = () => (
     <form class="ui form" style={{ marginTop: 80, marginLeft: 500, marginRight: 500}}>
   <h1>Create your StudyUp Account</h1>
  <div class="field">
    <label>First Name</label>
    <input type="text" placeholder="First Name"/>
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" placeholder="Last Name"/>
  </div>
  <div class="field">
    <label>Phone Number</label>
    <input type="text" placeholder="Phone Number"/>
  </div>
  <div class="field">
    <label>Email</label>
    <input type="text" placeholder="Email"/>
  </div>
  <div class="field">
    <label>Password</label>
    <input type="text" placeholder="Password"/>
  </div>
  <div class="field">
    <label>Confirm Password</label>
    <input type="text" placeholder="Confirm Password"/>
  </div>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden"/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button class="ui button" type="submit" href='dashboard' onClick={()=>{ alert('Account Created! Good luck Studying.'); }}>Submit</button>
</form>
)

export default Register