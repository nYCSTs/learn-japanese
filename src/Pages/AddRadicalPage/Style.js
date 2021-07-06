import styled from 'styled-components';

export  const RadicalsBox = styled.div`
    background-color: #8ea1cd;
    margin: 30px auto;
    width: 40%;
    text-align: center;
    padding: 32px 0;
    border: 1px solid black;
    border-radius: 12px;

    @media(max-width: 750px) {
        width: 90%;
    }
`;

export const InputDiv = styled.div`
    margin: 12px;
    text-align: left;
`;

export const Title = styled.div`
    font-size: 1.5rem;
    text-align: center;
`;

export const P = styled.p`
    display: inline-block;
    margin-right: 12px;
    width: 100px; 
`;