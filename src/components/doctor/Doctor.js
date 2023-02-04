import React from "react";
import docImg from "../../img/doc.png";

export default function Doctor() {
  return (
    <div className="doc-card">
      <div className="doc-card__group">
        <img src={docImg} alt="" />
        <div className="doc-card__info">
          <h5>Dr. Christopher Charles</h5>
          <p>Neurosurgeon</p>
          <small>Northwest Hospital</small>
        </div>
      </div>
      <div className="price">
        <div className="price__group">
          <h4>45 USD</h4>
          <small>per session</small>
        </div>
      </div>
    </div>
  );
}
