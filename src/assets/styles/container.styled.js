
import styled from "styled-components";
import { breakpoints, devices } from "./mediaConstants";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  /* display: flex; */
  /* overflow: hidden; */
  height: 100%;
  /* height: 100vh; */
  
  padding: ${(props) => props.padding || 0};

  @media screen and (${devices.semiMobile}) {
    width: ${breakpoints.wSemiMobile};
  }
  @media screen and (${devices.tablet}) {
    width: ${breakpoints.wTablet};
  }
  @media screen and (${devices.laptop}) {
    width: ${breakpoints.wLaptop};
  }
  @media screen and (${devices.desktop}) {
    width: ${breakpoints.wDesktop};
  }
`;


