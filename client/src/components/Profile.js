// Libraries
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
// Components
import Tweet from './Tweet';
import Error from './Error';
import Loader from './Loader';
import { CurrentUserContext } from './CurrentUserContext';

const Profile = () => {
    const { currentUser } = React.useContext(CurrentUserContext);
    const [currentUserTweets, setCurrentUserTweets] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [status, setStatus] = React.useState('Loading');

    const fetchCurrentUserTweets = () => {
        fetch(`/api/${currentUser.profile.handle}/feed`, { method: 'GET' })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(
                        'Unable to complete fetch GET current user tweets request.'
                    );
                }
            })
            .then((data) => {
                // When the data is received, update currentUserTweets
                setCurrentUserTweets(data);
                // set `status` to `idle`
                setStatus('idle');
            })
            .catch((error) => {
                setError(error);
            });
    };

    React.useEffect(fetchCurrentUserTweets, []);

    return !currentUserTweets ? (
        <Wrapper>
            <LoaderDiv>
                <Loader />
            </LoaderDiv>
        </Wrapper>
    ) : (
        <>
            <Wrapper>
                <ProfileArea>
                    <ProfileBanner src={currentUser.profile.bannerSrc} />
                    <Avatar
                        src={currentUser.profile.avatarSrc}
                        alt={currentUser.profile.handle + '-avatar'}
                    />
                    <ProfileData>
                        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
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
                        {currentUser.profile.numFollowing}{' '}
                        <GreyText>Following</GreyText>
                        {currentUser.profile.numFollowers}{' '}
                        <GreyText>Followers</GreyText>
                    </ProfileData>
                    <TabContainer>
                        <Tab>Tweets</Tab>
                        <Tab>Media</Tab>
                        <Tab>Likes</Tab>
                    </TabContainer>

                    <ul>
                        {' '}
                        {currentUserTweets.tweetIds.map((tweetId) => {
                            const foundTweet =
                                currentUserTweets.tweetsById[tweetId];
                            return (
                                <Tweet
                                    key={tweetId}
                                    tweet={foundTweet}
                                    aria-label="View tweet"
                                />
                            );
                        })}
                    </ul>
                </ProfileArea>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    border-left: solid 1px lightgray;
    border-right: solid 1px lightgray;
    width: 760px; ;
`;

const ProfileArea = styled.div`
    width: 400px;
`;

const ProfileBanner = styled.img`
    width: 760px;
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
    width: 740px;
    padding-top: 15px;
    padding-left: 10px;
`;

const GreyText = styled.span`
    color: grey;
    padding-right: 20px;
`;

const LoaderDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 40%;
`;

const TabContainer = styled.div`
    display: inline-flex;
    width: 760px;
    margin-top: 40px;
    border-bottom: solid 1px lightgray;
`;

const Tab = styled.div`
    width: 253px;
    text-align: center;
    padding-bottom: 20px;
`;

export default Profile;
