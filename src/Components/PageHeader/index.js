import React from 'react';
import { 
    P, HeaderTop, A, HeaderBottom, Content, List, Username,
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
        <div style={{ width: '100%' }}>
            <HeaderTop>
                <Content>
                    <Username>{user.username}</Username>
                    <P>Testes feitos na semana: {user.testesSemanais}</P>
                </Content>
            </HeaderTop>
            <HeaderBottom>
                <List>
                    <A href="/">Pagina Inicial</A>
                    { user.role === 'admin' ? (
                        <>
                            <A href="/add-kanji">Cadastrar Kanji</A>
                            <A href="/add-radical">Cadastrar Radical</A>
                        </>
                    ) : null}
                    <A href="/login" onClick={() => logout()}>Sair</A>
                </List>
            </HeaderBottom>
        </div>
    );
};

export default PageHeader;