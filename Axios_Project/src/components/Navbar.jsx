import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DiCodeigniter } from "react-icons/di";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><DiCodeigniter b/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }} navbarScrol>
            <Nav.Link href="#action1">Inbox</Nav.Link>
            <Nav.Link href="#action2">Christmas</Nav.Link>
            <NavDropdown title="Management" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Elves Department</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Gift factory
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                deer ranch
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className='font-bold'>
              Naughty Lists
            </Nav.Link>
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

export default NavScrollExample;