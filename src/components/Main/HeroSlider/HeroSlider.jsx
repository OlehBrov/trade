import { useSelector } from "react-redux";
import { selectSlider } from "../../../redux/sliderSlice/sliderSelector";
import gsap from "gsap";
import { ButtonsWrap, SlideElement, SliderContainer } from "./HeroSliderStyles";
import { useEffect, useRef, useState } from "react";
import { breakpoints } from "../../../assets/styles/mediaConstants";

import { register } from "swiper/element/bundle";

export const HeroSlider = () => {
  register();
  const [slidesNum, setSlidesNum] = useState(0);
  const { slides } = useSelector(selectSlider);
  const swiperElRef = useRef();
  useEffect(() => {
    setSlidesNum(slides.length);
  }, [slides.length]);
  useEffect(() => {
    if (!slidesNum) return;
    const swiperParams = {
      slidesPerView: 1,
      injectStyles: [
        ` .swiper-horizontal {
        height: 100%;
      }`,
        `.swiper-horizontal swiper-slide{
            display: contents;
            
          }
        `
      ],

      on: {
        init: function () {
          console.log("swiper initialized");
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperElRef.current, swiperParams);

    // and now initialize it

    swiperElRef.current.initialize();
  }, [slidesNum]);
  return (
    <SliderContainer className="slider-container">
      <swiper-container
        ref={swiperElRef}
        init="false"
        speed="500"
        loop="true"
        navigation="true"
      >
        {slides.map((el, index) => (
          <swiper-slide className="slide-box" key={index}>
            <img src={`https://img.comtrading.ua${el.image}`} alt="" />
          </swiper-slide>
        ))}
      </swiper-container>
    </SliderContainer>
  );
};
