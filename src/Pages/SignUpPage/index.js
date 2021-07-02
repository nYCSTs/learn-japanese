import { React, useState } from 'react';
import {
    SignUpBox, RegisterText,
} from './Style';
import {
    UserData, Bottom,
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
                <p>Usuario: </p>
                <input style={{ width: '100% '}} value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <p>Email: </p>
                <input style={{ width: '100% '}} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p>Senha: </p>
                <input style={{ width: '100% '}} value={pass} onChange={(e) => setPass(e.target.value)}type="password"></input>
                <p>Confirmar senha: </p>
                <input style={{ width: '100% '}} value={confirmationPass} onChange={(e) => setConfirmationPass(e.target.value)}type="password"></input>
            </UserData>
            <Bottom>
                <button onClick={() => realizarCadastro() }>Registrar</button>
                <a href="/login">logar-se</a>
            </Bottom>
        </SignUpBox>
    );
};

export default SignupPage;