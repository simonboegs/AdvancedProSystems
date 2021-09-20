import * as React from "react";
import "./CredentialCard.css";
import checkCircle from "../../images/check-circle.svg";
import checkCircleFill from "../../images/check-circle-fill.svg";

const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function CredentialCard(props) {
  const card = (
    <div className="card">
      <div className="card-body">
        {/* <span>
          <h4 className="card-title">{props.title}</h4>
          <img height="40px" src={checkCircle} />
        </span> */}
        <h4 className="card-title">
          {props.title}
          <img height="30px" style={{ marginLeft: "10px" }} src={checkCircleFill} />
        </h4>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
  // React.useEffect(() => {
  //   card.addEventListener("mouseenter")
  // });
  return card;
}
