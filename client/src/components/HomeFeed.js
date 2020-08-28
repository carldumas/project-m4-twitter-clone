// Libraries
import React from 'react';
import styled from 'styled-components';
// Components
import Tweet from './Tweet';
import UserTweets from './UserTweets';
import { CurrentUserContext } from './CurrentUserContext';

const HomeFeed = () => {
    const { currentUser } = React.useContext(CurrentUserContext);
    const [currentTweets, setCurrentTweets] = React.useState(null);
    const [status, setStatus] = React.useState('Loading');

    const sendTweets = () => {
        fetchTweets();
    };

    const fetchTweets = () => {
        fetch('http://localhost:31415/api/me/home-feed', { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                // When the data is received, update currentTweets
                setCurrentTweets(data);
                // set `status` to `idle`
                setStatus('idle');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert(`We're sorry but we're unable to process your request.`);
                window.location.reload(true);
            });
    };

    React.useEffect(fetchTweets, []);

    return !currentTweets ? (
        <Loading>{status}</Loading>
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
                            aria-label="View Tweet"
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

const Loading = styled.div`
    margin-top: 20px;
    width: 100px;
    height: 20px;
    text-align: center;
    background-color: lightgray;
    padding: 5px;
`;

export default HomeFeed;
