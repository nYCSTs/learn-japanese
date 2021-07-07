import React, { useState } from 'react';
import {
    Route, Switch, Redirect,
} from 'react-router-dom';

import Test1Page from '../Pages/Test1Page';
import Test2Page from '../Pages/Test2Page';
import Test3Page from '../Pages/Test3Page';
import AddKanjiPage from '../Pages/AddKanjiPage';
import Test4Page from '../Pages/Test4Page';
import AddRadicalPage from '../Pages/AddRadicalPage';
import  HomePage from '../Pages/HomePage';
import Test5Page from '../Pages/Test5Page';

import { useProfileUser } from '../Context/index'; 

const UserRoutes = () => {
    const { user } = useProfileUser();
    console.log(user);

    return (
        <>
            {user.role === 'admin' ? (
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/teste/1" exact component={Test1Page} />
                        <Route path="/teste/2" exact component={Test2Page} />
                        <Route path="/teste/3" exact component={Test3Page} />
                        <Route path="/teste/4" exact component={Test4Page} />
                        <Route path="/teste/5" exact component={Test5Page} />
                        
                        <Route path="/add-kanji" exact component={AddKanjiPage} />
                        <Route path="/add-radical" exact component={AddRadicalPage} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/teste/1" exact component={Test1Page} />
                        <Route path="/teste/2" exact component={Test2Page} />
                        <Route path="/teste/3" exact component={Test3Page} />
                        <Route path="/teste/4" exact component={Test4Page} />
                        <Route path="/teste/5" exact component={Test5Page} />
                    </Switch>
                )
            }
        </>
    );
};

export default UserRoutes;