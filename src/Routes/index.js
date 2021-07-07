import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import PageHeader from '../Components/PageHeader';
import { useProfileUser } from '../Context/index';
import OtherRoutes from './OtherRoutes';

const Routes = () => {
    const { 
        token
    } = useProfileUser();

    console.log(token);

    return (
        <BrowserRouter>
            {
                token ? (
                    <>
                        <PageHeader />
                        <UserRoutes />
                    </>
                ) : 
                <OtherRoutes />
            }
        </BrowserRouter>
    );
};

export default Routes;