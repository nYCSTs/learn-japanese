import styled from 'styled-components';

export const Test = styled.div`
    margin: 18px auto;
    max-width: 730px;
    padding: 26px;

    @media(max-width: 750px) {
        width: 90%;
        min-width: auto;
        background-color: transparent;
    }
`;

export const Question = styled.p`
    text-align: center;
    font-size: 32px;
    padding: 12px;
    background-color: white;
    border-radius: 24px;
    border: 1px solid black;
`;

export const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 9px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 16px;
    margin-top: 12px;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
    margin-top: 32px;

    @media(max-width: 750px) {
        flex-direction: column;
    }

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #04AA6D;
    padding: 12px 6px;
    height: 320px;
    overflow: auto;
    border: 1px solid black;
    border-radius: 18px;
    width: 20%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    cursor: pointer;

    &::-webkit-scrollbar {
        display: none;
    }

    @media(max-width: 750px) {
        width: 100%;
        height: min-content;
        margin: 12px auto;
    }
`;

export const Kanji = styled.h1`
    text-align: center;
    font-size: 42px;
    font-weight: normal;
    margin: 0;
`;

export const OnKun = styled.div`
    font-size: 18px;
`;

export const P = styled.p`
    margin: 0;
`;
