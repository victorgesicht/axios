import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DiCodeigniter } from "react-icons/di";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-white border border-separate border-b-2 border-black">
      <Container fluid>
        <Navbar.Brand href="#"><DiCodeigniter/>Santa's diary.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link Link="/" className='font-semibold'>Home</Nav.Link>
            <Nav.Link Link="/">About</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Contact me
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;