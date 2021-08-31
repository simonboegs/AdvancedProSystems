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
        Sonotec, Solaris, Flotek and Hamilton.
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
    <Layout>
      <Hero
        height="400px"
        img={heroImg}
        title="Advanced Processing Systems - Complete Service Bioprocessing Solutions"
        body="We provide complete service solutions for your bioprocessing needs."
      />
      <CardGroup bgColor="" imgHeight="200px" />
      <Section img={heroImg} imgSide="left" imgCols="7" content={content.section1} />
      <CredentialGroup height="400px" />
      <Section img={heroImg} imgSide="right" imgCols="7" content={content.section2} />
    </Layout>
  );
};

export default HomePage;
