import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card mb-4">
          <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              {props.title}
            </h5>
            <p className="card-text" style={{ color: "black" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href={props.link} className="btn btn-primary" target="_blank">
              View full project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
