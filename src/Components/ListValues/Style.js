import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px;
`;

export const Buttons = styled.div`
    width: 86px;
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    background-color: Transparent;
    background-repeat: no-repeat;
    border: 1px solid black;
    border-radius: 100%;
    height: min-content;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    align-items: center;
`;

export const Readings = styled.div`
    margin-left: 12px;
`;

export const Reading = styled.div`
`;

export const Values = styled.div`
    display: flex;
`;

export const P = styled.p`
    margin: 0;
`;

export const ContentField = styled.div`
    width: 140px;
    margin: 0 26px;
    text-align: center;
`;

export const Kanji = styled.h1`
`;