// Libraries
import React from 'react';
import styled from 'styled-components';
// Constants
import { COLORS } from '../constants.js';
// Components
import { CurrentUserContext } from './CurrentUserContext';

const Profile = () => {
    const { currentUser, status } = React.useContext(CurrentUserContext);

    return (
        <>
            <Wrapper>
                <h1>Profile </h1>
                {!currentUser ? (
                    <Loading>{status}</Loading>
                ) : (
                    <ProfileArea>Hi {currentUser.profile.handle}</ProfileArea>
                )}
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    color: ${COLORS.color};
`;

const ProfileArea = styled.div`
    margin-top: 20px;
    width: 400px;
`;

const Loading = styled.div`
    margin-top: 20px;
    width: 100px;
    text-align: center;
    background-color: lightgray;
`;

export default Profile;
