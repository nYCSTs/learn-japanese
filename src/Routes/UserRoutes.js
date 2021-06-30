import React, { useState } from 'react';
import {
    Route, Switch,
} from 'react-router-dom';
import HomePage from '../Pages/HomePage/';
import Test1Page from '../Pages/Test1Page';
import Test2Page from '../Pages/Test2Page';
import Test3Page from '../Pages/Test3Page';
import AddKanjiPage from '../Pages/AddKanjiPage';

const OtherRoutes = () => {
    const [userRole, setUserRole] = useState('admin');

    return (
        <>
            {userRole === 'admin' ? (
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/teste/1" exact component={Test1Page} />
                    <Route path="/teste/2" exact component={Test2Page} />
                    <Route path="/teste/3" exact component={Test3Page} />
                    <Route path="/add-kanji" exact component={AddKanjiPage} />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/teste/1" exact component={Test1Page} />
                    <Route path="/teste/2" exact component={Test2Page} />
                    <Route path="/teste/3" exact component={Test3Page} />
                </Switch>
            )}
        </>
    );
};

export default OtherRoutes;