import * as React from "react";
import { useViewport } from "./Layout";

export function ContactFormSimple(props) {
  const { width } = useViewport();
  const breakpoint = 768;
  return (
    <section>
      <form name="contact-simple">
        <input type="hidden" name="form-name" value="contact-simple" />
        <input name="name"></input>
        <input name="phone"></input>
        <input name="email"></input>
        <input name="country"></input>
        <input name="region"></input>
        <input name="message"></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactFormSimple