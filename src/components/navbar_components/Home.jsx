import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import Navbar from "../Navbar";
// import Herosection from "../background/herosection";
import Herosection from "../background/Herosection"
import Footer from "../Footer" ;
import Contact from "../navbar_components/Contact"
const Home = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
       <>
       <Navbar/>
       <Herosection/>
       <Footer/>
       </>
    )
}

export default Home
