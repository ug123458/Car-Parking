import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
const Navbarx = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Car Parking System</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Parking</Nav.Link>
              <NavDropdown title='User' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.2'>Sign In</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Sign Out</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Navbarx
