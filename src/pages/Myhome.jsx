import React from "react";
import MySlider from "../components/MySlider";
import MyAccordion from "../components/MyAccordion";

function Myhome() {
  return (
    <div>
      <MySlider></MySlider>
      <div className="container text-center pt-2">
        <h1>The Ultimate gaming experience</h1>
        <p>
          {" "}
          A large gaming librarry with more than{" "}
          <span className="fs-2 text-danger">30000 + </span>games
        </p>
        <div className=" d-flex flex-lg-row flex-column gap-3 justify-content-center align-items-center container-fluid">
          <div className="d-flex flex-column col-lg-3 gap-2">
            <img
              src="https://www.gstatic.com/stadia/gamers/landing_page/assets/v2_games.svg"
              alt=""
            />
            <h5>Build your game collection</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              amet deleniti accusantium rem quasi nobis harum officia animi
            </p>
          </div>
          <div className="d-flex flex-column col-lg-3  gap-2">
            <img
              src="https://www.gstatic.com/stadia/gamers/landing_page/assets/v2_calendar.svg"
              alt=""
            />
            <h5>Build your game collection</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              amet deleniti accusantium rem quasi nobis harum officia animi
            </p>
          </div>
          <div className="d-flex flex-column col-lg-3  gap-2">
            <img
              src="https://www.gstatic.com/stadia/gamers/landing_page/assets/v2_discount_tag.svg"
              alt=""
            />
            <h5>Build your game collection</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              amet deleniti accusantium rem quasi nobis harum officia animi
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex  flex-column justify-content-center align-items-center container mt-5 text-center ">
        <h1>The Ultimate gaming experience</h1>
        <p>
          {" "}
          play your favourite games on
          <span className="fs-2 text-danger"> 10+ </span>platforms
        </p>
        <img
          src="https://www.gstatic.com/stadia/gamers/landing_page/assets/v2_play_anywhere_hitman_2x.png"
          alt=""
          className="col-10"
        />
      </div>
      <div className="d-flex  flex-column justify-content-center align-items-center container mt-5 text-center ">
        <h1 className="text-danger">FAQ </h1>
        <MyAccordion></MyAccordion>
      </div>
    </div>
  );
}

export default Myhome;
