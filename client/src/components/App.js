// Libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import GlobalStyles from './GlobalStyles';
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
            </Router>
        </>
    );
};

export default App;
