import styled from "styled-components";

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc((100% - 30px) / 2);
  .react-tel-input {
    display: contents;
  }
  input {
    border-radius: 5px;
    border: 1px solid;
    background-color: none;
    /* width: 100%; */
    padding: 18px;
    color: #151621;
    font-family: Circe;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 82.9%; /* 14.922px */
    letter-spacing: 2.16px;
    box-shadow: ${({meta}) =>
      meta.touched && meta.error
        ? "inset 0px 0px 5px 2px rgba(255,9,0,1)"
        : "none"};
  }
`;
export const LabelStyled = styled.label`
  color: #151621;
  font-family: Circe;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// export const InputStyled = styled.input`
//   border-radius: 5px;
//   border: 1px solid;
//   background-color: none;

//   padding: 18px;
//   color: #151621;
//   font-family: Circe;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 82.9%; /* 14.922px */
//   letter-spacing: 2.16px;
//   box-shadow: ${(props) =>
//     props.meta.touched && props.meta.error
//       ? "inset 0px 0px 5px 2px rgba(255,9,0,1)"
//       : "none"};
// `;
export const ErrorMsgWrapStyled = styled.div`
  position: absolute;
  color: red;
  font-family: Circe;
  font-size: 18px;
  top: 0;
  right: 0;
`;
/* 
export const PhoneInputWrap = styled(PhoneInput "input")`
border-radius: 5px;
border: 1px solid;
background-color: none;

padding: 18px;
color: #151621;
font-family: Circe;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 82.9%; 
letter-spacing: 2.16px; 
` */
