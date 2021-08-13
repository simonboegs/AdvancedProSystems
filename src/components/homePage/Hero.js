import * as React from "react";
//import "bootstrap";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function Hero(props) {
  return (
    <div
      className="row align-items-center justify-content-center"
      style={{
        height: props.height,
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="col-l-6 offset-col-3 text-center text-light">
        <div className="row">
          <div className="col">
            <h1>{props.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>{props.body}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
