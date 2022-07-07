import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "@mui/material";
import "./SliderCss.css";

function MySlider() {
  return (
    <div>
      <Carousel className="w-100">
        <Carousel.Item>
          <img
            className="d-block img-slide img-fluid"
            src="https://wallpaperaccess.com/full/306751.jpg"
            alt="First slide"
          />
          <Carousel.Caption className=" h-100 d-flex  text-center justify-content-center align-items-center ">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <h1>Our best Collections</h1>
              <h4> choose from more than 3000+ game </h4>
              <Button
                variant="contained"
                size="large"
                className="col-5 bg-dark"
              >
                Buy Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-slide img-fluid"
            src="https://wallpaperaccess.com/full/50044.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className=" h-100 d-flex  text-center justify-content-center align-items-center ">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <h1>Our best Collections</h1>
              <h4> choose from more than 3000+ game </h4>
              <Button
                variant="contained"
                size="large"
                className="col-5 bg-dark"
              >
                Buy Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-slide img-fluid"
            src="https://wallpaperaccess.com/full/306775.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className=" h-100 d-flex  text-center justify-content-center align-items-center ">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <h1>Our best Collections</h1>
              <h4> choose from more than 3000+ game </h4>
              <Button
                variant="contained"
                size="large"
                className="col-5 bg-dark"
              >
                Buy Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MySlider;
