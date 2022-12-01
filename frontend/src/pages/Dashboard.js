import React from 'react';
import Table from '../table';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
} from 'semantic-ui-react'
const Dashboard = () => (
    <>
    <div style={{marginTop: 70}}>
        <Table/>
    </div>
    <h1 style={{top: '-550px',
    left: '-155px',
    display: 'flex',
    flexFlow: 'column wrap',
    position: 'relative',
    alignContent: 'flex-end',}}>Notifications</h1>
    <div style={{top: '-550px', right: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    position: 'relative',
    alignContent: 'flex-end',}}>
        <div class="ui cards" style={{flexDirection: 'column'}}>
  <div class="card">
    <div class="content">
    <Image size='mini' src='elyse.png' style={{top: '20px', left: '220px', position: 'relative',}}/>
      <div class="header">
        Elliot Fu
      </div>
      <div class="meta">
        Friends of Veronika
      </div>
      <div class="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
    <Image size='mini' src='jenny.jpg' style={{top: '20px', left: '220px', position: 'relative'}}/>      <div class="header">
        Jenny Hess
      </div>
      <div class="meta">
        New Member
      </div>
      <div class="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
)

export default Dashboard