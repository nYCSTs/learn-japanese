import styled from 'styled-components';

export const Test = styled.div`
    margin: 28px auto;
    border: 2px solid black;
    border-radius: 12px;
    padding: 18px;
    width: min-content;

    @media(max-width: 750px) {
        width: 80%;
    }

`;

export const Question = styled.p`
    text-align: center;
    font-size: 42px;
    margin: 0 82px 24px 82px;

    @media(max-width: 750px) {
        margin: 0;
    }
`;

export const Button = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 16px;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 750px) {
        flex-direction: column;
        text-align: center;
    }

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #04AA6D;
    width: 160px;
    height: 320px;
    border: 1px solid black;
    border-radius: 18px;
    padding: 2%;
    margin: 36px;

    @media(max-width: 750px) {
        width: 90%;
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

