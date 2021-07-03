import styled from 'styled-components';

export const Test = styled.div`
    width: 40%;
    margin: 50px auto;
    background-color: #8ea1cd;
    padding: 18px;
    border-radius: 12px;
    border: 1.5px solid black;

    @media(max-width: 750px) {
        width: 80%;
    }
`;

export const Question = styled.h1`
    text-align: center;
    margin: 0;
`;

export const Answer = styled.div`
    margin: 24px 0;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 750px) {
        flex-direction: column;
    }
`;

export const Submit = styled.div`
    text-align: center;
`;

export const Input = styled.input`
    width: 100%;
`;

export const Button = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: 1px solid black;
    border-radius: 8px;
    padding: 2px 12px;
    cursor:pointer;
    font-size: 16px;
    overflow: hidden;
    outline: none;
`;

export const P = styled.p`
    display: inline-block;
    margin-right: 12px;
    width: 120px;
`;