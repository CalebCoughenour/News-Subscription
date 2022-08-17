import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon } from './Navbar.elements';

const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              NewsFeed
            </NavLogo>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;