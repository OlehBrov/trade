import { useEffect, useLayoutEffect, useRef, useState } from "react";

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

export const NewProducts = () => {
  const { data: products, status } = useGetAllProductsQuery();

  const [markup, setMarkup] = useState([]);

  const [listItemsArr, setListItemsArr] = useState([]);

  const productsListRef = useRef();

  useEffect(() => {
    if (products) {
      const markupGallery = products.products.reduce(
        (accumulator, currentValue, currentIndex, array) => {
          if (currentIndex % 2 === 0) {
            const slice = array.slice(currentIndex, currentIndex + 2);
            accumulator.push(slice);
          }
          return accumulator;
        },
        []
      );
      setMarkup(markupGallery);
    }
  }, [products]);

  useLayoutEffect(() => {
    console.log('productsListRef', productsListRef)
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component
      gsap.set('.galleryItem', {
        yPercent: (i, el) => {
          console.log('el in yPercent', el)
          if (i === 0) {
            return 0;
          } else if (i === 1) {
            return 50;
          } else return 100;
        },
        opacity: (i, el) => {
          if (i < 2) {
            return 1;
          } else return 0;
        },
        onComplete: () => console.log("gsap set complete"),
      });
    }, productsListRef); // <- IMPORTANT! Scopes selector text
  }, []);

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

  const handleUp = () => {
    productsTl.play();
  };
  const handleDown = () => {
    productsTl.reverse();
  };

  return (
    <NewProductsWrapper>
      <NewProductsSideBar>
        <p>Новинки</p>
      </NewProductsSideBar>
      <NewProductsGalleryWrap>
        {" "}
        <button type="button" onClick={handleUp}>
          {" "}
          up
        </button>
        <button type="button" onClick={handleDown}>
          {" "}
          down
        </button>
        <ProductsList ref={productsListRef}>
          {markup &&
            markup.map((product, i) => (
              <div key={i} className="galleryItem">
                {product.map((p, i) => {
                  return (
                    <div key={p.id}>
                      <Card>
                        <img src={defProdImg} alt="" />
                        <p>
                          {p.name_ua}, number {i}
                        </p>
                        <span>{p.stock_status}</span>
                      </Card>
                    </div>
                  );
                })}
              </div>
            ))}{" "}
        </ProductsList>
        {/* <SmokeBg></SmokeBg> */}
      </NewProductsGalleryWrap>
    </NewProductsWrapper>
  );
};
