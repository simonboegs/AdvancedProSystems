import * as React from "react";
import "./CredentialCard.css";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function CredentialCard(props) {
  const card = (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
  // React.useEffect(() => {
  //   card.addEventListener("mouseenter")
  // });
  return card;
}
