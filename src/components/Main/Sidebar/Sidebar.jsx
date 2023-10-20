import { createRef, useEffect, useRef, useState } from "react";

import {
  CategoryLogo,
  MenuCategoryName,
  MenuItem,
  SideBarContainer,
  SideMenu,
  StyledMenuLink,
} from "./SideBarStyled";
import categoryIcon from "../../../assets/image/categoryIcon.svg";
import gsap from "gsap";
import { useGetAllCategoriesQuery } from "../../../redux/API/catalogeAPI";

export const SideBar = () => {
  const sideBarRef = useRef();
  const menuRef = useRef();
  const [showMore, setShowMore] = useState(true);
  // const catalog = useSelector(selectCatalog);
  const [uniqueCats, setUniqueCats] = useState([]);
  const [menuTween, setMenuTween] = useState(null);
  const [elRefs, setElRefs] = useState([]);
  const arrLenght = uniqueCats.length;
  const [menuHeight, setMenuHeigth] = useState(0);
  const categories = useGetAllCategoriesQuery();

  useEffect(() => {
    if (categories.data) {
      const uniques = Array.from(
        new Set(
          categories.data.map((item) => {
            return {
              name: item.name_ua,
              path: item.path,
            };
          })
        )
      );
      setUniqueCats(uniques.slice(0, 10));
    }
  }, [categories.data]);

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLenght)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLenght]);

  useEffect(() => {
    if (elRefs.length) {
      const height = elRefs
        .slice(0, 7)
        .reduce((previousValue, element, index, array) => {
          return previousValue + element.current.offsetHeight;
        }, 0);
      setMenuHeigth(height);
      
    }
  }, [elRefs]);

  useEffect(() => {
    gsap.set(".sidebar-menu", { height: menuHeight });
  }, [menuHeight]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tween = gsap.timeline({ paused: true }).to(".sidebar-menu", {
        height: "auto",
        duration: 3,
      });
      setMenuTween(tween);
    }, sideBarRef);

    return () => ctx.revert(); // cleanup
  }, [menuHeight]);

  const toggleMenu = () => {
    showMore ? menuTween.play() : menuTween.reverse();
    setShowMore((showMore) => !showMore);
  };

  return (
    <SideBarContainer ref={sideBarRef} className="sidebar-container">
      <SideMenu ref={menuRef} className="sidebar-menu">
        {uniqueCats.length &&
          uniqueCats.map((el, index) => (
            <MenuItem key={index} className="menu-item" ref={elRefs[index]}>
              {" "}
              <StyledMenuLink to={`/category${el.path}`}>
                <MenuCategoryName> {el.name}</MenuCategoryName>
                <CategoryLogo src={categoryIcon} alt="" />
              </StyledMenuLink>
            </MenuItem>
          ))}
      </SideMenu>
      <button className="toggle-menu" onClick={toggleMenu}>
        Show more
      </button>
    </SideBarContainer>
  );
};
