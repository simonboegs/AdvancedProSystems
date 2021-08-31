import * as React from "react";
import { useViewport } from "./Layout";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function ContactForm(props) {
  const { width } = useViewport();
  const breakpoint = 768;

  const nameInput = <input type="text" class="form-control" placeholder="Name" aria-label="Name" />;
  const emailInput = (
    <input type="text" class="form-control" placeholder="Email" aria-label="Email" />
  );
  const messageInput = (
    <textarea
      type="text"
      class="form-control"
      placeholder="What can we do for you?"
      aria-label="Message"
      rows="5"
    />
  );
  const submitButton = (
    <button type="submit" class="btn btn-primary">
      Submit
    </button>
  );

  const desktop = (
    <div className="container">
      {/* <div className="row justify-content-center">
        <div className="col-5">{nameInput}</div>
        <div className="col-5">{emailInput}</div>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-10">{messageInput}</div>
      </div>
       */}
      <div className="row justify-content-center gy-3">
        <div className="col-5">{nameInput}</div>
        <div className="col-5">{emailInput}</div>
        <div className="col-10">{messageInput}</div>
        <div className="col-10">{submitButton}</div>
      </div>
    </div>
  );

  const mobile = (
    <div className="container-lg">
      <div className="row gy-3">
        <div className="col-12">{nameInput}</div>
        <div className="col-12">{emailInput}</div>
        <div className="col-12">{messageInput}</div>
        <div className="col-12">{submitButton}</div>
      </div>
    </div>
  );

  return (
    <section style={{ background: props.bgColor, padding: "20px 0 20px 0" }}>
      <form>{width > breakpoint ? desktop : mobile}</form>
    </section>
  );
}
