import { React, useState } from 'react';
import {
    SignInBox, LoginText, UserData, Bottom, P
} from './Style';
import { useProfileUser } from '../../Context/index';
import { useHistory } from 'react-router-dom';

const SigninPage = () => {
    const history = useHistory();
    const { handleLogin } = useProfileUser();
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const realizarLogin = async () => {
        if (await handleLogin(username, pass)) {
            return history.push('/');
        }
    }

    return (
        <SignInBox>
            <LoginText>
                Realizar login
            </LoginText>
            <UserData>
                <p>Usuario: </p>
                <input style={{ width: '100% '}} value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <p>Senha: </p>
                <input style={{ width: '100% '}} value={pass} onChange={(e) => setPass(e.target.value)}type="password"></input>
            </UserData>
            <Bottom>
                <button onClick={() => realizarLogin() }>Entrar</button>
                <a href="/register">cadastrar-se</a>
            </Bottom>
        </SignInBox>
    );
};

export default SigninPage;