import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="my-5 text-center ">
          <h1>My Works</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4 ">
                {Sdata.map((val, index) => {
                  return (
                    <Card
                      key={index}
                      imgSrc={val.imgSrc}
                      title={val.title}
                      link={val.link}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
