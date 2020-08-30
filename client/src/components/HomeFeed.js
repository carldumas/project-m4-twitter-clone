// Libraries
import React from 'react';
import styled from 'styled-components';
// Components
import Tweet from './Tweet';
import UserTweets from './UserTweets';
import Loader from './Loader';
import { CurrentUserContext } from './CurrentUserContext';

const HomeFeed = () => {
    const { currentUser } = React.useContext(CurrentUserContext);
    const [currentTweets, setCurrentTweets] = React.useState(null);
    const [status, setStatus] = React.useState('Loading');

    const sendTweets = () => {
        fetchTweets();
    };

    const fetchTweets = () => {
        fetch('/api/me/home-feed', { method: 'GET' })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    window.location.href = '/error';
                }
            })
            .then((data) => {
                // When the data is received, update currentTweets
                setCurrentTweets(data);
                // set `status` to `idle`
                setStatus('idle');
            })
            .catch((error) => {
                console.error('Error:', error);
                window.location.href = '/error';
            });
    };

    React.useEffect(fetchTweets, []);

    return !currentTweets ? (
        <Wrapper>
            <LoaderDiv>
                <Loader />
            </LoaderDiv>
        </Wrapper>
    ) : (
        <Wrapper>
            <h1>Home</h1>
            <UserFeedsArea>
                <Avatar
                    src={currentUser.profile.avatarSrc}
                    alt={currentUser.profile.handle + '-avatar'}
                />
                <UserTweets sendTweets={sendTweets} />
            </UserFeedsArea>
            <ul>
                {' '}
                {currentTweets.tweetIds.map((tweetId) => {
                    const foundTweet = currentTweets.tweetsById[tweetId];
                    return (
                        <Tweet
                            key={tweetId}
                            tweet={foundTweet}
                            aria-label="view tweet"
                        />
                    );
                })}
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-left: solid 1px lightgray;
    border-right: solid 1px lightgray;
    width: 760px;
`;

const UserFeedsArea = styled.div`
    display: flex;
    height: 200px;
    border-top: solid 1px lightgray;
    border-bottom: solid 10px lightgray;
    padding: 20px;
`;

const Avatar = styled.img`
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
`;

const LoaderDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 40%;
`;

export default HomeFeed;
