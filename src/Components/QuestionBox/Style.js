import styled from 'styled-components';

export const Main = styled.div`
    width: 680px;
    margin: 50px auto;
    background-color: #8ea1cd;
    padding: 18px;
    border-radius: 12px;
    border: 1.5px solid black;

    @media(max-width: 750px) {
        width: 80%;
    }
`;

export const Title = styled.p`
    font-size: 2rem;
    margin: 0;
    text-align: center;
    font-weight: bold; 
`;

export const InputList = styled.div`
    margin: 24px 0;

`;

export const Button = styled.button`
    height: 26px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 6px;
    font-size: 16px;
    padding: 6px 12px;
    background-color: transparent;
    font-weight: bold;
`;