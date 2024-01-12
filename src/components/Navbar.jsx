import React, {useState} from 'react';
import Logo from './Logo';
import { NavbarWrapper, NavLinkWrapper, StyledNavLink, StyledFontAwesomeIcon } from '../styles/Navbar.styled';
import { faBars } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
    const [active, setActive] = useState(false);
  const link = [{
    page: "Home", 
    href: "/",
  },
  {
    page: "Converter",
    href: "/converter"
  },
  {
    page: "FriendsList",
    href: "/friends-list"
  },
  {
    page: "Quiz",
    href: "/quiz"
  }
]
  return (
    <NavbarWrapper>
      <Logo/>
      <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)}/>
      <NavLinkWrapper active={active}>
        {link.map((link) => (
          <StyledNavLink activeclassname="active" key={link.page} to={link.href}>
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
      </NavbarWrapper>
  )
}

export default Navbar;