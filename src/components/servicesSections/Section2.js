import * as React from "React";
//import "bootstrap";
import pic from "../../images/hero-services-01a.jpg"
const bootstrap = typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null

export function Section2(props) {
  return (
    <div className="row align-items-center gx-5" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
        <div className="col-5">
          <h2>Warranty, Maintenance, and Service Plans</h2>
          <p>Our support/service plans provide you with prompt and courteous service engineers, including:</p>
          <ul class="list-group list-group-numbered">
            <li class="list-group-item border-0">Same-day or next-day services, or will perform calibrations at our controlled laboratory.</li>
            <li class="list-group-item border-0">Customized certificates to meet your business's unique requirements. </li>
            <li class="list-group-item border-0">Program management services including documentation, certificate management, and maintenance scheduling.</li>
          </ul>
        </div>
        <div className="col-7">
          <img src={pic} style={{width: "100%"}}/>
        </div>
      </div>
  );

}