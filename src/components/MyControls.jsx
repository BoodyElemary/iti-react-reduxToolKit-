import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { set } from "mongoose";

function MyControls() {
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/platforms?key=1c437533bbcc4d79a281bd81eb986fcb`
      )
      .then((response) => {
        console.log(response.data.results);
        setGenres(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        ` https://api.rawg.io/api/genres?key=1c437533bbcc4d79a281bd81eb986fcb`
      )
      .then((response) => {
        // console.log(response.data.results);
        setPlatforms(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Genres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              className="platform"
            >
              {platforms.map((platform) => {
                return (
                  <FormControlLabel
                    key={platform.id}
                    value={platform.name}
                    control={<Radio color="error" />}
                    label={platform.name}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Platforms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              className="platform"
            >
              {genres.map((genre) => {
                return (
                  <FormControlLabel
                    key={genre.id}
                    value={genre.name}
                    control={<Radio color="error" />}
                    label={genre.name}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MyControls;
