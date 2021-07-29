import * as React from "React";
import pic from "../../images/random3.jpeg"
// if (typeof window !== `undefined`) {
//   const bootstrap = require("bootstrap/dist/css/bootstrap.min.css");
// }
const bootstrap = typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null
//import "bootstrap";


export function Section2(props) {
  return (
    <div className="row align-items-center gx-5" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
        <div className="col-6">
          <h2>We Want To Help Your Process!</h2>
          <p>Talk to us! We help keep your systems running smoothly and efficiently.</p>
        </div>
        <div className="col-6">
          <img src={pic} style={{width: "100%"}}/>
        </div>
      </div>
  );

}