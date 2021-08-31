import * as React from "react";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { People } from "../components/aboutPage/People";
import { Footer } from "../components/Footer";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import { Section } from "../components/Section";
import imgSection1 from "../images/random1.jpeg";
import imgSection2 from "../images/random3.jpeg";
import { Layout } from "../components/Layout";

const content = {
  section1: (
    <div>
      <h2>Our Goal</h2>
      <p>
        Our mission is to lead in calibrations and validations services all around the USA. Our
        experience and super qualified engineers help to ensure that our customers produce safe and
        effective products -- confident that they received accurate and traceable calibrations.
      </p>
    </div>
  ),
  section2: (
    <div>
      <h2>We Want To Help Your Process!</h2>
      <p>Talk to us! We help keep your systems running smoothly and efficiently.</p>
    </div>
  ),
};

const AboutPage = () => {
  return (
    <Layout>
      <Hero height="200px" img={heroImg} title="About Us" body="" marginBottom={padding} />
      {/* <People padding="40px" /> */}
      <Section
        padding="40px"
        img={imgSection1}
        imgSide="left"
        imgCols="7"
        content={content.section1}
      />
      <Section
        padding="40px"
        img={imgSection2}
        imgSide="right"
        imgCols="7"
        content={content.section2}
      />
    </Layout>
  );
};

export default AboutPage;
