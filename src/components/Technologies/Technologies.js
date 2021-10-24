import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListItemInner, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = 'tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>I am proficient in the latest frontend technologies, adept in backend development and working knowledge of establishing communication between the frontend & backend server.</SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>Experience with React, NextJS, npm, jQuery, Material UI, Bootstrap and UI/UX design</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>Working knowledge of Python, JavaScript, Node.js server, Firebase and Python frameworks</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Tools & Tech</ListTitle>
          <ListParagraph>Adept in concepts of OOP, Git, Linux, Heroku, Testing, Docker & Cloud services</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
