import * as React from "react";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { People } from "../components/aboutPage/People";
import { Section1 } from "../components/aboutPage/Section1";
import { Section2 } from "../components/aboutPage/Section2";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";


const AboutPage = () => {
  return (
    <div className="container-fluid">
    <div className="container-sm">
      <NavBar />
    </div>
    <Hero 
        height="200px" 
        img={heroImg} 
        title="About Us" 
        body="" 
        marginBottom={padding}
      />
    <div className="container-sm">
      <People padding="40px"/>
      <Section1 padding="40px"/>
      <Section2 padding="40px"/>
    </div>
  </div>
  );
};

export default AboutPage;
