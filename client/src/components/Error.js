// Libraries
import React from 'react';
import styled from 'styled-components';
import { GiRollingBomb } from 'react-icons/gi';

const Error = () => {
    return (
        <Wrapper>
            <GiRollingBomb style={{ fontSize: '50px' }} />

            <HeadingText>An unknown error has occured.</HeadingText>
            <p>
                Please try refreshing the page, or{' '}
                <Link target="_self" href={'#'}>
                    contact support
                </Link>{' '}
                if the problem persists.
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-left: solid 1px lightgray;
    border-right: solid 1px lightgray;
    width: 760px;
    padding-top: 5%;
`;

const HeadingText = styled.h2`
    padding: 40px;
    size: 22px;
`;

const Link = styled.a`
    color: blue;
    &:hover {
        text-decoration: underline;
    }
    &:active {
        color: blue;
    }
`;

export default Error;
