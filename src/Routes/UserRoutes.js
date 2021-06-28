import React, { useState } from 'react';
import {
    Route, Switch,
} from 'react-router-dom';
import HomePage from '../Pages/HomePage/';
import Test1Page from '../Pages/Test1Page';
import AddKanjiPage from '../Pages/AddKanjiPage';

const OtherRoutes = () => {
    const [userRole, setUserRole] = useState('admin');

    return (
        <>
            {userRole === 'admin' ? (
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/teste/1" exact component={Test1Page} />
                    <Route path="/add-kanji" exact component={AddKanjiPage} />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/teste/1" exact component={Test1Page} />
                </Switch>
            )}
        </>
    );
};

export default OtherRoutes;