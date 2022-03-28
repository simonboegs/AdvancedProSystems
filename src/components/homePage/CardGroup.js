import * as React from "react";
//import "bootstrap";
import { useViewport } from "../Layout";
import { Card } from "./Card";
import card1Img from "../../images/card1-gears-01.jpg";
import card2Img from "../../images/card2-lab-01.jpg";
import card3Img from "../../images/card3-stainless-01.jpg";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

//props: width of each card, height of the pic of each card

export function CardGroup(props) {
  const { width } = useViewport();
  const breakpoint = 768;

  const desktop = (
    <div className="container-xl">
      <div className="row">
        <div className="col">
          <Card
            title="Process Consulting and Calibration"
            body=""
            img={card1Img}
            imgHeight={props.imgHeight}
            noButton
            link="/services"
          />
        </div>
        <div className="col">
          <Card
            title="Laboratory, Industrial Service Plans"
            body=""
            img={card2Img}
            imgHeight={props.imgHeight}
            noButton
            link="/services#services_2"
          />
        </div>
        <div className="col">
          <Card
            title="Biotech Equipment and Parts"
            body=""
            img={card3Img}
            imgHeight={props.imgHeight}
            noButton
            link="/products"
          />
        </div>
      </div>
    </div>
  );

  const mobile = (
    <div className="container">
      <div className="row gy-5 text-center">
        <div className="col-12">
          <Card
            title="Process Consulting and Calibration"
            body=""
            img={card1Img}
            imgHeight={props.imgHeight}
          />
        </div>
        <div className="col-12">
          <Card
            title="Laboratory, Industrial Service Plans"
            body=""
            img={card2Img}
            imgHeight={props.imgHeight}
          />
        </div>
        <div className="col-12">
          <Card
            title="Biotech Equipment and Parts"
            body=""
            img={card3Img}
            imgHeight={props.imgHeight}
          />
        </div>
      </div>
    </div>
  );
  return (
    <section style={{ background: props.bgColor, padding: "70px 0 70px 0" }}>
      {width > breakpoint ? desktop : mobile}
    </section>
  );
  return width > breakpoint ? desktop : mobile;
}
