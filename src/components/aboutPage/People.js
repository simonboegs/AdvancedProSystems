import * as React from "React";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import blank_person from "./../../images/blank_person.png";
import { Card } from "../homePage/Card";

export function People(props) {
  return (
    <div className="row align-items-center" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
      <div className="col-4">
        <h2>Who We Are</h2>
        <p>Advanced Process Systems, LLC serves the biotechnology, microchip and other manufacturing industries in the United States and beyond.</p>
        <p>We have applied more than 35 years of experience in the validations and calibration services industry. We also have extensive experience as end users of calibration equipment in the biotechnology industry.</p>
      </div>
      <div className="col-1" />
      <div className="col-7">
        <div className="row gx-5">
          <div className="col">
            <Card img={blank_person} noButton imgHeight="350px" title="Doug"/>
          </div>
          <div className="col">
            <Card img={blank_person} noButton imgHeight="350px" title="Tim Erisman"/>
          </div>
        </div>
      </div>
    </div>
  );
}
