import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NewsNavbar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><Link to="/" className="nav-link">News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/newsPage/sports" className="nav-link">Sports</Link>
            <Link to="/newsPage/world" className="nav-link">World</Link>
            <Link to="/newsPage/entertainment" className="nav-link">Entertainment</Link>
            <Link to="/newsPage/politics" className="nav-link">Politics</Link>
            <Link to="/newsPage/us" className="nav-link">U.S.</Link>
            <Link to="/newsPage/business" className="nav-link">Business</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
