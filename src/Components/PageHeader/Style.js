import styled from 'styled-components';

export const Username = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const P = styled.p`
    display: inline-block;
    font-weight: bold;
    width: 120px;
`;

export const HeaderTop = styled.div`
    background-color: #e1e7f5;
`;

export const HeaderBottom = styled.div`
    background-color: #1d439b;
    height: 36px;
    display: flex;

    @media(max-width: 750px) {
        justify-content: center;
    }
`;

export const A = styled.a`
    display: block;
    color: white;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    align-items: center;
    padding: 4px 12px;

    &:hover {
        background-color: #e1e7f5;
        color: black;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 12px;
`;

export const Sign = styled.div`
    margin: 0 12px;
`;

export const Button = styled.button`
    margin: 0 4px;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: 1px solid black;
    padding: 2px 18px;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    color: white;
    border-radius: 12px;

    &:hover {
        color: black;
        background-color: white;
    }
`;

export const List = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: center;

    @media (max-width: 750px) {
        justify-content: space-evenly;
    }
`;