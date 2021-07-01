import styled from 'styled-components';

export const Header = styled.header`
`;

export const P = styled.p`
    display: inline-block;
    font-weight: bold;
`;

export const HeaderTop = styled.div`
    background-color: #e1e7f5;
`;

export const HeaderBottom = styled.div`
    background-color: #1d439b;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

export const A = styled.a`
    display: block;
    color: white;
    text-align: center;
    padding: 12px 8px;
    font-size: 12px;
    text-decoration: none;
`;

export const Li = styled.li`
    float: left;

    &:hover ${A} {
        background-color: #e1e7f5;
        color: black;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 16px;
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