import React from 'react'
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
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='logo512.png' style={{ marginRight: '1.5em' }} />
          StudyUp
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Profile'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '3em' }}>
    <Header as='h1'>
    <Image size='extra-large' src='logo512.png' style={{ marginRight: '0.50em', marginTop: '-0.5em' }} />
      StudyUp</Header>
      <p>StudyUp is a platform created and designed to help college students thrive in their social and academic lives. </p>
      <p>
      Find personalized study groups based on your academics and interests. We can't wait for you to join.
      </p>

      {/* <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} /> */}
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Study Resources' />
            <List link inverted>
              <List.Item as='a'>Tutoring</List.Item>
              <List.Item as='a'>Test Prep</List.Item>
              <List.Item as='a'>Study Groups</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Socials' />
            <List link inverted>
              <List.Item as='a'>Coffee Study Sessions</List.Item>
              <List.Item as='a'>Library Groups</List.Item>
              <List.Item as='a'>Study Spots</List.Item>
              <List.Item as='a'>Class Groups</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Mental Help' />
            <List link inverted>
              <List.Item as='a'>GatorWell</List.Item>
              <List.Item as='a'>Motivational Messages</List.Item>
              <List.Item as='a'>UF CARES</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='StudyUp' />
            <p>
              Here at StudyUp we are rooting for your success academically and menatlly.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo512.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout