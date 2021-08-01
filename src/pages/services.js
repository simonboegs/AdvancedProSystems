import * as React from "react";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { CardGroup } from "../components/homePage/CardGroup";
import { CredentialGroup } from "../components/homePage/CredentialGroup";
import { Section } from "../components/Section";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import imgSection1 from "../images/random2.jpg";
import imgSection2 from "../images/hero-services-01a.jpg";
import imgSection3 from "../images/card1-01a.jpg";

const content = {
  section1: (
    <div>
      <h2>Installations, Calibrations, and Validations</h2>
      <p>
        Our calibration and validation services cover the entire spectrum of processes in your
        facility – from analytical to process calibrations and validations.
      </p>
      <p>
        Our field engineers offer accurate, reliable calibrations and validations that can respond
        to your specific needs and requirements.
      </p>
      <p>
        Most equipment can be serviced on-site. For equipment that requires highly sensitive
        calibration devices, items can be sent to one of our controlled laboratories were our field
        engineers will perform calibrations and validations.
      </p>
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
        <li class="list-group-item border-0">
          Same-day or next-day services, or will perform calibrations at our controlled laboratory.
        </li>
        <li class="list-group-item border-0">
          Customized certificates to meet your business's unique requirements.{" "}
        </li>
        <li class="list-group-item border-0">
          Program management services including documentation, certificate management, and
          maintenance scheduling.
        </li>
      </ul>
    </div>
  ),
  section3: (
    <div>
      <h2>Bioprocessing Equipment</h2>
      <p>Advanced Process Systems knows where all the equipment is!</p>
    </div>
  ),
};

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
        <Section
          padding="40px"
          img={imgSection3}
          imgSide="left"
          imgCols="7"
          content={content.section3}
        />
      </div>
    </div>
  );
};

export default ServicesPage;
