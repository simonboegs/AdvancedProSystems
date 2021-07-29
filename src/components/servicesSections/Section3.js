import * as React from "React";
//import "bootstrap";
import pic from "../../images/card1-01a.jpg"
const bootstrap = typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null

export function Section3(props) {
  return (
    <div className="row align-items-center gx-5" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
        <div className="col-7">
          <img src={pic} style={{width: "100%"}}/>
        </div>
        <div className="col-5">
          <h2>Bioprocessing Equipment</h2>
          <p>Advanced Process Systems knows where all the equipment is!</p>
        </div>
      </div>
  );

}