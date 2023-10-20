import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Select from "react-select";
import { useSelector } from "react-redux";
import arrowImg from "../../assets/image/selectArrow.svg";
import mapImage from "../../assets/image/map.png";
import timeWorkingImage from "../../assets/image/timeWorking.png";
import downArrowImage from "../../assets/image/down.png";
import searchImage from "../../assets/image/search.png";
import userImage from "../../assets/image/user.png";
import heartImage from "../../assets/image/heart.png";
import cartImage from "../../assets/image/shopping-cart.png";
import telImage from "../../assets/image/tel.png";
import clockSvg from "../../assets/image/clock.svg";
import scheduleArrow from "../../assets/image/dropdownArrowWhite.svg";
import phoneSvg from "../../assets/image/phoneImg.svg";
import { RiUserLine, RiHeart3Line, RiShoppingCart2Line } from "react-icons/ri";
import {
  selectTimeWork,
  selectPhones,
  selectSocialMedia,
} from "../../redux/ourSettings/ourSettingsSelectors";

import {
  HeaderBottomSection,
  HeaderBottomWrap,
  HeaderMain,
  HeaderMiddleSection,
  HeaderSaleBanner,
  HeaderSaleButton,
  HeaderSaleH1,
  HeaderSaleH2,
  HeaderSaleWrapper,
  HeaderSearchWrap,
  HeaderStyled,
  LocationImg,
  LocationSelector,
  LocationSelectorWrap,
  LogoLink,
  NavLinkList,
  NavLinkStyled,
  NavigationWrap,
  PhoneNumsWrap,
  PhonesList,
  ScheduleBtn,
  ScheduleWrap,
  SearchBtn,
  UserLinksList,
  UserLinksWrap,
  VisiblePhoneNum,
} from "./HeaderStyled";
import { Container } from "../../assets/styles/container.styled";
import ReactSelect from "react-select";
import {
  HeaderSearch,
  HeaderSearchForm,
  SearchEnhancedForm,
} from "./HeaderSearchForm/HeaderSearchForm";
import { selectAuthIsLoggedIn } from "../../redux/authSlice/authSelector";
const phonesNums = [
  { value: "+380445017474", label: "+38 (044) 501 74 74" },
  { value: "+380445017171", label: "+38 (044) 501 71 71" },
  { value: "+380445017070", label: "+38 (044) 501 70 70" },
];
export default function Header() {
  const timeWork = useSelector(selectTimeWork);
  const phones = useSelector(selectPhones);
  const { siteName } = useSelector(selectSocialMedia);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const [selectedPhoneNum, setSelectedPhoneNum] = useState(phonesNums[0]);
  const location = useLocation();
  console.log('location', location)
  return (
    <HeaderStyled className="header">
      <HeaderSaleBanner>
        {" "}
        <Container>
          <HeaderSaleWrapper>
            <HeaderSaleH2>Черная пятница началась</HeaderSaleH2>
            <p>19.11.21-25.11.21</p>
            <HeaderSaleH1>До - 60% на весь товар</HeaderSaleH1>
            <HeaderSaleButton>За покупками</HeaderSaleButton>
          </HeaderSaleWrapper>
        </Container>
      </HeaderSaleBanner>
      <HeaderMiddleSection>
        <Container>
          <HeaderMain>
            <LocationSelectorWrap>
              <LocationSelector
                className="location-selector"
                aria-label="Default select example"
                defaultValue="Днепр"
                background={arrowImg}
              >
                <option>Днепр</option>
                <option>Киев</option>
              </LocationSelector>
              <LocationImg className="img-map-bg" src={mapImage} alt="" />
            </LocationSelectorWrap>
            <ScheduleWrap>
              <ScheduleBtn clock={clockSvg} arrow={scheduleArrow}>
                Время работы
              </ScheduleBtn>
            </ScheduleWrap>
            <NavigationWrap>
              <NavLinkList>
                <li>
                  <NavLinkStyled to={"/corporate"}>
                    Корпоративным клиентам
                  </NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to={"/about"}>Про нас</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to={"/delivery"}>
                    Способы доставки
                  </NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to={"/guarantee"}>Гарантия</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to={"/exchange"}>
                    Возврат и обмен
                  </NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to={"/sale"}>Распродажа</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to={"/contacts"}>Контакты</NavLinkStyled>
                </li>
              </NavLinkList>
            </NavigationWrap>
          </HeaderMain>
        </Container>
      </HeaderMiddleSection>
      <HeaderBottomSection>
        <Container>
          <HeaderBottomWrap>
            <LogoLink to={'/' }>Comtrading</LogoLink>

            <PhoneNumsWrap>
              <Select
                defaultValue={selectedPhoneNum}
                onChange={setSelectedPhoneNum}
                options={phonesNums}
                menuPlacement={"auto"}
                contentEditable={false}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    background: "#ECEDEF",
                    height: "50px",
                    width: "208px",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    // ...dot(),
                    fontSize: "16px",
                    position: "relative",
                    "::before": {
                      content: `url(${phoneSvg})`,
                      position: "absolute",
                      top: "10px",
                      left: "11px",
                    },
                    paddingLeft: "35px",
                  }),
                  menuList: (baseStyles, state) => ({
                    ...baseStyles,
                    background: "#ECEDEF",
                  }),
                  valueContainer: (baseStyles, state) => ({
                    ...baseStyles,
                    background: "#ECEDEF",
                    padding: 0,
                    paddingLeft: "28px",
                    "::before": {
                      content: `url(${phoneSvg})`,
                      position: "absolute",
                      top: "3px",
                      left: "10px",
                    },
                  }),
                  singleValue: (baseStyles) => ({
                    ...baseStyles,
                    margin: 0,
                  }),
                  dropdownIndicator: (baseStyles, state) => ({
                    ...baseStyles,
                    transform: state.selectProps.menuIsOpen && "rotate(180deg)",
                  }),
                }}
              />
            </PhoneNumsWrap>
            <HeaderSearchWrap>
              <HeaderSearch />
            </HeaderSearchWrap>
            <UserLinksWrap>
              <UserLinksList>
                <li>
                  <Link
                    to={isLoggedIn ? "/userProfile" : "/login"}
                    state={{ from: location }}
                  >
                    <RiUserLine />
                  </Link>
                </li>
                <li>
                  <Link to={"/favorites"}>
                    <RiHeart3Line />
                  </Link>
                </li>
                <li>
                  <Link to={"/cart"}>
                    <RiShoppingCart2Line />
                  </Link>
                </li>
              </UserLinksList>
            </UserLinksWrap>
          </HeaderBottomWrap>
        </Container>
      </HeaderBottomSection>
    </HeaderStyled>
  );
}
