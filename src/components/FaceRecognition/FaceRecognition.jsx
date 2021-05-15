import React from "react";
import "./FaceRecognition.scss";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div id="face-recognition" className="center">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            left: box.left,
            top: box.top,
            right: box.right,
            bottom: box.bottom,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
