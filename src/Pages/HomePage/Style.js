import styled from 'styled-components';

export const Page = styled.div`
`;


export const TrainingList = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 36px 0;
    flex-wrap: wrap;

    @media(max-width: 750px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Footer = styled.footer` 
`;

export const P = styled.p`
    font-size: 1.5rem;
    text-align: center;
`;