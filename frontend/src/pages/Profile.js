import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Profile = () => (
  <div>
<div class="ui card" style={{marginTop: '100px', marginLeft: '40px'}}>
  <div class="image">
  <Image size='extra-large' src='kristy.png' />
  </div>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="date">Joined in 2022</span>
    </div>
    <div class="description">
      Kristy is a first year computer engineering major at the Univeristy of Florida.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
<div class="ui card" style={{marginTop: '-460px', marginLeft: '330px'}}>
<h1 style={{marginTop: '10px', marginLeft: '5px'}}>Classes</h1>
  <h2 style={{marginTop: '-10px', marginLeft: '20px'}}>Programming Fundamentals 1</h2>
  <h2 style={{marginTop: '-10px', marginLeft: '20px'}}>Discrete Structures</h2>
  <h2 style={{marginTop: '-10px', marginLeft: '20px'}}>Computer Organization</h2>
  <h2 style={{marginTop: '-10px', marginLeft: '20px'}}>Chemistry 1</h2>
  <h1 style={{marginTop: '10px', marginLeft: '5px'}}>Major</h1>
  <h2 style={{marginTop: '-10px', marginLeft: '20px'}}>Computer Engineering</h2>
  <h1 style={{marginTop: '10px', marginLeft: '5px'}}>Year</h1>
  <h2 style={{marginTop: '-10px', marginLeft: '20px', marginBottom: '40px'}}>Freshman</h2>
  </div>
  
  </div>
)

export default Profile