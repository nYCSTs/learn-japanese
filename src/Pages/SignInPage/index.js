import { React } from 'react';
import {
    SignInBox, LoginText, UserData
} from './Style';

const SigninPage = () => {
    return (
        <SignInBox>
            <LoginText>
                Realizar login
            </LoginText>
            <UserData>
                <p>Email: </p>
                <input type="email"></input>
                <p>Senha: </p>
                <input type="password"></input>
            </UserData>
            <button>Entrar</button>
        </SignInBox>
    );
};

export default SigninPage;