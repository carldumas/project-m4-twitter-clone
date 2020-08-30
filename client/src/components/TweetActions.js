// Libraries
import React from 'react';
import styled from 'styled-components';
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from 'react-icons/fi';

const TweetActions = () => {
    return (
        <Wrapper>
            <Anchor href="#">
                <FiMessageCircle
                    className="icon-message"
                    style={{ padding: '10px' }}
                />
            </Anchor>
            <Anchor href="#">
                <FiRepeat className="icon-repeat" style={{ padding: '10px' }} />
            </Anchor>
            <Anchor href="#">
                <FiHeart className="icon-heart" style={{ padding: '10px' }} />
            </Anchor>
            <Anchor href="#">
                <FiShare className="icon-share" style={{ padding: '10px' }} />
            </Anchor>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    margin-top: 20px;
`;

const Anchor = styled.a`
    text-decoration: none;
    color: #585858;
    &:active .icon-message {
        background-color: #e9d5e9;
        border-radius: 50%;
    }
    &:hover .icon-message {
        background-color: #e9d5e9;
        border-radius: 50%;
    }
    &:hover .icon-repeat {
        background-color: lightgray;
        border-radius: 50%;
    }
    &:hover .icon-heart {
        background-color: #ffbdbd;
        border-radius: 50%;
    }
    &:hover .icon-share {
        background-color: #e9d5e9;
        border-radius: 50%;
    }
`;

export default TweetActions;
