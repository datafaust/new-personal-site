import React, { Component } from "react";
import {
  Row,
  Col,
  Carousel
} from "react-bootstrap";
import NavBarC from "./Navbar";
import About from "./About";
import Experience from "./Experience";

const Home = props => {
    return (
        <div>
             <NavBarC />
             <About/>
             <Experience/>
             
        </div>
    );
};


export default Home;