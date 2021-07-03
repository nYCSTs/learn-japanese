import styled from 'styled-components';

export const TrainingCard = styled.div`
    width: 280px;
    height: 240px;
    border-radius: 18px;
    border: 1px solid black;
    padding: 12px;
    display: flex;
    flex-direction: column;
    margin: 12px;

    @media(max-width: 750px) {
        width: 80%;
        text-align: center;
        margin: 12px auto;
    }  
`;

export const Content = styled.div`
    height: 100%;
`;

export const Name = styled.div`
    font-size: 15px;
    font-weight: bold;
    height: 36px;
`;

export const Description = styled.div`
    font-size: 14px;
    margin-top: 16px;
    height: 120px;
    overflow: auto;
`;

export const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 12px;
    outline: none;
    border: none;
    width: 72px;
    height: 28px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;