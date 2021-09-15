import styled from 'styled-components';

export const Nav = styled.div`
  background-color: rgb(248, 249, 249);
  padding: 5px 12px 12px 10px;
  margin-bottom: 24px;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavRight = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid black;
  padding: 4px;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  margin-bottom: 12px;

  @media(max-width: 750px) {
    font-size: 20px;
  }
`;

export const Br = styled.br`
  display: inline;
`;

export const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const A = styled.a`
  text-decoration: none;
  color: black;
  padding: 4px 8px;
  font-size: 14px;

  &:hover {
    background-color: rgba(232, 232, 232, 1);
  }
`;

export const NavbarItem = styled.a`
  background-color: Transparent;
  border: 1px solid black;
  text-decoration: none;
  font-size: 13px;
  padding: 1px 6px;
  color: black;
`;

export const Hr = styled.hr`
  width: 90%;
  margin: 4px auto;
`;

export const Button = styled.button`
  background-color: Transparent;
  border: 1px solid black;
  padding: 2px 8px;
  cursor: pointer;
  margin-right: 12px;
  border-radius: 6px;
`;

export const Links = styled.div`
`;