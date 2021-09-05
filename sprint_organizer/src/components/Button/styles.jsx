import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  width: 130px;
  padding: 10px 25px;
  border: 2px solid #11998e;
  color: #333;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #11998e20, 4px 4px 5px 0px #11998e10;
  }

  &:active {
    transform: scale(0.97);
  }
`;
