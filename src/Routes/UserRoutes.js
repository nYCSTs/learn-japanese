import React, { useState } from 'react';
import {
    Route, Switch, Redirect,
} from 'react-router-dom';
import HomePage from '../Pages/HomePage/';
import Test1Page from '../Pages/Test1Page';
import Test2Page from '../Pages/Test2Page';
import Test3Page from '../Pages/Test3Page';
import AddKanjiPage from '../Pages/AddKanjiPage';
import SignInPage from '../Pages/SignInPage';
import SignUpPage from '../Pages/SignUpPage';
import { useProfileUser } from '../Context/index'; 

const OtherRoutes = () => {
    const { user } = useProfileUser();

    return (
        <>
            {!user.role ? (
                <Switch>
                    <Route path="/login" exact component={SignInPage} />
                    <Route path="/register" exact component={SignUpPage} />
                </Switch>
            ) : user.role === 'admin' ? (
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
                )
            }
        </>
    );
};

export default OtherRoutes;