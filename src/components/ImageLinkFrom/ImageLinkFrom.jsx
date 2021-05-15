import React from "react";
import "./ImageLinkFrom.scss";
const ImageLinkFrom = ({ onInputCHange, onPictureSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic will detect faces in your pictures. git it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputCHange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onPictureSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkFrom;
