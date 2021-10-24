import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineCode } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = '/'>
        <a style = {{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }} >
          <AiOutlineCode size = '4rem' style = {{ color: '#477ce3' }} /> <Span>_anishyadav_</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = '#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#tech'>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = 'mailto:yadavanish893@gmail.com' target = '_blank' >
        <SiGmail size = '3rem' style = {{ color: 'ea4335' }} />
      </SocialIcons>
      <SocialIcons href = 'https://github.com/anishyadav893' target = '_blank' >
        <AiFillGithub size = '3rem' style = {{ color: '#b6b1b0' }} />
      </SocialIcons>
      <SocialIcons href = 'https://www.linkedin.com/in/anishyadav/' target = '_blank' >
        <AiFillLinkedin size = '3rem' style = {{ color: '#0e76a8' }} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
