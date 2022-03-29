import * as React from "react";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { ContactForm } from "../components/ContactForm";
import { ContactFormSimple } from "../components/ContactFormSimple";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";

const ContactPage = () => {
  return (
    <Layout>
      {/* <Hero height="200px" img={heroImg} title="Contact Us" body="" /> */}
      <form hidden method="post" name="contact" netlify data-netlify="true">
        <input type="hidden" name="form-name" value="contact"></input>
        <input type="hidden" name="name"></input>
        <input type="hidden" name="phone"></input>
        <input type="hidden" name="email"></input>
        <input type="hidden" name="country"></input>
        <input type="hidden" name="region"></input>
        <input type="hidden" name="message"></input>
        <button type="submit">Submit</button>
      </form>
      <ContactForm />
      {/* <ContactFormSimple /> */}
      {/* <form name="contact" netlify hidden>
        <input type="radio" name="option1"></input>
        <input type="radio" name="option1"></input>
        <input type="radio" name="option1"></input>
        <input type="radio" name="option1"></input>
        <input name="name"></input>
        <input name="phone"></input>
        <input name="email"></input>
      </form> */}
    </Layout>
  );
};

export default ContactPage;
