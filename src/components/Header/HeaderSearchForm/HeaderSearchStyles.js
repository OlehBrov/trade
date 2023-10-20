import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding-left: 200px;
  border-radius: 5px;
  border: 1px solid #ecedef;
  background: #ecedef;
  &:focus{
    outline: none;
    border: 1px solid deepskyblue
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e51c23;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 50px;
  border-radius: 0px 5px 5px 0px;
  border: none;
`;
