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
      <h2>APS helps optimize your bioprocesses in the laboratory and in the plant</h2>
      <p>
        APS was founded in 2017 with 35+ years experience providing installation, calibration, and integration services.
      </p>
      <p>
        Our systems are designed for scalability across platforms to optimize and control our customers’ bio processes. 
        Through our expertise in instrumentation, calibration and maintenance, we design, build, integrate, and modify systems that get you results quickly while effectively maintaining and managing with predictable expenditures and budget. 
        Customers rely on us to help keep their laboratory assets productive and rapidly scale their processes. 
        We do this by providing expertise in the design and optimization of your upstream and downstream processes, and then specifying the components and equipment that best help you achieve those goals.
      </p>
      <p>
        We do this in partnership with leaders in laboratory and industrial bioprocess instruments, sensors, software, and equipment.
      </p>
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
