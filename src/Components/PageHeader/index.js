import React from 'react';
import { 
    Header, P, HeaderTop, Ul, Li, A, HeaderBottom,
} from './Style';

const PageHeader = () => {
    return (
        <Header>
                <HeaderTop>
                    <h2>Lucas Andrade</h2>
                    <P>Testes feitos na semana: 15</P>
                </HeaderTop>
                <HeaderBottom>
                    <Ul>
                        <Li><A href="/">Pagina Inicial</A></Li>
                        <Li><A href="/add-kanji">Adicionar novo kanji</A></Li>
                        <Li><A>Sair</A></Li>
                    </Ul>
                </HeaderBottom>
        </Header>
    );
};

export default PageHeader;