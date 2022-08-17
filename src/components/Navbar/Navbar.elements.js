import styled from 'styled-components';
import { TbRainbow } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;
${Container}
`;


export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;

&:hover {
  color: #0467fb;
  transition: 0.3s ease-out;
}
`;

export const NavIcon = styled(TbRainbow)`
margin-right: 0.5rem;
`;
