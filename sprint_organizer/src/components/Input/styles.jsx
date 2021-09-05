import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & span {
    font-size: 0.9rem;
    color: red;
    font-weight: 600;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: fit-content;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 0.9rem;
  color: #9b9b9b;
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.2rem;
  color: #333;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${Label} {
    font-size: 1.2rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ ${Label} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.9rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;