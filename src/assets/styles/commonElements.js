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
