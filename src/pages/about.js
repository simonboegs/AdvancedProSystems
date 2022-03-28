import * as React from "react";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { People } from "../components/aboutPage/People";
import { Footer } from "../components/Footer";
import imgSection1 from "../images/hero-portrait-01.jpg";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import { Section } from "../components/Section";
import imgSection2 from "../images/random3.jpeg";
import { Layout } from "../components/Layout";

const content = {
  section1: (
    <div>
      <h2>APS help optimize your bioprocessing</h2>
      <p>
        Founded in 2017 after more than 30 years of experience providing installation, calibration
        and integration services.
      </p>
      <p>Our systems are designed to optimize our customers’ processes.</p>
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
    </Layout>
  );
};

export default AboutPage;
