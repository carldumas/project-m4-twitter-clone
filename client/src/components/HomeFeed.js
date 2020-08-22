// Libraries
import React from 'react';
import styled from 'styled-components';
// Components
import Tweet from './Tweet';
import { CurrentUserContext } from './CurrentUserContext';

const HomeFeed = () => {
    const [currentTweets, setCurrentTweets] = React.useState(null);
    const [status, setStatus] = React.useState('loading');
    const { currentUser } = React.useContext(CurrentUserContext);

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
            <UserFeedsArea>
                {currentUser && (
                    <Avatar
                        src={currentUser.profile.avatarSrc}
                        alt={currentUser.profile.handle + '-avatar'}
                    />
                )}
                <UserInputField
                    type="text"
                    name="user-tweets"
                    placeholder="What's happening?"
                />
            </UserFeedsArea>
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
    border-left: solid 1px lightgray;
    border-right: solid 1px lightgray;
    width: 800px;
`;

const UserFeedsArea = styled.div`
    display: flex;
    height: 200px;
    border-top: solid 1px lightgray;
    border-bottom: solid 10px lightgray;
    padding: 10px;
`;

const Avatar = styled.img`
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
`;

const UserInputField = styled.textarea`
    width: 100vw;
    padding: 20px;
    text-align: top;
    font-size: 26px;
    border: none;
    outline: none;
    resize: none;
`;

const Loading = styled.div`
    margin-top: 20px;
    width: 100px;
    height: 20px;
    text-align: center;
    background-color: lightgray;
`;

export default HomeFeed;
