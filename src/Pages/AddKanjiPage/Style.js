import styled from 'styled-components';

export const Divisao = styled.p`
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const KanjiField = styled.div`
    display: flex;
    margin: 8px 0;

    @media(max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;

export const AddButton = styled.button`
    background-color: #1d439b;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    border-radius: 8px;
    margin: 0 8px;
    width: min-content;
    height: min-content;

    @media(max-width: 750px) {
        margin-left: 0px;
    }
`;

export const RemoveButton = styled.button`
    background-color: red;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    border-radius: 8px;
    width: min-content;
    height: min-content;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 750px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Hr = styled.hr`
    display: none;

    @media(max-width: 750px) {
        display: block;
    }

`;