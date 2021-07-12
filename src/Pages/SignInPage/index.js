import { useState } from 'react';
import {
    SignBox, SignText, UserData, Bottom, Button,
} from './Style';
import {
    Input, P
} from '../../Constants/testStyles';
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
        <SignBox onKeyPress={
            (event) => {
                if (event.key === 'Enter') {
                    realizarLogin();
                }
            }
        }>
            <SignText>
                Realizar login
            </SignText>
            <UserData>
                <P>Usuario: </P>
                <Input value={username} onChange={(e) => setUsername(e.target.value)}></Input>
                <P>Senha: </P>
                <Input value={pass} onChange={(e) => setPass(e.target.value)}type="password"></Input>
            </UserData>
            <Bottom>
                <Button onClick={ () => realizarLogin() }>Entrar</Button>
                <a href="/register">cadastrar-se</a>
            </Bottom>
        </SignBox>
    );
};

export default SigninPage;