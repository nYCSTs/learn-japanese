import { React, useState } from 'react';
import {
    UserData, Bottom, Button, SignBox, SignText
} from '../SignInPage/Style';
import {
    Input, P
} from '../../Constants/testStyles';
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
        <SignBox onKeyPress={
            (event) => {
                if (event.key === 'Enter') {
                    realizarCadastro();
                }
            }
        }>
            <SignText>
                Realizar cadastro
            </SignText>
            <UserData>
                <P>Usuario: </P>
                <Input value={username} onChange={(e) => setUsername(e.target.value)}></Input>
                <P>Email: </P>
                <Input value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                <P>Senha: </P>
                <Input value={pass} onChange={(e) => setPass(e.target.value)}type="password"></Input>
                <P>Confirmar senha: </P>
                <Input value={confirmationPass} onChange={(e) => setConfirmationPass(e.target.value)}type="password"></Input>
            </UserData>
            <Bottom>
                <Button onClick={() => realizarCadastro() }>Registrar</Button>
                <a href="/login">logar-se</a>
            </Bottom>
        </SignBox>
    );
};

export default SignupPage;