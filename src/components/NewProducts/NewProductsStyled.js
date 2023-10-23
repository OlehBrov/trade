import styled from "styled-components";

export const NewProductsWrapper = styled.div`
  display: flex;
`;
export const NewProductsSideBar = styled.div`
  display: flex;
  width: 30%;
`;
export const NewProductsGalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 70%;
  padding-right: 236px;
`;
export const ProductsList = styled.ul`
position: relative;
  display: flex;
  height: 729px;
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
  overflow: hidden;
  & .box {
    /* position: absolute; */
    outline: 1px solid tomato;
    display: flex;
    opacity: 1;
    bottom: 0;
    left: 0;
    width: calc((100% - 30px) / 2);
    height: 486px;
    border-radius: 5px;
    /* background: #fff; */
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
  }
`;
export const Card = styled.div`
  padding: 15px 30px;
  background-color: #fff;
`;

export const SmokeBg = styled.div`
  height: 30%;
  width: 100%;
  background: linear-gradient(
    180deg,
    #c4c4c4 0%,
    rgba(196, 196, 196, 0) 105.66%
  );
`;
