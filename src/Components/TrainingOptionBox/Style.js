import styled from 'styled-components';

export const TrainingCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color:  #F6F6F6;
    margin: 0 auto;
    margin-bottom: 36px;
    padding: 16px;
    border-radius: 12px;
    width: 80%;
    height: 240px;
`;

export const Name = styled.div`
    font-size: 15px;
    font-weight: bold;
    text-align: center;
`;

export const Description = styled.div`
    font-size: 14px;
    margin-top: 16px;
`;

export const Button = styled.button`
    background-color: #F6F6F6;
    border: 1px solid black;
    color: black;
    border-radius: 12px;
    outline: none;
    width: 72px;
    height: 28px;
    cursor: pointer;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-item: flex-end;
  justify-content: center;
`;

export const TestInfo = styled.div`

`;