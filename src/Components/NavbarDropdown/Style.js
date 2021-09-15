import styled from "styled-components";

export const Button = styled.button`
  background-color: Transparent;
  border: 1px solid black;
  cursor: pointer;
`;

export const P = styled.p`
  margin: 0;
  display: flex;
  font-size: 13px;
`;

export const Dropdown = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
  position: absolute;
  padding: 6px 0;
  text-align: left;
  margin-top: 8px;
  border: 1px solid black;
  border-radius: 8px;
  z-index: 1;
`;