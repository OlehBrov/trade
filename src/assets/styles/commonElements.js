import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../image/selectArrow.svg";

export const BackLinkStyled = styled(Link)`
  position: relative;
  display: block;
  color: #151621;
  font-family: Circe;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 15px;
  margin-top: 36px;
  &::before {
    content: url(${arrow});
    position: absolute;
    height: 15px;
    width: 8px;
    top: 3px;
    left: 6px;
    rotate: 90deg;
  }
`;
export const SectionHeader = styled.h2`
  color: #151621;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const SectionDescription = styled.p`
  color: #151621;
  font-family: Circe;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CatalogFLink = styled(Link)`
  color: #e51c23;

  text-align: center;
  padding-top: 18px;
  padding-bottom: 18px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 82.9%;
  border-radius: 5px;
  border: 1px solid #e51c23;
`;
