import styled from 'styled-components';

export const Nav = styled.div`
  background-color: #FEA82F;
  padding: 9px 18px;
  margin-bottom: 24px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  @media(max-width: 750px) {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: flex-end;
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
  align-items: flex-end;
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
  cursor: pointer;
`;

// export const Username = styled.a`
//     display: flex;
//     align-items: center;
//     font-size: 1.5rem;
//     font-weight: bold;
//     margin: 0;
//     color: black;
//     text-decoration: none;
// `;

// export const P = styled.p`
//     display: inline-block;
//     font-weight: bold;
//     margin: 0;
//     display: flex;
//     align-items: center;

//     @media(max-width: 990px) {
//         width: 100px;
//     }
// `;

// export const HeaderTop = styled.div`
//     background-color: #e1e7f5;
// `;

// export const Content = styled.div`
//     display: flex;
//     margin: 0 12px;
//     justify-content: space-between;
// `;