import * as React from "react";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { CardGroup } from "../components/homePage/CardGroup";
import { CredentialGroup } from "../components/homePage/CredentialGroup";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import imgSection1 from "../images/random2.jpg";
import imgSection2 from "../images/hero-services-01a.jpg";
import imgSection3 from "../images/card1-01a.jpg";

const content = {
  section1: (
    <div>
      <h2>Process Consulting and Calibration</h2>
      <h3>Upstream Process Consulting</h3>
      <ul>
        <li>Bioreactor specification</li>
        <li>Sensors, Sampling solutions</li>
        <li>Automation</li>
        <li>Integration</li>
      </ul>
      <h3>Downstream Process Consulting</h3>
      <ul>
        <li>Filtration</li>
        <li>Chromatography</li>
        <li>Separations</li>
        <li>Drying</li>
      </ul>
      <h3>Calibration –instruments measuring</h3>
      <ul>
        <li>Temperature</li>
        <li>Pressure</li>
        <li>Flow</li>
        <li>Mass</li>
        <li>Optical</li>
        <li>Volumetric</li>
        <li>Dimensional</li>
      </ul>
      <h3>NIST traceable “cradle to grave” calibration</h3>
      <ul>
        <li>Performance</li>
        <li>Logging</li>
        <li>SOPs</li>
        <li>Records management</li>
      </ul>
      <h3>Validation – IOQ generation, execution and reports</h3>
    </div>
  ),
  section2: (
    <div>
      <h2>Warranty, Maintenance, and Service Plans</h2>
      <p>
        Our support/service plans provide you with prompt and courteous service engineers,
        including:
      </p>
      <ul class="list-group list-group-numbered">
        <li class="list-group-item border-0 bg-transparent">
          Same-day or next-day services, or will perform calibrations at our controlled laboratory.
        </li>
        <li class="list-group-item border-0 bg-transparent">
          Customized certificates to meet your business's unique requirements.{" "}
        </li>
        <li class="list-group-item border-0 bg-transparent">
          Program management services including documentation, certificate management, and
          maintenance scheduling.
        </li>
      </ul>
    </div>
  ),
};

const ServicesPage = () => {
  return (
    <Layout>
      <Hero
        height="200px"
        img={heroImg}
        title="Services and Support"
        body=""
        marginBottom={padding}
      />
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

export default ServicesPage;
