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
import Error from './Error';
import Loader from './Loader';
import { CurrentUserContext } from './CurrentUserContext';

const App = () => {
    const { currentUser } = React.useContext(CurrentUserContext);

    if (!currentUser) {
        return (
            <Wrapper>
                <LoaderDiv>
                    <Loader />
                </LoaderDiv>
            </Wrapper>
        );
    }

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
                        <Route path="/error">
                            <Error />
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
    height: 100vh;
    display: flex;
`;

const LoaderDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 40%;
`;

export default App;
