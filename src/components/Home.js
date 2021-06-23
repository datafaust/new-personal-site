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

const Home = props => {
    return (
        <div>
             <NavBarC />
             
             <About/>
             <br/>
             <Experience/>
             <br/>
             <Projects/>
        </div>
    );
};


export default Home;