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
      {/* <form name="contact" netlify hidden>
        <input type="radio" name="option1"></input>
        <input type="radio" name="option1"></input>
        <input type="radio" name="option1"></input>
        <input type="radio" name="option1"></input>
        <input name="name"></input>
        <input name="phone"></input>
        <input name="email"></input>
      </form> */}
      <form name="yo" netlify>
        <input type="hidden" name="form-name" value="yo"></input>
        <input name="input1"></input>
      </form>
    </Layout>
  );
};

export default ContactPage;
