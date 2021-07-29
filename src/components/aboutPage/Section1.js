import * as React from "React";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import pic from "../../images/random1.jpeg"

export function Section1(props) {
  return (
    <div className="row align-items-center gx-5" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
        <div className="col-7">
          <img src={pic} style={{width: "100%"}}/>
        </div>
        <div className="col-5">
          <h2>Our Goal</h2>
          <p>Our mission is to lead in calibrations and validations services all around the USA. Our experience and super qualified engineers help to ensure that our customers produce safe and effective products -- confident that they received accurate and traceable calibrations.</p>
        </div>
      </div>
  );

}