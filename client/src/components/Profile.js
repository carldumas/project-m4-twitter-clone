// Libraries
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
// Components
import { CurrentUserContext } from './CurrentUserContext';

const Profile = () => {
    const { currentUser, status } = React.useContext(CurrentUserContext);

    return (
        <>
            <Wrapper>
                {!currentUser ? (
                    <Loading>{status}</Loading>
                ) : (
                    <ProfileArea>
                        <ProfileBanner src={currentUser.profile.bannerSrc} />
                        <Avatar
                            src={currentUser.profile.avatarSrc}
                            alt={currentUser.profile.handle + '-avatar'}
                        />
                        <ProfileData>
                            <div
                                style={{ fontWeight: 'bold', fontSize: '18px' }}
                            >
                                {currentUser.profile.displayName}
                            </div>
                            <div style={{ fontSize: '14px', color: 'grey' }}>
                                @{currentUser.profile.handle}
                            </div>
                            <div
                                style={{
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                }}
                            >
                                {currentUser.profile.bio}
                            </div>
                            <div
                                style={{
                                    fontSize: '16px',
                                    color: 'grey',
                                    paddingBottom: '10px',
                                }}
                            >
                                <GreyText>
                                    <FiMapPin />
                                    &nbsp;{currentUser.profile.location}
                                </GreyText>
                                <GreyText>
                                    <FiCalendar />
                                    &nbsp;Joined&nbsp;
                                    {moment(currentUser.profile.joined).format(
                                        'MMMM YYYY'
                                    )}
                                </GreyText>
                            </div>
                            2 <GreyText>Following</GreyText>2{' '}
                            <GreyText>Followers</GreyText>
                        </ProfileData>
                    </ProfileArea>
                )}
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    border-left: solid 1px lightgray;
    border-right: solid 1px lightgray;
    width: 800px;
`;

const ProfileArea = styled.div`
    width: 400px;
`;

const ProfileBanner = styled.img`
    width: 800px;
    height: 300px;
`;

const Avatar = styled.img`
    height: 120px;
    border-radius: 50%;
    margin-right: 20px;
    margin-top: -50px;
    margin-left: 15px;
    border: solid 2px white;
`;

const ProfileData = styled.div`
    width: 780px;
    padding-top: 15px;
    padding-left: 10px;
`;

const GreyText = styled.span`
    color: grey;
    padding-right: 20px;
`;

const Loading = styled.div`
    margin-top: 20px;
    width: 100px;
    height: 20px;
    text-align: center;
    background-color: lightgray;
    padding: 5px;
`;
export default Profile;
