import * as React from "React";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { CardGroup } from "../components/homePage/CardGroup";
import { CredentialGroup } from "../components/homePage/CredentialGroup";
import { FAQAccordian } from "../components/homePage/FAQAccordian";
import heroImg from "../images/hero-home-01a-big.jpg";

export const padding = "40px";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="container-sm">
        <NavBar />
      </div>
      <Hero 
        height="400px" 
        img={heroImg} 
        title="Advanced Processing Systems - Complete Service Bioprocessing Solutions" 
        body="We provide complete service solutions for your bioprocessing needs." 
        marginBottom={padding}
      />
      <div className="container-sm">
        <CardGroup imgHeight="200px" padding={padding}/>
        <CredentialGroup height="400px" padding={padding}/>
        <FAQAccordian height="800px" padding={padding}/>
      </div>
    </div>
  );
};

export default HomePage;
