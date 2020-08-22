// Libraries
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiBell, FiBookmark } from 'react-icons/fi';
// Constants
import { COLORS } from '../constants';
// Assets
import logo from '../assets/logo.svg';
// Components
import { CurrentUserContext } from './CurrentUserContext';

function Sidebar() {
    const { currentUser } = React.useContext(CurrentUserContext);
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
                        <NavLink exact to={'/' + currentUser.profile.handle}>
                            <ListIcons>
                                <FiUser />
                            </ListIcons>
                            Profile
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink exact to="/notifications">
                            <ListIcons>
                                <FiBell />
                            </ListIcons>
                            Notifications
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink exact to="/bookmarks">
                            <ListIcons>
                                <FiBookmark />
                            </ListIcons>
                            Bookmarks
                        </NavLink>
                    </ListItem>
                </NavBar>
            </nav>
            <MeowButton>Meow</MeowButton>
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
        color: purple;
    }
`;

const ListIcons = styled.span`
    padding-right: 20px;
`;

const MeowButton = styled.button`
    width: 150px;
    height: 35px;
    border-radius: 30px;
    background-color: ${COLORS.primary};
    color: white;
    margin-top: 10px;
    outline: none;
    cursor: pointer;
`;

export default Sidebar;
