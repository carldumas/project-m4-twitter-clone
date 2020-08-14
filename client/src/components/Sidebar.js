// Libraries
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiBell, FiBookmark } from 'react-icons/fi';
// Constants
import { COLORS } from '../constants';
// Assets
import logo from '../assets/logo.svg';

function Sidebar() {
    return (
        <Wrapper>
            <img src={logo} alt="Logo" />
            <nav>
                <NavBar>
                    <ListItem>
                        <NavLink exact to="/">
                            <ListIcons>
                                <FiHome />
                            </ListIcons>
                            Home
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/:profileId">
                            <ListIcons>
                                <FiUser />
                            </ListIcons>
                            Profile
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/notifications">
                            {' '}
                            <ListIcons>
                                <FiBell />
                            </ListIcons>
                            Notifications
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/bookmarks">
                            {' '}
                            <ListIcons>
                                <FiBookmark />
                            </ListIcons>{' '}
                            Bookmarks
                        </NavLink>
                    </ListItem>
                </NavBar>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 170px;
    margin-left: 10vw;
    padding-top: 20px;
`;

const NavBar = styled.ul`
    margin-top: 20px;
`;

const ListItem = styled.li`
    line-height: 1.5px;
    padding: 10px;
    width: 150px;
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

const ListIcons = styled.span`
    padding-right: 20px;
`;

export default Sidebar;
