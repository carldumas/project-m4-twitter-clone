// Libraries
import React from 'react';
import styled from 'styled-components';
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from 'react-icons/fi';

const TweetActions = () => {
    return (
        <Wrapper>
            <FiMessageCircle />
            <FiRepeat />
            <FiHeart />
            <FiShare />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
`;

export default TweetActions;
