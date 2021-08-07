import React, { createContext, useContext, useState, useEffect } from 'react';
import { APIKanjis, APIUsers } from '../Services/Axios/baseService';
import { loginUser } from '../Services/Axios/userServices';
  
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        const storagedToken = localStorage.getItem('@App:token');
        const storagedUser = JSON.parse(localStorage.getItem('@App:user'));

        if (!token && storagedToken && storagedUser) {
            setToken(storagedToken);
            setUser(storagedUser);
            APIUsers.defaults.headers = { 'x-access-token': storagedToken };
            APIKanjis.defaults.headers = { 'x-access-token': storagedToken };
        }
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem('@App:token', token);
            localStorage.setItem('@App:user', user);
        }
    }, [token, user]);

    useEffect(() => {
        if (user) {
            localStorage.setItem('@App:user', JSON.stringify(user));
        }
    }, [user]);

    const handleLogin = async (username, password) => {
        const userInfo = await loginUser(username, password);
        if (!userInfo.message) {
            setToken(userInfo?.token);
            setUser(userInfo?.profile);
            return true;
        }
        return false;
    };

    return (
        <UserContext.Provider value={{
            token,
            setToken,
            user,
            setUser,
            handleLogin,
        }}
        >
        { children }
        </UserContext.Provider>
    );
};

export default UserProvider;

export function useProfileUser() {
    const Context = useContext(UserContext);
    return { ...Context };
}
  