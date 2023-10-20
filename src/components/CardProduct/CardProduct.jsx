import React from "react";
import { Link } from "react-router-dom";

import starImage from "../../assets/image/star.png";
import heartItemImage from "../../assets/image/heartItem.png";
import tabletItemImage from "../../assets/image/tabletItem.png";
import shoppingCartImage from "../../assets/image/shopping-cart.png";

export default function CardProduct({
  phoneItemImage,
  category,
  bonus,
  title,
  price,
  credit,
  monthlyPayment,
  link,
}) {
  return (
    <Link to={link}>
      <div className="cardProduct">
        <div className="main__iTop">
          <button className="star-box">
            <img src={starImage} alt="" />
          </button>
          <div className="main__categori">
            <span>{category}</span>
          </div>
          <img
            style={{ cursor: "pointer" }}
            className="heart"
            src={heartItemImage}
            alt=""
          />
        </div>
        <div className="main__iCenter">
          <div className="main__iInfo">
            <div className="main__iL">
              <span>{credit} %</span>
              <p>Кредит</p>
            </div>
            <div className="main__iL">
              <img src={tabletItemImage} alt="" />
              <p>
                Бонус:
                <br />
                {bonus} ₴
              </p>
            </div>
          </div>
          <div className="main__image">
            <img src={phoneItemImage} alt="" />
          </div>
        </div>
        <div className="main__iDownCenter">
          <span>{title}</span>
          <div className="main__star"></div>
        </div>
        <div className="main__iBottom">
          <div className="main__top">
            <span>{price} ₴</span>
            <p>
              <img src={tabletItemImage} alt="" /> {monthlyPayment} в месяц
            </p>
          </div>
          <div className="main__bottom">
            <Link to={link}>
              <button className="buy">
                Купить <br />
                один клик
              </button>
            </Link>
            <Link to={"/cart/"}>
              <button className="cart">
                <img src={shoppingCartImage} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
