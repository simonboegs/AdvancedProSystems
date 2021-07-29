import * as React from "react";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { People } from "../components/aboutPage/People";
import { Section1 } from "../components/aboutPage/Section1";
import { Section2 } from "../components/aboutPage/Section2";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";


const ContactPage = () => {
  return (
    <div className="container-fluid">
    <div className="container-sm">
      <NavBar />
    </div>
    <Hero 
        height="200px" 
        img={heroImg} 
        title="Contact" 
        body="" 
        marginBottom={padding}
      />
    <div className="container-sm">
      <h2>Which best describes you?</h2>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="option" id="option1"></input>
        <label class="form-check-label" for="option1">I have equipment that needs to get serviced.</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="option" id="option2"></input>
        <label class="form-check-label" for="option2">I need to plan services for equipment I do not yet have.</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="option" id="option3"></input>
        <label class="form-check-label" for="option3">I need equipment!</label>
      </div>
      <div class="input-group">
        <div class="input-group-text">
          <input class="form-check-input mt-0" type="radio" name="option" aria-label="Radio button for following text input" />
        </div>
        <input type="text" class="form-control" aria-label="Text input with radio button" placeholder="Something else - please tell us about your needs!"/>
      </div>
      <br />
      <h2>How can we reach you?</h2>
      <div>
        <label for="inputName" class="form-label">Name</label>
        <input type="text" class="form-control" id="inputName" />
      </div>
      <div>
        <label for="inputEmail" class="form-label">Email</label>
        <input type="text" class="form-control" id="inputEmail" />
      </div>
      <div>
        <label for="inputPhone" class="form-label">Best phone</label>
        <input type="text" class="form-control" id="inputPhone" />
      </div>
      <div>
        <label for="chooseCountry" class="form-label">Choose country</label>
        <select className="form-select">
          <option selected>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
      <br />
      <div>
        <button className="" >Submit</button>
      </div>
    </div>
  </div>
  );
};

export default ContactPage;
