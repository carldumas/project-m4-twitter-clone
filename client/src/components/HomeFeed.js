// Libraries
import React from 'react';
import styled from 'styled-components';
// Constants
import { COLORS } from '../constants.js';

const HomeFeed = () => {
    return (
        <Wrapper>
            <div>Home Feed</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    color: ${COLORS.color};
`;

export default HomeFeed;
