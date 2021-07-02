import React from 'react';
import { 
    Header, P, HeaderTop, Ul, Li, A, HeaderBottom, Content, Sign, Button,
} from './Style';
import { useProfileUser } from '../../Context/index';
import { APIUsers } from '../../Services/Axios/baseService';

const PageHeader = () => {
    const { setToken, user } = useProfileUser();

    const logout = () => {
        try {
            localStorage.clear();
            APIUsers.defaults.headers = null;
            setToken(localStorage.getItem('@App:token'));
        } catch (err) {
            alert("Nao foi possivel fazer o logout")
        }
    }

    return (
        <Header>
            <HeaderTop>
                <Content>
                    <h2>{user.username}</h2>
                    <P>Testes feitos na semana: {user.testesSemanais}</P>
                </Content>
            </HeaderTop>
            <HeaderBottom>
                <Ul>
                    <Li><A href="/">Pagina Inicial</A></Li>
                    { user.role === 'admin' ? (
                        <Li><A href="/add-kanji">Adicionar novo kanji</A></Li>
                    ) : null}
                    <Li><A href="/login" onClick={() => logout()}>Sair</A></Li>
                </Ul>
                <Sign>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </Sign>
            </HeaderBottom>
        </Header>
    );
};

export default PageHeader;