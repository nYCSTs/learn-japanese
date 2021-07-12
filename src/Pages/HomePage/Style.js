import styled from 'styled-components';

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