import * as React from "react";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

function getImgSide(props) {
  return (
    <div className={"col-" + props.imgCols}>
      <img src={props.img} style={{ width: "100%" }} />
    </div>
  );
}

function getTextSide(props) {
  return <div className={"col-" + String(12 - parseInt(props.imgCols))}>{props.content}</div>;
}

/*
Section props
  padding - pixel amount of top and bottom padding (going to remove soon)
  img - image source object
  imgSide - "left" or "right" - side that the image will be on, text will go on the other side
  imgCols - amount of cols the image side should take up (12 total columns - imgCols of 6 would mean the img side and text side are the same width)
  content - jsx to put as text
*/
export function Section(props) {
  if (props.imgSide == "left") {
    return (
      <div
        className="row align-items-center gx-5"
        style={{ paddingTop: props.padding, paddingBottom: props.padding }}
      >
        {getImgSide(props)}
        {getTextSide(props)}
      </div>
    );
  } else if (props.imgSide == "right") {
    return (
      <div
        className="row align-items-center gx-5"
        style={{ paddingTop: props.padding, paddingBottom: props.padding }}
      >
        {getTextSide(props)}
        {getImgSide(props)}
      </div>
    );
  }
}
