import * as React from "react";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { ContactForm } from "../components/ContactForm";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";

const ContactPage = () => {
  return (
    <Layout>
      {/* <Hero height="200px" img={heroImg} title="Contact Us" body="" /> */}
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
