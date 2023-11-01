import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import defProdImg from "../../assets/image/phonesImg.png";
import {
  Card,
  CardCartLinkStyled,
  CartLinkWrap,
  Price,
  PriceWrap,
  ProductImage,
  ProductName,
  RatingWrap,
} from "./NewProductsStyled";
import { Transition } from "react-transition-group";
import gsap from "gsap";
import { RatingStars } from "../RatingStars/RatingStars";

import { Button } from "../Button/Button";
import { CardLabel } from "./CardLabel";
import { CartLink } from "../CartLink/CartLink";
export const ProductCard = (props) => {
  const [productRating, SetProductRating] = useState(4);
  const { product } = props;
  //   const[boxes, setBoxes] = useState([])
  //   useEffect(() => {
  //     const bx = gsap.utils.toArray('.box')
  //     setBoxes(bx)
  //     console.log('boxes', boxes)
  // },[])

  const nodeRef = useRef(null);

  const ratingChanged = (rating) => {
    console.log("new rating is", rating);
    SetProductRating(rating);
  };

  return (
    <li className="box" ref={nodeRef}>
      <Card>
        <CardLabel props={"Безкоштовна доставка"} />
        <ProductImage
          src={`https://img.comtrading.ua/image/${product.image}`}
          alt=""
        />
        <ProductName>{product.name_ua}</ProductName>
        <RatingWrap>
          <RatingStars ratingChanged={ratingChanged} value={productRating} />{" "}
          <span>{productRating}</span>
        </RatingWrap>
        <PriceWrap>
          <Price>
            {Math.round(product.price_local).toLocaleString()} {"\u20B4"}
          </Price>
        </PriceWrap>

        <CartLinkWrap>
          {" "}
          <Button props={"Купити в один клік"} />
          <CardCartLinkStyled></CardCartLinkStyled>
        </CartLinkWrap>
      </Card>
    </li>
  );
};
