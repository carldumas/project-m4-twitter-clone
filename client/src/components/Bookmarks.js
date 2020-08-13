// Libraries
import React from 'react';
import styled from 'styled-components';
// Constants
import { COLORS } from '../constants.js';

const Bookmarks = () => {
    return (
        <Wrapper>
            <div>Bookmarks</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    color: ${COLORS.color};
`;

export default Bookmarks;
