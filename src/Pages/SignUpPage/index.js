import { React, useState } from 'react';
import {
    SignUpBox, RegisterText,
} from './Style';
import {
    UserData, Bottom, P, Button,
} from '../SignInPage/Style';
import { createAccount } from '../../Services/Axios/userServices';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [confirmationPass, setConfirmationPass] = useState('');
    const [email, setEmail] = useState('');

    const realizarCadastro = async () => {
        if (pass !== confirmationPass) {
            alert("As senhas não correspondem.");
            setPass('');
            setConfirmationPass('');
        } else if (username === '' || pass === '' || confirmationPass === '' || email === '') {
            alert("Preencha todos os campos");
        } else {
            if (await createAccount(username, email, pass)) {
                alert('Conta criada com sucesso!');
                return history.push('/login');
            } 
        }
    }

    return (
        <SignUpBox>
            <RegisterText>
                Realizar cadastro
            </RegisterText>
            <UserData>
                <P>Usuario: </P>
                <input style={{ width: '100% '}} value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <P>Email: </P>
                <input style={{ width: '100% '}} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <P>Senha: </P>
                <input style={{ width: '100% '}} value={pass} onChange={(e) => setPass(e.target.value)}type="password"></input>
                <P>Confirmar senha: </P>
                <input style={{ width: '100% '}} value={confirmationPass} onChange={(e) => setConfirmationPass(e.target.value)}type="password"></input>
            </UserData>
            <Bottom>
                <Button onClick={() => realizarCadastro() }>Registrar</Button>
                <a href="/login">logar-se</a>
            </Bottom>
        </SignUpBox>
    );
};

export default SignupPage;