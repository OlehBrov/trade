import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  Card,
  NewProductsGalleryWrap,
  NewProductsSideBar,
  NewProductsWrapper,
  ProductsList,
} from "./NewProductsStyled";
import { useGetAllProductsQuery } from "../../redux/API/catalogeAPI";
import defProdImg from "../../assets/image/phonesImg.png";
import gsap, { wrap } from "gsap";
import { TransitionGroup } from "react-transition-group";
import { Transition } from "react-transition-group";
import { ProductCard } from "./ProductCard";
// import { ProductCard } from "./ProductCard";

export const NewProducts = () => {
  const { data, status } = useGetAllProductsQuery();
  const [productsRefsList, setProductsRefsList] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [maxGalleryPosition, setMaxGalleryPosition] = useState(0);
  const [productCards, setProductCards] = useState([]);
  const productsListRef = useRef();
  const nodeRef = useRef();

  console.log("DATA", data);
  useEffect(() => {
    if (data) {
      console.log("first useEffect");
      setMaxGalleryPosition(data.length);
    
    }
  }, [data]);

  // const showProducts = (position, direction = "up", count = 2) => {
  //   if (position + count > maxGalleryPosition)
  //     return console.log("End of list");

  //   const end = direction === "up" ? position + count : position - count;

  //   // const visibleProducts = productsRefsList.slice(position, end);

  //   setProductCards(() => {
  //     return data.slice(position, end);
  //   });

  //   setCurrentPosition(position);
  //   console.log("productCards", productCards);
  // };
  // useEffect(() => {
  //   productsListRef.length && showProducts(0, "up", 4);
  // }, [productsListRef]);
  // useEffect(() => {
  //   if (!boxes || !boxes.length) setBoxes(document.querySelectorAll(".box"));
  // }, [boxes]);
  // useLayoutEffect(() => {
  //   console.log("boxes", boxes);
  //   boxes &&
  //     gsap.set(boxes, {
  //       yPercent: (i, el) => {
  //         // console.log("el in yPercent", el);
  //         if (i === 0) {
  //           return -50;
  //         } else if (i === 1) {
  //           return 50;
  //         } else return 100;
  //       },
  //       opacity: (i, el) => {
  //         if (i < 2) {
  //           return 1;
  //         } else return 0;
  //       },
  //       onComplete: () => console.log("gsap set complete"),
  //     });
  // }, [boxes]);

  // useLayoutEffect(() => {
  //   console.log('productsListRef', productsListRef)
  //   let ctx = gsap.context(() => {
  //     // Our animations can use selector text like ".box"
  //     // this will only select '.box' elements that are children of the component
  //     gsap.set('.box', {
  //       yPercent: (i, el) => {
  //         console.log('el in yPercent', el)
  //         if (i === 0) {
  //           return 0;
  //         } else if (i === 1) {
  //           return 50;
  //         } else return 100;
  //       },
  //       opacity: (i, el) => {
  //         if (i < 2) {
  //           return 1;
  //         } else return 0;
  //       },
  //       onComplete: () => console.log("gsap set complete"),
  //     });
  //   }, productsListRef); // <- IMPORTANT! Scopes selector text
  //   return () => {
  //     ctx.revert()
  //   }; // animation cleanup!!
  // }, []);

  // useEffect(() => {
  //   let arr = gsap.utils.toArray(".galleryItem");
  //   setListItemsArr(arr);
  //   console.log("productsListRef", productsListRef);
  //   console.log("arr", arr);
  // }, []);

  //Make elRefs
  // useEffect(() => {
  //   if (products) {
  //     let arrLength = markupGallery.length;
  //     // add or remove refs
  //     setElRefs((elRefs) =>
  //       Array(arrLength)
  //         .fill()
  //         .map((_, i) => elRefs[i] || createRef())
  //     );
  //   }
  // }, [products]);

  //Set Gallery height

  // const prodArray = gsap.utils.toArray(".galleryItem");

  const productsTl = gsap.timeline({
    paused: true,
    onComplete: () => {
      // updateSlicePositions();
    },
  });

  //Timeline
  // useLayoutEffect(() => {
  //   productsTl
  //     .to(visibleProd, {
  //       scale: 0.6,
  //       yPercent: -110,
  //       duration: 0.2,
  //       ease: "ease",
  //       opacity: 0,
  //       onComplete: () => console.log("visibleProd to", visibleProd),
  //     })
  //     .to(
  //       bottomProd,
  //       {
  //         yPercent: -110,
  //         duration: 0.2,
  //         ease: "ease",
  //         onComplete: () => console.log("bottomProd to", bottomProd),
  //       },
  //       "<"
  //     )
  //     .to(underBottomProd, {
  //       yPercent: -110,
  //       duration: 0.2,
  //       ease: "ease",
  //       opacity: 1,
  //       xPercent: gsap.utils.wrap([0, 110]),
  //     });
  // });
  // const appear = () => {
  //   ref.current &&
  //     gsap.set(ref.current, {
  //       opacity: 0.7,
  //     });
  // };
  const handleUp = () => {
    // productsTl.play();
    // showProducts(currentPosition + 2, "up", 4);
  };
  const handleDown = () => {
    // productsTl.reverse();
    //  showProducts(currentPosition - 2, "down", 4);
  };

  return (
    <NewProductsWrapper>
      <NewProductsSideBar>
        <p>Новинки</p>
      </NewProductsSideBar>
      <NewProductsGalleryWrap>
        <ProductsList ref={productsListRef}>
          {/* <TransitionGroup component={null}> */}
            {data &&
              data.map((product) => (
                // <ProductCard key={product.id} product={product} />
                
                  <li className="box" key={product.id}>
                    <Card>
                      <img src={defProdImg} alt="" />
                      <p>
                        {product.name_ua}, number {product.id}
                      </p>
                      <span>{product.id.stock_status}</span>
                    </Card>
                  </li>


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
