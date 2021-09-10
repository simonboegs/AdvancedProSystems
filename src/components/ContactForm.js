import * as React from "react";
import { useViewport } from "./Layout";
import {
  textInput,
  formContainer,
  optionLabel,
  optionTextInput,
  dropdown,
} from "./ContactForm.module.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { StaticQuery } from "gatsby";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function ContactForm(props) {
  const { width } = useViewport();
  const breakpoint = 768;

  const [formData, setFormData] = React.useState({
    country: "United States",
    region: "",
  });

  const setCountry = (val) => {
    setFormData({
      country: val,
    });
  };

  const setRegion = (val) => {
    setFormData({
      region: val,
    });
  };

  const desktop = (
    <div
      className="container"
      style={{
        border: "3px solid gray",
        maxWidth: "800px",
        borderRadius: "10px",
        background: "rgb(255,255,255,.5)",
        padding: "20px",
      }}
    >
      <div className={formContainer}>
        <h1 className="text-center">Get More Info</h1>
        <div id="options" className="row justify-content-center py-2 gy-2">
          <div className="col-10">
            <h5>Which best describes you?</h5>
          </div>
          <div className="col-9">
            <input id="option1" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option1">
              I have equipment that needs to get serviced.
            </label>
          </div>
          <div className="col-9">
            <input id="option2" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option2">
              I need to plan services for equipment I do not yet have.
            </label>
          </div>
          <div className="col-9">
            <input id="option3" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option3">
              I need equipment!
            </label>
          </div>
          <div className="col-9">
            <input id="option3" type="radio" name="yo" value="yo" />
            <input
              className={optionTextInput}
              placeholder="Please tell us about your needs!"
            ></input>
          </div>
        </div>
        <div className="row justify-content-center py-2 gy-2">
          <div className="col-5">
            <label for="nameInput fw-bold">Name</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div className="col-5">
            <label for="nameInput fw-bold">Company</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div class="w-100"></div>
          <div className="col-5">
            <label for="nameInput fw-bold">Email</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div className="col-5">
            <label for="nameInput fw-bold">Best Phone</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div class="w-100"></div>
        </div>
        <div className="row justify-content-center py-2">
          <div className="col-5">
            <CountryDropdown
              className={dropdown}
              value={formData.country}
              onChange={(val) => setCountry(val)}
            />
          </div>
          <div className="col-5">
            <RegionDropdown
              country={formData.country}
              className={dropdown}
              value={formData.region}
              onChange={(val) => setRegion(val)}
              disableWhenEmpty
            />
          </div>
        </div>
        <div className="row justify-content-center py-3">
          <div className="col-10">
            <button className="btn btn-primary" style={{ width: "100%" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const mobile = (
    <div
      className="container"
      style={{
        border: "3px solid gray",
        maxWidth: "800px",
        borderRadius: "10px",
        background: "rgb(255,255,255,.5)",
        padding: "20px",
      }}
    >
      <div className={formContainer}>
        <h1 className="text-center">Get More Info</h1>
        <div id="options" className="row justify-content-center py-2 gy-2">
          <div className="col-12">
            <h5>Which best describes you?</h5>
          </div>
          <div className="col-12">
            <input id="option1" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option1">
              I have equipment that needs to get serviced.
            </label>
          </div>
          <div className="col-12">
            <input id="option2" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option2">
              I need to plan services for equipment I do not yet have.
            </label>
          </div>
          <div className="col-12">
            <input id="option3" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option3">
              I need equipment!
            </label>
          </div>
          <div className="col-12">
            <input id="option3" type="radio" name="yo" value="yo" />
            <input
              className={optionTextInput}
              placeholder="Please tell us about your needs!"
            ></input>
          </div>
        </div>
        <div className="row justify-content-center py-2 gy-2">
          <div className="col-6">
            <label for="nameInput fw-bold">Name</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div className="col-6">
            <label for="nameInput fw-bold">Company</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div class="w-100"></div>
          <div className="col-6">
            <label for="nameInput fw-bold">Email</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div className="col-6">
            <label for="nameInput fw-bold">Best Phone</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div class="w-100"></div>
        </div>
        <div className="row justify-content-center py-2">
          <div className="col-6">
            <CountryDropdown
              className={dropdown}
              value={formData.country}
              onChange={(val) => setCountry(val)}
            />
          </div>
          <div className="col-6">
            <RegionDropdown
              country={formData.country}
              className={dropdown}
              value={formData.region}
              onChange={(val) => setRegion(val)}
              disableWhenEmpty
            />
          </div>
        </div>
        <div className="row justify-content-center py-3">
          <div className="col-12">
            <button className="btn btn-primary" style={{ width: "100%" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section style={{ background: props.bgColor, padding: "20px 0 20px 0" }}>
      <form>{width > breakpoint ? desktop : mobile}</form>
    </section>
  );
}
