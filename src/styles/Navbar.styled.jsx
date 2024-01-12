import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LogoImage = styled.img`
width: 150px;
align-self: start;
`;

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-item: center;
    background-color: black;
    padding: 1rem 3rem;
    position: relative;
    @media(max-width: 704px){
        flex-direction: column;
        padding: 1rem
    }
`;

const NavLinkWrapper = styled.div`
@media(max-width: 704px){
    display: ${(props) => props.active ? "block" : "none"};
    text-alight: center;
    padding: 2rem 0;
}
`

const StyledNavLink = styled(NavLink)`
text-decoration: none;
transition: .2s;
color: white;
margin-left: 2rem;
padding: .5rem 1rem;

&.${(props) => props.activeclassname}{
    color: #007dfc
}
&:hover {
    background: white;
    border-radius: 30px;
}

@media(max-width: 704px){
    display: block;
    margin: 2rem auto;
}
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    display: none;
    position: absolute;
    right: 20px;
    top: 21px;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    @media(max-width: 704px){
        display: block;
    }

`
export {LogoImage, NavbarWrapper, NavLinkWrapper, StyledNavLink, StyledFontAwesomeIcon};