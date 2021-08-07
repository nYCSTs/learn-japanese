import { APIKanjis, APIUsers } from './baseService/index';
import { useProfileUser } from '../../Context/index';

export const loginUser = async (username, pass) => {
    try {
        const response = await APIUsers.post('/login', { username, pass });
        if (response.data.message) {
            alert("Usuario e/ou senha incorretos!");
        } else {
            APIUsers.defaults.headers = { 'x-access-token': response.data.token };
            APIKanjis.defaults.headers = { 'x-access-token': response.data.token };
        }
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const createAccount = async (username, email, pass) => {
    try {
        const response = await APIUsers.post('/register', {
            username,
            email,
            pass,
            role: 'user'
        });
        if (response.data.keyValue) {
            if (response.data.keyValue.username) {
                alert("Usuario ja cadastrado");
            } else if (response.data.keyValue.email) {
                alert("Email ja cadastrado");
            }
            return false;
        }
        return true;
    } catch (err) {
        console.error(err);
        return null;
    }
}