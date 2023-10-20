import { Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f9f9f9;
  padding: 30px 40px;
  align-items: center;
  justify-content: center;
`;

export const FormStyled = styled(Form)`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const RegBtn = styled.button`
  border-radius: 5px;
  width: 40%;
  background: ${(props) => (props.value === "submit" ? "#FFF" : "#E51C23")};
  color: ${(props) => (props.value === "submit" ? "#E51C23" : "#FFF")};
  border: 1px solid #e51c23;
  text-align: center;
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 82.9%;
  padding: ${(props)=> props.page === "login" && "29px"};
`;
export const FormBtnWrap = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: ${(props)=>props.page === "login" ? "center" : "space-between"} ;
  padding-top: 29px;
  gap: ${(props)=>props.page === "login" && "30px"};
`;
export const RegisterPromotionWrap = styled.div`
  display: flex;
  background-color: #f9f9f9;
  justify-content: center;
  margin-top: 30px;
  padding: 30px;
  align-items: center;
  gap: 30px;
`;
export const AuthBtnLink = styled(Link)`
  border-radius: 5px;
  padding: 15px 10px;
  background: "#E51C23";
  color: "#FFF";
  border: 1px solid #e51c23;
  text-align: center;
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 82.9%;
`;
