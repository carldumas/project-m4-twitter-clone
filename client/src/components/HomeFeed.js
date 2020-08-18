// Libraries
import React from 'react';
import styled from 'styled-components';
// Components
import Tweet from './Tweet';

const HomeFeed = () => {
    const [currentTweets, setCurrentTweets] = React.useState(null);
    const [status, setStatus] = React.useState('loading');

    React.useEffect(() => {
        fetch('http://localhost:31415/api/me/home-feed', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                // When the data is received, update currentUser
                setCurrentTweets(data);
                // Also, set `status` to `idle`
                setStatus('idle');
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return !currentTweets ? (
        <Loading>{status}</Loading>
    ) : (
        <Wrapper>
            <h1>Home</h1>
            <ul>
                {currentTweets.tweetIds.map((tweetId) => {
                    const findTweet = currentTweets.tweetsById[tweetId];
                    return <Tweet key={findTweet.id} tweet={findTweet} />;
                })}
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

const Loading = styled.div`
    margin-top: 20px;
    width: 100px;
    height: 20px;
    text-align: center;
    background-color: lightgray;
`;

export default HomeFeed;
