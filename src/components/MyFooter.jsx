import { Link } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

function MyFooter() {
  return (
    <div>
      <footer className="page-footer mt-5  font-small bg-dark pt-5 text-light  ">
        <div className=" d-flex  justify-content-center align-items-center flex-lg-row flex-column">
          <div className="col-lg-3  d-flex flex-column justify-content-center align-items-center  p-lg-0  ">
            <div className=" d-flex align-self-lg-center align-self-start  gap-2">
              <h2 className=" ">G-Dragon</h2>
              <img src={logo} className="logo " alt="" />
            </div>
            <p className="col-lg-9 text-start container-md ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              malesuada fringilla sem, at dictum lectus ultricies quis. Etiam eu
              bibendum orci. Aliquam erat volutpat.
            </p>
          </div>
          <div className="col-3  d-flex flex-column justify-content-center align-items-center text-center gap-2">
            <div className=" d-flex justify-content-center align-items-center text-center gap-2">
              <h2 className="text-center align-self-start">Site map</h2>
            </div>
            <div className="d-flex flex-column text-start justify-content-start align-items-start">
              <Link
                href="#"
                underline="none"
                className="text-light  text-start"
              >
                {"Home"}
              </Link>
              <Link href="#" underline="none" className="text-light text-start">
                {"Pricing"}
              </Link>
              <Link href="#" underline="none" className="text-light text-start">
                {"Log"}
              </Link>
              <Link href="#" underline="none" className="text-light text-start">
                {"fuasck"}
              </Link>
            </div>
          </div>
          <div className="col-3  d-flex flex-column justify-content-center align-items-center text-center gap-2">
            <div className=" d-flex justify-content-center align-items-center text-center gap-2">
              <h2 className="text-start align-self-start">Contact Us</h2>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-4">
                {" "}
                <span>
                  <LocationOnIcon></LocationOnIcon>
                </span>
                Kobry Farouq street Tanta Egypt
              </p>
              <p className="fw-4">
                {" "}
                <span>
                  <PhoneIcon></PhoneIcon>
                </span>
                +(20)1062935901
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyFooter;
