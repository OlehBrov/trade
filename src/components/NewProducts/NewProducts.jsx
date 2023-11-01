import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  Card,
  NewProductsGalleryWrap,
  NewProductsSideBar,
  NewProductsWrapper,
  ProductName,
  ProductsList,
} from "./NewProductsStyled";
import { useGetAllProductsQuery } from "../../redux/API/catalogeAPI";
import defProdImg from "../../assets/image/phonesImg.png";
import gsap, { wrap } from "gsap";
import { TransitionGroup } from "react-transition-group";
import { Transition } from "react-transition-group";
import { ProductCard } from "./ProductCard";
import { verticalLoop } from "../../services/verticalLoop";
import { RatingStars } from "../RatingStars/RatingStars";
import {
  CatalogFLink,
  SectionDescription,
  SectionHeader,
} from "../../assets/styles/commonElements";
import { Link } from "react-router-dom";
// import { ProductCard } from "./ProductCard";

export const NewProducts = () => {
  const { data, status } = useGetAllProductsQuery();

  const [productCardsNodes, setProductCardsNodes] = useState([]);
  const [maxGalleryPosition, setMaxGalleryPosition] = useState(0);

  const [stepIncrement, setStepImcrement] = useState(0);
  const productsListRef = useRef();
  const nodeRef = useRef();

  const prodScrollPosition = {
    position: 0,
  };

  useEffect(() => {
    status === "fulfilled" && data && setMaxGalleryPosition(data.length);
    data && console.log("datda", data);
    data && setProductCardsNodes(gsap.utils.toArray(".box"));
  }, [data, status]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component

      productCardsNodes &&
        gsap.set(productCardsNodes, {
          y: (i, el) => {
            if (i % 2 === 0) return 0;
            else return 30;
          },

          x: 0,
        });
      setStepImcrement(gsap.getProperty(".box", "height") + 30);
    }, productsListRef); // <- IMPORTANT! Scopes selector text
    return () => {
      ctx.revert();
    }; // animation cleanup!!
  }, [productCardsNodes]);

  const scrollProducts = gsap.to(productCardsNodes, {
    y: (i) => {
      if (i % 2 === 0) {
        return prodScrollPosition.position;
      } else return prodScrollPosition.position + 30;
    },
    paused: true,
  });

  const handleUp = () => {
    prodScrollPosition.position = prodScrollPosition.position - stepIncrement;
    scrollProducts.invalidate();
    scrollProducts.restart();
  };
  const handleDown = () => {
    prodScrollPosition.position = prodScrollPosition.position + stepIncrement;
    scrollProducts.invalidate();
    scrollProducts.restart();
  };

  return (
    <NewProductsWrapper>
      <NewProductsSideBar>
        <SectionHeader>Новинки</SectionHeader>
        <SectionDescription>
          Самые свежые и сочные новинки, которые не оставять ни одного сомнения
          в их покупке !
        </SectionDescription>
        <CatalogFLink  to={"#"}>В каталог</CatalogFLink>
      </NewProductsSideBar>
      <NewProductsGalleryWrap>
        <ProductsList ref={productsListRef}>
          {/* <TransitionGroup c  omponent={null}> */}
          {data &&
            data.map((product) => (
              <ProductCard key={product.id} product={product} />

              // <li className="box" key={product.id}>
              //   <Card>
              //     <img src={`https://img.comtrading.ua/image/${product.image}`} alt="" />
              //     <RatingStars ratingChanged={ratingChanged } />
              //     <ProductName>
              //       {product.name_ua}
              //     </ProductName>
              //     <span>{product.id.stock_status}</span>
              //   </Card>
              // </li>
            ))}
          {/* </TransitionGroup> */}
        </ProductsList>{" "}
        <button type="button" onClick={handleUp}>
          {" "}
          up
        </button>
        <button type="button" onClick={handleDown}>
          {" "}
          down
        </button>
        {/* <SmokeBg></SmokeBg> */}
      </NewProductsGalleryWrap>
    </NewProductsWrapper>
  );
};
