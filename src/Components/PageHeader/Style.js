import styled from 'styled-components';

export const Username = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
`;

export const P = styled.p`
    display: inline-block;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;

    @media(max-width: 990px) {
        width: 100px;
    }
`;

export const HeaderTop = styled.div`
    background-color: #e1e7f5;
`;

export const Content = styled.div`
    display: flex;
    margin: 0 12px;
    justify-content: space-between;
`;