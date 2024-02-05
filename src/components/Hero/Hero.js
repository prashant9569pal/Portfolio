import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        I'm Prashant Pal
      </SectionTitle>
      <SectionText>
        A full-stack web developer, learner and coding enthusiast!
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1bu6x4RFJXND0ufpxyzbIR7TYVKpjPH7z/view")
        }
      >
        My resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
