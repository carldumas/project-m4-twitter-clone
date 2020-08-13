// Libraries
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// Constants
import { COLORS } from '../constants';
// Components
import Logo from './Logo';

function Sidebar() {
    return (
        <Wrapper>
            <Logo />
            <nav>
                <NavBar>
                    <ListItem>
                        <NavLink to="/">Home</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/:profileId">Profile</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/notifications">Notifications</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/bookmarks">Bookmarks</NavLink>
                    </ListItem>
                </NavBar>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 150px;
    margin-left: 10vw;
    padding-top: 20px;
`;

const NavBar = styled.ul`
    margin-top: 20px;
`;

const ListItem = styled.li`
    line-height: 1.5px;
    padding-top: 20px;
    padding-left: 20px;
    width: 130px;
    height: 20px;
    font-weight: bold;

    & a {
        color: black;
    }

    &:hover {
        background-color: #e9d5e9;
        border-radius: 20px;
    }
    & .active {
        color: ${COLORS.primary};
    }
`;

export default Sidebar;
