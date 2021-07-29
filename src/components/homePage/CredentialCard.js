import * as React from "React";
//import "bootstrap";
const bootstrap = typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null

export function CredentialCard(props) {
  return (
    <div class="card">
      <div class="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}
