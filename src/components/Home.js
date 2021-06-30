import React from "react";
import NavBarC from "./Navbar";
import About from "./About";
import Skills from './Skills';
import Experience from "./Experience";
import Projects from './Projects';
//import Presentations from './Presentations';
import Contact from './Contact';
import Footer from './Footer';

const Home = props => {
    return (
        <div>
             <NavBarC />
             
             <About/>
             <br/>
             <Skills/>
             <br/>
             <Experience/>
             <br/>
             <Projects/>
             <br/>
             {/* <Presentations/>
             <br/> */}
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