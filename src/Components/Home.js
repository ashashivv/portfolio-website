import React from "react";
import pdf from "../assets/documents/Asha.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div class="home-content">
              <div class="text-1">Hello, my name is</div>
              <div class="text-2">Asha</div>
              <div class="text-3">
                And I'm a <span class="typing">Frontend Developer</span>
              </div>
              <a href={pdf} target="_blank" className="hire">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
