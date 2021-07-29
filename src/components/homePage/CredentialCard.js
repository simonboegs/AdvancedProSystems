import * as React from "React";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

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
