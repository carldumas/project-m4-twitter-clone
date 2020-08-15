// Libraries
import React from 'react';
import styled from 'styled-components';
// Constants
import { COLORS } from '../constants.js';

const HomeFeed = () => {
    return (
        <Wrapper>
            <h1>Home Feed</h1>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    color: ${COLORS.color};
`;

export default HomeFeed;
