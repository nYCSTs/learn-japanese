import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import Navbar from '../Components/Navbar';
import { useProfileUser } from '../Context/index';
import OtherRoutes from './OtherRoutes';

const Routes = () => {
    const { 
        token
    } = useProfileUser();

    return (
        <BrowserRouter>
            {
                token ? (
                    <>
                        <Navbar />
                        <UserRoutes />
                    </>
                ) : 
                <OtherRoutes />
            }
        </BrowserRouter>
    );
};

export default Routes;