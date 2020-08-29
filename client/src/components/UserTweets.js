// Libraries
import React, { useState, useContext } from 'react';
import { CurrentUserContext } from './CurrentUserContext';
// Components
import styled from 'styled-components';

const UserTweets = () => {
    const [currentTweet, setCurrentTweet] = useState('');
    const [status] = React.useState('Loading');
    const { currentUser } = useContext(CurrentUserContext);
    const maxChar = 280;

    const handleOnChange = (e) => {
        setCurrentTweet(e.target.value);
    };

    const handleSubmitTweet = () => {
        fetch(`http://localhost:31415/api/tweet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: currentTweet }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    window.location.href = '/error';
                }
            })

            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmitTweet}>
                <TweetInputBox
                    id="tweet-input-box"
                    placeholder="What's happening?"
                    type="text"
                    name="content"
                    value={currentTweet}
                    onChange={handleOnChange}
                />
                <MeowButtonSection>
                    <Paragraph
                        id="characters-count"
                        style={
                            currentTweet.length > 280 ? { color: 'red' } : {}
                        }
                    >
                        {maxChar - currentTweet.length}
                    </Paragraph>
                    <MeowButton
                        disabled={
                            currentTweet.length <= 0 ||
                            currentTweet.length > 280
                        }
                        type="submit"
                    >
                        Meow
                    </MeowButton>
                </MeowButtonSection>
            </form>
        </>
    );
};

const TweetInputBox = styled.textarea`
    width: 650px;
    height: 150px;
    text-align: top;
    font-size: 26px;
    border: none;
    outline: none;
    resize: none;
`;

const MeowButtonSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 646px;
    padding: 0;
`;

const Paragraph = styled.p`
    display: inline;
    padding-right: 5px;
`;

const MeowButton = styled.button`
    align-self: flex-end;
    height: 40px;
    width: 80px;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    text-align: center;
    outline: none;
    background-color: blue;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        border: none;
        color: white;
        cursor: not-allowed;
    }
`;

const Loading = styled.div`
    margin-top: 20px;
    width: 100px;
    height: 20px;
    text-align: center;
    background-color: lightgray;
    padding: 5px;
`;

export default UserTweets;
