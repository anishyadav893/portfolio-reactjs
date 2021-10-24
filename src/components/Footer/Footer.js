import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = 'tel:408-495-1027' target = '_blank' >(+1) 408-495-1027</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href = 'https://www.google.com/maps/place/Santa+Clara,+CA/@37.3708853,-122.002572,13z/data=!3m1!4b1!4m5!3m4!1s0x808fb7815c08c193:0xe475a47ca3c0bfc0!8m2!3d37.3541079!4d-121.9552356' target = '_blank' >San Francisco Bay Area</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Connect with me on LinkedIn and via e-mail or check out my GitHub repository.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = 'mailto:yadavanish893@gmail.com' target = '_blank'>
            <SiGmail size = '3rem' style = {{ color: 'ea4335' }} />
          </SocialIcons>
          <SocialIcons href = 'https://github.com/anishyadav893' target = '_blank'>
            <AiFillGithub size = '3rem' style = {{ color: '#b6b1b0' }} />
          </SocialIcons>
          <SocialIcons href = 'https://www.linkedin.com/in/anishyadav/' target = '_blank'>
            <AiFillLinkedin size = '3rem' style = {{ color: '#0e76a8' }} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
