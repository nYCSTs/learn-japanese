import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './UserRoutes';

const Routes = () => (
    <BrowserRouter>
        <UserRoutes />
    </BrowserRouter>
)

export default Routes;