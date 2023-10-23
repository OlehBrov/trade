import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import defProdImg from "../../assets/image/phonesImg.png";
import { Card } from "./NewProductsStyled";
import { Transition } from "react-transition-group";
import gsap from "gsap";
export const ProductCard = (props) => {
  const { product } = props;
  const[boxes, setBoxes] = useState([])
  useEffect(() => {
    const bx = gsap.utils.toArray('.box')
    setBoxes(bx)
    console.log('boxes', boxes)
},[])

  const nodeRef = useRef(null);

  //   console.log("ref in ProdCars", ref.current);

  // gsap.set(".box", {
  //   yPercent: (i, el) => {
  //     console.log("el in yPercent", el);
  //     if (i === 0) {
  //       return 0;
  //     } else if (i === 1) {
  //       return 50;
  //     } else return 100;
  //   },
  //   opacity: (i, el) => {
  //     if (i < 2) {
  //       return 1;
  //     } else return 0;
  //   },
  //   onComplete: () => console.log("gsap set complete"),
  // });

  return (
    <Transition
      {...props}
      key={product.id}
      nodeRef={nodeRef}
      timeout={500}
      appear
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={() => {
        gsap.fromTo(
          nodeRef.current,
          {
            opacity: 0.2,
            yPercent: 300,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
          }
        );
      }}
      onExit={() => {
        console.log("onExit", nodeRef.current);
        gsap.to(nodeRef.current, {
          xPercent: -100,
          opacity: 0,
        });
      }}
    >
      <li className="box" ref={nodeRef}>
        <Card>
          <img src={defProdImg} alt="" />
          <p>
            {product.name_ua}, number {product.id}
          </p>
          <span>{product.id.stock_status}</span>
        </Card>
      </li>
    </Transition>
  );
};
