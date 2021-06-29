import React, { Component } from 'react'
import {
  Navbar, Nav,
  //NavItem,
  //NavDropdown
} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import logo from '../assets/tennis-ball.png';
import classes from './navbar.module.css';
import Scroll from 'react-scroll';

import resume from '../assets/fausto-lopez-resume.pdf';

const Link = Scroll.Link;



class NavBarC extends Component {
  render() {
    return (
      <div>
        <Navbar className="fixed-top" collapseOnSelect expand="lg" style={{ backgroundColor: '#485671' }} variant="dark">
          <Navbar.Brand href="#home" className={classes.title}>Fausto Lopez</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link activeClass="" to="about" spy={true} smooth={true} duration={500} offset={-60}>About</Link>
              </Nav.Link>
            </Nav>
            {/**RESUME **/}
            <Nav>
           
              <Nav.Link href={resume} download="fausto-lopez-resume.pdf">
          
                Resume
             
              </Nav.Link>       
            </Nav>
            {/**PROJECTS **/}
            <Nav>
              <Nav.Link>
                <Link activeClass="" to="projects" spy={true} smooth={true} duration={500} offset={-60}>Projects</Link>
              </Nav.Link>
            </Nav>
            {/*CONTACT ME*/}
            <Nav>
              <Nav.Link>
                <Link activeClass="" to="contact" spy={true} smooth={true} duration={500} offset={-60}>Contact Me</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBarC;