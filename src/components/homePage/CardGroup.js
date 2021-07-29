import * as React from "React";
//import "bootstrap";
import { Card } from "./Card";
import card1Img from "../../images/card1-01a.jpg";
import card2Img from "../../images/card2-01a.jpg";
import card3Img from "../../images/card3-01a.jpg";
const bootstrap = typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null

//props: width of each card, height of the pic of each card
export function CardGroup(props) {
  return (
    <div className="row" style={{paddingTop: props.padding, paddingBottom: props.padding}}>
      <div className="col">
        <Card
          title="Installations, Calibrations, and Validations"
          body=""
          img={card1Img}
          imgHeight={props.imgHeight}
        />
      </div>
      <div className="col">
        <Card
            title="Installations, Calibrations, and Validations"
            body=""
            img={card2Img}
            imgHeight={props.imgHeight}
          />
      </div>
      <div className="col">
        <Card
            title="Installations, Calibrations, and Validations"
            body=""
            img={card3Img}
            imgHeight={props.imgHeight}
          />
      </div>
    </div>
  );
}
