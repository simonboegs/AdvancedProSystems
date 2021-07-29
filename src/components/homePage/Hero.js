import * as React from "React";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

export function Hero(props) {
  return (
    <div
      className="row align-items-center justify-content-center"
      style={{
        height: props.height,
        marginBottom: props.marginBottom,
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.6)"
      }}
    >
      <div className="col-l-6 offset-col-3 text-center text-light" >
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
