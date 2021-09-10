import * as React from "react";
import { useViewport } from "./Layout";
import { textInput, formContainer, optionLabel, optionTextInput } from "./ContactForm.module.css";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function ContactForm(props) {
  const { width } = useViewport();
  const breakpoint = 768;

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
        <h1 className="text-center">Contact</h1>
        <div className="row justify-content-center py-3 gy-2">
          <div className="col-4">
            <label for="nameInput fw-bold">Name</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div className="col-4">
            <label for="nameInput fw-bold">Company</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div class="w-100"></div>
          <div className="col-4">
            <label for="nameInput fw-bold">Email</label>
            <input className={textInput} id="nameInput"></input>
          </div>
          <div className="col-4">
            <label for="nameInput fw-bold">Best Phone</label>
            <input className={textInput} id="nameInput"></input>
          </div>
        </div>
        <div id="options" className="row justify-content-center py-3 gy-2">
          <div className="col-8">
            <p>Which best describes you?</p>
          </div>
          <div className="col-7">
            <input id="option1" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option1">
              I have equipment that needs to get serviced.
            </label>
          </div>
          <div className="col-7">
            <input id="option2" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option2">
              I need to plan services for equipment I do not yet have.
            </label>
          </div>
          <div className="col-7">
            <input id="option3" type="radio" name="yo" value="yo" />
            <label className={optionLabel} for="option3">
              I need equipment!
            </label>
          </div>
          <div className="col-7">
            <input id="option3" type="radio" name="yo" value="yo" />
            <input
              className={optionTextInput}
              placeholder="Please tell us about your needs!"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section style={{ background: props.bgColor, padding: "20px 0 20px 0" }}>
      <form>{width > breakpoint ? desktop : desktop}</form>
    </section>
  );
}
