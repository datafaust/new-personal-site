import React, { Component } from "react";
import {
  Row,
  Col,
  Carousel
} from "react-bootstrap";
import NavBarC from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = props => {
    return (
        <div>
             <NavBarC />
             
             <About/>
             <br/>
             <Experience/>
             <br/>
             <Projects/>
             <br/>
             <Contact />
             <br/>
             <br/>
             <br/>
             <br/>
             <Footer />
             <br/>
        </div>
    );
};


export default Home;