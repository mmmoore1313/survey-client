import React, { Fragment } from 'react'
import { Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap'

const authenticatedOptions = (
  <Fragment>
    <DropdownButton id='userMenu' title='userOptions'>
      <Dropdown.Item href="#change-password">Change Password</Dropdown.Item>
      <Dropdown.Item href="#sign-out">Sign Out</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id='surveyMenu' title='surveyOptions'>
      <Dropdown.Item href="#create-survey">Make Survey</Dropdown.Item>
      <Dropdown.Item href="#surveys">View All Surveys</Dropdown.Item>
    </DropdownButton>
    <DropdownButton alignRight id='cheeseWheelMenu' title='Cheese Plate'>
      <Dropdown.Item href='#create-cheesewheel'>Make Me a CheeseWheel</Dropdown.Item>
      <Dropdown.Item href="#cheesewheels">Your Cheese Plate</Dropdown.Item>
    </DropdownButton>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
    <Nav.Link href="#take-survey">Take A Survey</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      SurveyUs
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
