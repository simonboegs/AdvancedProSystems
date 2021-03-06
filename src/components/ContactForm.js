import * as React from "react";
import { useViewport } from "./Layout";
import {
  textInput,
  formContainer,
  optionLabel,
  optionTextInput,
  dropdown,
} from "./ContactForm.module.css";
import TextareaAutosize from "react-textarea-autosize";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { StaticQuery } from "gatsby";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function ContactForm(props) {
  const { width } = useViewport();
  const breakpoint = 768;

  const optionsMsgs = {
    "option1": "I have equipment that needs to get serviced.",
    "option2": "I need to plan services for equipment I do not yet have.",
    "option3": "I need equipment!"
  }

  const [formData, setFormData] = React.useState({
    country: "United States",
    region: "",
    name: "",
    email: "",
    phone: "",
    radioSelection: "option1",
    textArea: "",
    message: optionsMsgs.option1
  });

  const handleChange = e => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    });
  }

  const setRadioSelection = val => {
    let message = "";
    if (val == "option4") {
      message = formData.textArea;
    }
    else {
      message = optionsMsgs[val];
    }
    setFormData((prevState) => {
      return {
        ...prevState,
        radioSelection: val,
        message: message
      }
    });
  }

  const setTextArea = val => {
    setFormData((prevState) => {
      return {
        ...prevState,
        textArea: val,
      }
    });
    if (formData.radioSelection == "option4") {
      setFormData((prevState) => {
        return {
          ...prevState,
          message: val
        }
      });
    }
  }

  const setCountry = (val) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        country: val
      }
    });
  };

  const setRegion = (val) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        region: val
      }
    });
  };

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));
    e.preventDefault();
    console.log("form submit");
    console.log(formData);
  }

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const desktop = (
    <div
      className="container"
      style={{
        // border: "3px solid gray",
        maxWidth: "800px",
        borderRadius: "10px",
        background: "rgb(255,255,255,.5)",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit} name="contact" method="post" netlify data-netlify="true">
        <input type="hidden" name="form-name" value="contact"></input>
        <div className={formContainer}>
          <h1 className="text-center">Get More Info</h1>
          <div id="options" className="row justify-content-center py-2 gy-2" name="radioSelection">
            <div className="col-10">
              <h5>Which best describes you?</h5>
            </div>
            <div className="col-9">
              <input id="option1" type="radio" value="option1" name="option1" checked={formData.radioSelection == "option1"} onChange={(e) => setRadioSelection(e.target.value)}/>
              <label className={optionLabel} for="option1">
                {optionsMsgs.option1}
              </label>
            </div>
            <div className="col-9">
              <input id="option2" type="radio" value="option2" name="option2" checked={formData.radioSelection == "option2"} onChange={(e) => setRadioSelection(e.target.value)}/>
              <label className={optionLabel} for="option2">
                {optionsMsgs.option2}
              </label>
            </div>
            <div className="col-9 align-items-center">
              <input id="option3" type="radio" value="option3" name="option3" checked={formData.radioSelection == "option3"} onChange={(e) => setRadioSelection(e.target.value)}/>
              <label className={optionLabel} for="option3">
                {optionsMsgs.option3}
              </label>
            </div>
            <div className="col-9">
              <input
                id="option4"
                type="radio"
                value="option4"
                name="option4"
                style={{ verticalAlign: "top" }}
                checked={formData.radioSelection == "option4"}
                onChange={(e) => setRadioSelection(e.target.value)}
              />
              <TextareaAutosize className={optionTextInput} minRows="1" name="message" onChange={(e) => setTextArea(e.target.value)}/>
            </div>
          </div>
          <div className="row justify-content-center py-2 gy-2">
            <div className="col-5">
              <label for="nameInput fw-bold">Name</label>
              <input className={textInput} id="nameInput" name="name" onChange={handleChange}></input>
            </div>
            <div className="col-5">
              <label for="nameInput fw-bold">Company</label>
              <input className={textInput} id="nameInput" name="company" onChange={handleChange}></input>
            </div>
            <div class="w-100"></div>
            <div className="col-5">
              <label for="nameInput fw-bold">Email</label>
              <input className={textInput} id="nameInput" name="email" onChange={handleChange}></input>
            </div>
            <div className="col-5">
              <label for="nameInput fw-bold">Best Phone</label>
              <input className={textInput} id="nameInput" name="phone" onChange={handleChange}></input>
            </div>
            <div class="w-100"></div>
          </div>
          <input type="hidden" name="country" value={formData.country}></input>
          <input type="hidden" name="region" value={formData.region}></input>
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
              <button className="btn btn-primary" style={{ width: "100%" }} type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
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
            <button className="btn btn-primary" style={{ width: "100%" }} type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section style={{ background: props.bgColor, padding: "20px 0 20px 0" }}>
      {width > breakpoint ? desktop : mobile}
    </section>
  );
}
