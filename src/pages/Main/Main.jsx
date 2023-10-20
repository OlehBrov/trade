import React from "react";

import { Container } from "../../assets/styles/container.styled";
import { HeroSection } from "./MainStyled";
import { SideBar } from "../../components/Main/Sidebar/Sidebar";
import { HeroSlider } from "../../components/Main/HeroSlider/HeroSlider";
import { NewProducts } from "../../components/NewProducts/NewProducts";

export default function Main() {
  return (
    <>
      <Container>
        <HeroSection>
          <SideBar />
          <HeroSlider />
        </HeroSection>
      </Container>
      <Container>
        <NewProducts />
      </Container>
    </>
  );
}
