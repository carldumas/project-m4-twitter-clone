// Libraries
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
// Components
import TweetActions from './TweetActions';

const Tweet = ({ tweet }) => {
    let pattern = new RegExp('^(https?|ftp)://');
    if (!pattern.test(tweet.author.avatarSrc)) {
        tweet.author.avatarSrc =
            'http://localhost:31415' + tweet.author.avatarSrc;
    }

    const mediaTweet = tweet.media.reduce(function (result, item) {
        var key = Object.keys(item)[1];
        result[key] = item[key];
        return result;
    }, {});

    return (
        <>
            <TweetItem>
                <div>
                    <Avatar
                        src={tweet.author.avatarSrc}
                        alt={tweet.author.handle + '-avatar'}
                    />
                </div>
                <div>
                    <TweetHeader>
                        <h3>{tweet.author.displayName}</h3>
                        <span>
                            &nbsp;@{tweet.author.handle}&nbsp;•&nbsp;
                            {moment(tweet.timestamp).format('MMM Do')}
                        </span>
                    </TweetHeader>
                    <div>{tweet.status}</div>
                    {mediaTweet.url && (
                        <MediaImage src={mediaTweet.url} alt="image" />
                    )}
                    <TweetActions />
                </div>
            </TweetItem>
        </>
    );
};

const TweetItem = styled.li`
    display: flex;
    padding: 20px;
    width: 720px;
    border-bottom: solid 1px lightgray;
`;

const Avatar = styled.img`
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
`;

const TweetHeader = styled.span`
    display: flex;
    line-height: 1.5;
`;

const MediaImage = styled.img`
    height: 400px;
    width: 640px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
`;

export default Tweet;
