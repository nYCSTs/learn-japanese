import styled from 'styled-components';

export const TrainingBox = styled.div`
    width: 25%;
    border-radius: 18px;
    border: 1px solid black;
    padding: 12px;
    display: flex;
    flex-direction: column;
    margin: 12px 0;

    @media(max-width: 750px) {
        width: 80%;
        text-align: center;
        margin: 12px auto;
    }  
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

`;

export const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 12px;
    outline: none;
    border: none;
    width: 82px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;