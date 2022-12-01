import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export function Header(){
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link  className='nav-link' to="/users-list">UserList</Link>
                <Link  className='nav-link' to="/user/create">CreateUser</Link>
                <Link  className='nav-link' to="/car-list">CarList</Link>
                <Link  className='nav-link' to="/car/create">CreateCar</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
      }