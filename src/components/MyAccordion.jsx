import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MyAccordion() {
  return (
    <div>
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-danger" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h3>Who are We ?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            fuga temporibus, omnis voluptatem cum dolore odio eos vel maiores
            asperiores excepturi nulla dicta ad reiciendis. Molestias distinctio
            omnis possimus aliquid?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-danger" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h3>Why us?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            fuga temporibus, omnis voluptatem cum dolore odio eos vel maiores
            asperiores excepturi nulla dicta ad reiciendis. Molestias distinctio
            omnis possimus aliquid?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-danger" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h3>What about our service coverage?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            fuga temporibus, omnis voluptatem cum dolore odio eos vel maiores
            asperiores excepturi nulla dicta ad reiciendis. Molestias distinctio
            omnis possimus aliquid?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-danger" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h3>What about our prices ?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            fuga temporibus, omnis voluptatem cum dolore odio eos vel maiores
            asperiores excepturi nulla dicta ad reiciendis. Molestias distinctio
            omnis possimus aliquid?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MyAccordion;
