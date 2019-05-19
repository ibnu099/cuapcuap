import React from 'react'
import {Nav, 
        Navbar, 
        NavDropdown, 
        Form, 
        FormControl, 
        InputGroup,
        Container} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">CuapCuap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#explore">Explore</Nav.Link>
              <Nav.Link href="#notifications">Notifications</Nav.Link>
              <Nav.Link href="#messages">Messages</Nav.Link>
            </Nav>
            <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" placeholder="Search Twitter" className="mr-sm-2" />              
              </InputGroup>
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <Nav>
              <NavDropdown title="Ibnu Gunawan" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
  )
}