import * as React from "React";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import pic from "../../images/random2.jpg"

export function Section1(props) {
  return (
    <div className="row align-items-center gx-5" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
        <div className="col-7">
          <img src={pic} style={{width: "100%"}}/>
        </div>
        <div className="col-5">
          <h2>Installations, Calibrations, and Validations</h2>
          <p>Our calibration and validation services cover the entire spectrum of processes in your facility – from analytical to process calibrations and validations. </p>
          <p>Our field engineers offer accurate, reliable calibrations and validations that can respond to your specific needs and requirements. </p>
          <p>Most equipment can be serviced on-site. For equipment that requires highly sensitive calibration devices, items can be sent to one of our controlled laboratories were our field engineers will perform calibrations and validations.</p>
        </div>
      </div>
  );

}