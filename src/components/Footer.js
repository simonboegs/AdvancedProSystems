import * as React from "react";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function Footer(props) {
  return (
    <div className="row">
      <div className="col">
        <p className="text-start">©2021 All rights reserved</p>
      </div>
      <div className="col">
        <p className="text-end">
          Web by <a href="https://getleadsb2b.com">GetLeadsB2B</a>
        </p>
      </div>
    </div>
  );
}
