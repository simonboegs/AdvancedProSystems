import * as React from "React";
//import "bootstrap";
const bootstrap = typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null

export function Card(props) {
  return (
    <div className="card border-0">
      <img src={props.img} alt="yo" className="card-img-top" style={{objectFit: "cover", height: props.imgHeight}}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
        {props.noButton ? null : <a href="/something" className="btn btn-primary">Go somewhere</a>}
      </div>
    </div>
  );
}
