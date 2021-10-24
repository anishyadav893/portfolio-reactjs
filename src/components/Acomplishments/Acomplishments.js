import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '0.1 %', text: 'Secured a rank in the Top 0.1 % candidates in IIT-JEE 2012 examination'},
  { number: '2 yrs', text: '2 years of relevant professional experience in the tech sector', },
  { number: '10+', text: 'Developed > 10 projects as part of the personal portfolio', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
          <Box key = {index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
