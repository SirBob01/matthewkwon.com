import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Nav = styled.nav`
    padding: 0 15vw;
    min-height: 10vh;
    display: ${(props) => (props.open ? "none" : "flex")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s ease-in-out;
    background-color: #899891;
`;

const NavList = styled.ul`
    @media (max-width: 768px) {
        display: none;
    }
    display: flex;
    list-style: none;
`;


const Logo = styled.h2`
    font-size: 25px;
    color: #ffffff;
`;

const MenuItem = styled.li`
    padding: 0 15px;
`;

const Link = styled.a`
    color: white;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;

const NavIcon = styled.button`
    @media (min-width: 769px) {
        display: none;
    }
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
`;

const Line = styled.span`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #ffffff;
    transition: width 0.4s ease-in-out;

    :nth-child(2) {
        width: ${(props) => (props.open ? "40%" : "70%")};
    }
`;

const Overlay = styled.div`
    @media (min-width: 769px) {
        display: none;
    }
    position: absolute;
    height: ${(props) => (props.open ? "90vh" : 0)};    
    width: 100vw;
    background: #899891;
    transition: height 0.4s ease-in-out;

`;

const OverlayMenu = styled.ul`
    list-style: none;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);

    li {
        opacity: ${(props) => (props.open ? 1 : 0)};
        font-size: 25px;
        margin: 50px 0px;
        transition: opacity 0.4s ease-in-out;
    }

    li:nth-child(2) {
        margin: 50px 0px;
    }
`;


const Header = (props) => {

    const history = useHistory();

    const [expanded, setExpanded] = useState(false);

    const changeExpanded = () => {
        setExpanded(!expanded);
        if (expanded) {
            setTimeout(() => {props.navExpanded(expanded)}, 400);
        } else {
            props.navExpanded(expanded);
        }
    }

    const handleBlogClick = () => {
        changeExpanded();
        history.push('/blog');
    }

    const handleExperienceClick = () => {
        changeExpanded();
        history.push('/experience');
    }

    const handleHomeClick = () => {
        changeExpanded();
        setTimeout(() => {history.push('/')}, 400);
    }

    return (
        <>
            <Nav open={expanded}>
                <Logo>Matthew Kwon</Logo>
                <NavList>
                    <MenuItem>
                        <Link target="#" href="/">about</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link target="#" href="/experience">experience</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link target="#" href="/blog">blog</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link target="#" href="/">resume</Link>
                    </MenuItem>
                </NavList>
            </Nav>
            <Overlay open={expanded}>
                <OverlayMenu open={expanded}>
                    <MenuItem>
                        <Link target="#" onClick={handleHomeClick}>
                            home
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link target="#" onClick={handleBlogClick}>
                            experience
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link target="#" onClick={handleBlogClick}>
                            blog
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link target="#" onClick={handleBlogClick}>
                            resume
                        </Link>
                    </MenuItem>
                </OverlayMenu>
            </Overlay>
            <NavIcon onClick={changeExpanded}>
                <Line open={expanded} />
                <Line open={expanded} />
                <Line open={expanded} />
            </NavIcon>
        </>
    )
};

export default Header;