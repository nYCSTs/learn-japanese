import React from 'react';
import {
    Route, Switch,
} from 'react-router-dom';

import SignInPage from '../Pages/SignInPage';
import SignUpPage from '../Pages/SignUpPage';

const OtherRoutes = () => (
    <Switch>
        <Route path="/login" exact component={SignInPage} />
        <Route path="/register" exact component={SignUpPage} />
    </Switch>
)

export default OtherRoutes;