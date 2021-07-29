import * as React from "React";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { CardGroup } from "../components/homePage/CardGroup";
import { CredentialGroup } from "../components/homePage/CredentialGroup";
import { Section1 } from "../components/servicesSections/Section1";
import { Section2 } from "../components/servicesSections/Section2";
import { Section3 } from "../components/servicesSections/Section3";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";


const ServicesPage = () => {
  return (
    <div className="container-fluid">
    <div className="container-sm">
      <NavBar />
    </div>
    <Hero 
        height="200px" 
        img={heroImg} 
        title="Services and Support" 
        body="" 
        marginBottom={padding}
      />
    <div className="container-sm">
      <Section1 padding="40px"/>
      <Section2 padding="40px"/>
      <Section3 padding="40px"/>
    </div>
  </div>
  );
};

export default ServicesPage;
