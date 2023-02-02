import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'




export default function NewsNavbar(setSearchId) {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><Link to="/" className="nav-link">News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/newsPage/general" className="nav-link">General</Link>
            <Link to="/newsPage/science" className="nav-link">Science</Link>
            {/* <Link to="/newsPage/health" className="nav-link">Health</Link> */}
            <Link to="/newsPage/tech" className="nav-link">Tech</Link>
            <Link to="/newsPage/sports" className="nav-link">Sports</Link>
            <Link to="/newsPage/travel" className="nav-link">travel</Link>
            <Link to="/newsPage/entertainment" className="nav-link">Entertainment</Link>
            <Link to="/newsPage/politics" className="nav-link">Politics</Link>
            <Link to="/newsPage/food" className="nav-link">food</Link>
            <Link to="/newsPage/business" className="nav-link">Business</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
