import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { SiMaterialui, SiCplusplus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I have explored and learnt a range of technologies in the web development
      world from Front-end to Back-end
    </SectionText>
    <List>
      <ListItem>
        <SiCplusplus size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            C<br />
            C++
            <br />
            Java
            <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML
            <br />
            CSS
            <br />
            Javascript
            <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNodeJs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js
            <br />
            Express
            <br />
            Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMaterialui size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Material UI
            <br />
            Tailwind CSS
            <br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MongoDB
            <br />
            Firestore
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
