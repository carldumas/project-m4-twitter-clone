// Libraries
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import GlobalStyles from './GlobalStyles';
import Sidebar from './Sidebar';
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import TweetDetails from './TweetDetails';
import Profile from './Profile';

const App = () => {
    return (
        <>
            <Router>
                <GlobalStyles />
                <Wrapper>
                    <Sidebar />
                    <Switch>
                        <Route exact path="/">
                            <HomeFeed />
                        </Route>
                        <Route exact path="/notifications">
                            <Notifications />
                        </Route>
                        <Route exact path="/bookmarks">
                            <Bookmarks />
                        </Route>
                        <Route exact path="/tweet/:tweetId">
                            <TweetDetails />
                        </Route>
                        <Route exact path="/:profileId">
                            <Profile />
                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        </>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export default App;
