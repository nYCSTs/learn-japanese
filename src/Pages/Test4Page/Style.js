import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TipField = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tip = styled.p`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
`;

export const Reading = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 24px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid black;
    border-radius: 12px;
    padding: 4px 8px;
    font-size: 14px;
`;

export const AnswerBox = styled.div`
    width: min-content;
    background-color: #8ea1cd;
    margin: 0 auto;
    padding: 32px;
    text-align: center;
    border-radius: 12px;
    border: 1px solid black;
`;