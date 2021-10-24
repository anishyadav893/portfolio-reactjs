import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Anish Yadav<br/>
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        You can't control how other people act,<br />but you can control how you<br /><em>React</em>.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;