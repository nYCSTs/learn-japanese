import { React, useState } from 'react';
import {
    SignInBox, LoginText, UserData, Bottom, P, Button,
} from './Style';
import { useProfileUser } from '../../Context/index';
import { useHistory } from 'react-router-dom';
import img from '../../Assets/Images/img1.jpg';

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
                <P>Usuario: </P>
                <input style={{ width: '100% '}} value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <P>Senha: </P>
                <input style={{ width: '100% '}} value={pass} onChange={(e) => setPass(e.target.value)}type="password"></input>
            </UserData>
            <Bottom>
                <Button onClick={() => realizarLogin() }>Entrar</Button>
                <a href="/register">cadastrar-se</a>
            </Bottom>
        </SignInBox>
    );
};

export default SigninPage;