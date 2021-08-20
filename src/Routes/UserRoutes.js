import {
    Route, Switch,
} from 'react-router-dom';

import Test1Page from '../Pages/Test1Page';
import Test2Page from '../Pages/Test2Page';
import Test3Page from '../Pages/Test3Page';
import AddKanjiPage from '../Pages/AddKanjiPage';
import Test4Page from '../Pages/Test4Page';
import AddRadicalPage from '../Pages/AddRadicalPage';
import  HomePage from '../Pages/HomePage';
import ManageKanjiPage from '../Pages/ManageKanjiPage';
import ManageRadicalPage from '../Pages/ManageRadicalPage';
import EditRadicalPage from '../Pages/EditRadicalPage';

import { useProfileUser } from '../Context/index'; 
import EditKanjiPage from '../Pages/EditKanjiPage';

const UserRoutes = () => {
    const { user } = useProfileUser();

    return (
        <>
            {user.role === 'admin' ? (
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/teste/1" exact component={Test1Page} />
                        <Route path="/teste/2" exact component={Test2Page} />
                        <Route path="/teste/3" exact component={Test3Page} />
                        <Route path="/teste/4" exact component={Test4Page} />
                        
                        <Route path="/add-kanji" exact component={AddKanjiPage} />
                        <Route path="/add-radical" exact component={AddRadicalPage} />
                        <Route path="/manage-kanjis" exact component={ManageKanjiPage} />
                        <Route path="/manage-radicals" exact component={ManageRadicalPage} />
                        <Route path="/edit-radical/:id" exact component={EditRadicalPage} />
                        <Route path="/edit-kanji/:id" exact component={EditKanjiPage} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/teste/1" exact component={Test1Page} />
                        <Route path="/teste/2" exact component={Test2Page} />
                        <Route path="/teste/3" exact component={Test3Page} />
                        <Route path="/teste/4" exact component={Test4Page} />
                    </Switch>
                )
            }
        </>
    );
};

export default UserRoutes;