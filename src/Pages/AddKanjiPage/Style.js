import styled from 'styled-components';

export const CreationBox = styled.div`
    width: 620px;
    margin: 20px auto;
    background-color: #e1e7f5;
    border: 1px solid black;

    @media (max-width: 750px) {
        width: 90%;
    }
`;

export const Title = styled.p`
    font-size: 2rem;
    text-align: center;
    margin: 24px 0;
`;

export const Divisao = styled.p`
    font-size: 1.5rem;
    margin: 0;
`;

export const Input = styled.input`
    margin-left: 12px;
`;

export const KanjiField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 12px;
`;

export const AddButton = styled.button`
    background-color: #1d439b;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 8px;
    margin: 0 16px;
`;

export const RemoveButton = styled.button`
    background-color: red;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 8px;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`;

export const Field = styled.div`
    margin-bottom: 24px;
`;