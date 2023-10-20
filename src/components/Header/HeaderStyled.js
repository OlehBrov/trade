import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import arrowImg from "../../assets/image/selectArrow.svg";
import clockSvg from "../../assets/image/clock.svg";

export const HeaderStyled = styled.header`
  width: 100%;
`;
export const HeaderSaleBanner = styled.div`
  border-radius: 5px;
  background: linear-gradient(98deg, #673ab7 10.47%, #151621 82.99%);
  display: flex;
`;
export const HeaderMiddleSection = styled.div`
  width: 100%;
  background: #ecedef;
`;
export const HeaderBottomSection = styled.div`
  background: #151621;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
`;
export const HeaderSaleWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 9px;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderSaleH1 = styled.h1`
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  line-height: 44px;
`;
export const HeaderSaleH2 = styled(HeaderSaleH1)`
  font-weight: 700;
`;
export const HeaderSaleText = styled(HeaderSaleH1)`
  font-weight: 400;
`;
export const HeaderSaleButton = styled(Link)`
  /* cursor: pointer; */
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 82.9%;
  border: 1px solid #ecedef;
  border-radius: 5px;
  padding: 6px 46px;
  &:hover {
    border: 1px solid blue;
  }
`;
export const HeaderMain = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const LocationSelectorWrap = styled.div`
  position: relative;
`;

export const LocationSelector = styled.select`
  background: url(${(props) => props.background});
  background-position: right 0px top 80%;
  background-repeat: no-repeat;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 20px;
  text-align: right;
  border: none;
`;
export const LocationImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 99; */
`;
export const ScheduleWrap = styled.div`
  margin: 0 57px;
`;

export const ScheduleBtn = styled.button`
  display: flex;
  position: relative;
  border-radius: 5px;
  background: #e51c23;
  border: none;
  border-radius: 5px;
  color: #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 4px 74px 4px 40px;

  &::before {
    content: url(${(props) => props.clock});
    position: absolute;
    top: 4px;
    left: 11px;
  }
  &::after {
    content: url(${(props) => props.arrow});
    position: absolute;
    top: 6px;
    right: 7px;
  }
`;
export const NavigationWrap = styled.nav`
  display: flex;
  flex-grow: 1;
`;
export const NavLinkList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const NavLinkStyled = styled(NavLink)`
  color: #151621;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HeaderBottomWrap = styled.div`
  display: flex;
  padding-top: 32px;
  padding-bottom: 30px;
`;
export const LogoLink = styled(Link)`
  color: #e51c23;

  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  align-self: center;
`;
export const PhoneNumsWrap = styled.div`
  position: relative;
  border-radius: 5px;
  margin-left: 63px;
  margin-right: 30px;
  width: 208px;
  /* background: #ecedef; */
`;
export const HeaderSearchWrap = styled.div`
  display: flex;
  width: -webkit-fill-available;
`;

export const UserLinksWrap = styled.div`
  display: flex;
  margin-right: 0;
  margin-left: 40px;
  align-items: center;
`;

export const UserLinksList = styled.ul`
  display: flex;

  gap: 35px;
`;
