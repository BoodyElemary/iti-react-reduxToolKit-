import React from "react";
import Card from "@mui/material/Card";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function MyContact() {
  return (
    <div>
      <Card className="container mt-4 ">
        <h1 className="text-center"> Our location</h1>
        <div className="d-flex flex-md-row gap-3 align-items-md-start align-items-center flex-column mt-3">
          <div className="d-flex flex-column col-md-6 col-12">
            <div className="info-1">
              <h3 className="fw-bold">Contact Info</h3>
              <div className="d-flex gap-2 align-items-center">
                <p>
                  {" "}
                  <HomeIcon className="fs-1" color="error"></HomeIcon>
                </p>
                <div className="d-flex flex-column align-items-start justify-content-start ">
                  <h4 className="m-0">Address</h4>
                  <p>Kobry Farouq street Tanta Egypt</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="info-2">
              <div className="d-flex gap-2 align-items-center">
                <p>
                  {" "}
                  <LocalPhoneIcon
                    className="fs-1"
                    color="error"
                  ></LocalPhoneIcon>
                </p>
                <div className="d-flex flex-column align-items-start justify-content-start ">
                  <h4 className="m-0">Address</h4>
                  <p>01062935901/0403558194</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="info-3">
              <div className="d-flex gap-2 align-items-center">
                <p>
                  {" "}
                  <MailIcon className="text-danger fs-1"></MailIcon>
                </p>
                <div className="d-flex flex-column align-items-start justify-content-start ">
                  <h4 className="m-0">Address</h4>
                  <p>satoociva86@gmail.com</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="d-flex flex-column col-md-6 col-12 ">
            <div className="info-1">
              <h3 className="fw-bold">Contact US</h3>
              <div className="d-flex gap-2 align-items-center p-2">
                <TextField
                  fullWidth
                  label="Your name"
                  variant="standard"
                  color="error"
                />
              </div>
              <div className="d-flex gap-2 align-items-center p-2">
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="standard"
                  color="error"
                />
              </div>
              <div className="d-flex gap-2 align-items-center p-2">
                <TextField
                  fullWidth
                  label="Subject"
                  variant="standard"
                  color="error"
                />
              </div>
              <div className="d-flex gap-2 align-items-center p-2">
                <TextField
                  fullWidth
                  id="standard-multiline-static"
                  label="Post"
                  multiline
                  rows={4}
                  variant="standard"
                  color="error"
                />
              </div>
              <Button
                color="error"
                variant="contained"
                size="large"
                className="mt-3 mb-3 mx-2 "
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MyContact;
