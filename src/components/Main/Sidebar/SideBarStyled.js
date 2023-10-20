import styled from "styled-components";
import { Link } from "react-router-dom";
export const SideBarContainer = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
`;

export const SideMenu = styled.ul`
overflow: hidden;
border-radius: 5px;
height: 75px;
background: #FFF;
box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.10);
`;

export const MenuItem = styled.li`
position: relative;
  padding: 23px 26px 30px;
`;
export const StyledMenuLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #151621;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 85.9%; /* 13.744px */
`;
export const MenuCategoryName = styled.p`
width: 70%;
`

export const CategoryLogo = styled.img`
position: absolute;
top: 23px;
right: 23px;
`