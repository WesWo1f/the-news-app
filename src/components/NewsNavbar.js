import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'
import SearchBar from './SearchBar';
import logo from '../Images/Simply News Now-1 (1).png'

export default function NewsNavbar({setSearchId}) {
  return (
    <>
    <div className='navbar-container'>
      <div className='brand-and-links' >
      <img className='logo' src={logo} alt="Logo" />
        <Navbar.Brand><Link className='nav-brand' to="/"></Link></Navbar.Brand>
      </div>
      <div className='brand-and-links'>
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <div className="nav-links-container">
                <div className="nav-links">
                  <Link to="/newsPage/general" className="nav-link">General</Link>
                  <Link to="/newsPage/science" className="nav-link">Science</Link>
                  <Link to="/newsPage/tech" className="nav-link">Tech</Link>
                  <Link to="/newsPage/sports" className="nav-link">Sports</Link>
                  <Link to="/newsPage/travel" className="nav-link">Travel</Link>
                  <Link to="/newsPage/entertainment" className="nav-link">Entertainment</Link>
                  <Link to="/newsPage/politics" className="nav-link">Politics</Link>
                  <Link to="/newsPage/business" className="nav-link">Business</Link>
                </div>
                <SearchBar className='search-bar' setSearchId={setSearchId} />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
    </>
  )
}
