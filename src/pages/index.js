import * as React from "react";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { CardGroup } from "../components/homePage/CardGroup";
import { CredentialGroup } from "../components/homePage/CredentialGroup";
import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { Section } from "../components/Section";
import heroImg from "../images/hero-home-01a-big.jpg";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";

export const padding = "40px";

const content = {
  section1: (
    <div>
      <h2>Why choose Advanced Processing Systems?</h2>
      <p>
        Advanced Process Systems, LLC is dedicated to provide professional services for
        installations, calibrations, and validations of major systems, to include GMP, process
        systems and lab equipment. We are factory trained and qualified by companies such as
        Sonotec, Hamilton, BlueSens and SecureCell.
      </p>
    </div>
  ),
  section2: (
    <div>
      <h2>Prompt. Reliable. Honest. Professional.</h2>
      <p>
        You can depend on our engineers to provide quality service and be confident that your
        equipment is calibrated accurately.
      </p>
    </div>
  ),
};

const HomePage = () => {
  return (
    <Layout footerBgColor="rgb(255, 255, 255, .5)">
      <Hero
        height="400px"
        img={heroImg}
        title="Advanced Processing Systems - Complete Service Bioprocessing Solutions"
        body="We provide complete service solutions for your bioprocessing needs."
      />
      <CardGroup bgColor="rgb(230, 255, 253, .2)" imgHeight="200px" />
      {/* <CardGroup imgHeight="200px" /> */}
      <Section
        bgColor="rgb(255, 255, 255, .5)"
        img={heroImg}
        imgSide="left"
        imgCols="7"
        content={content.section1}
      />
      <CredentialGroup bgColor="" height="400px" />
      <Section
        bgColor="rgb(255, 255, 255, .5)"
        img={heroImg}
        imgSide="right"
        imgCols="7"
        content={content.section2}
      />
    </Layout>
    
  );
};

export default HomePage;
