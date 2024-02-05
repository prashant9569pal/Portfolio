import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxTitle, BoxText } from "./AcomplishmentsStyles";
import Button from "../../styles/GlobalComponents/Button";

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      <Box>
        <BoxTitle>Web Development Udemy Certificate</BoxTitle>
        <br />
        <Button
          onClick={() =>
            (window.location =
              "https://www.udemy.com/certificate/UC-e12b9a0d-cb48-4d0f-bc6a-472676eea2b3/")
          }
        >
          Credentials
        </Button>
      </Box>
      <Box>
        <BoxTitle>GFG Bootcamp Certificate</BoxTitle>
        <br />
        <Button
          onClick={() =>
            (window.location =
              "https://media.geeksforgeeks.org/courses/certificates/0d6371cda6994ab7d344f5f5922952c6.pdf")
          }
        >
          Credentials
        </Button>
      </Box>
    </Boxes>
  </Section>
);

export default Acomplishments;
