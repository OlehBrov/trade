import styled from "styled-components";
import { CartLink } from "../CartLink/CartLink";

export const NewProductsWrapper = styled.div`
  display: flex;
`;
export const NewProductsSideBar = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
`;
export const NewProductsGalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 75%;
  padding-right: 221px;
  padding-left: 151px;
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
    /* display: flex; */
    opacity: 1;
    top: 100%;
    left: 0;
    width: calc((100% - 30px) / 2);
    /* height: 486px; */
    border-radius: 5px;
    /* background: #fff; */
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
  }
`;
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 15px 20px;
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
export const ProductName = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125.4%;
  -webkit-line-clamp: 2;
  /* margin: 0 30px; */
  margin-bottom: 20px;
`;
export const ProductImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 185px;
  height: fit-content;
  margin-bottom: 30px;
`;
export const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 30px;
`;

export const PriceWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;
export const Price = styled.p`
  margin-bottom: 14px;
  color: #151621;

  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: 125.4%;
`;
export const CartLinkWrap = styled.div`
display: flex;
justify-content: space-between;

`
export const CardCartLinkStyled = styled(CartLink)`
padding: 15px;
border: 1px solid #E51C23;
border-radius: 5px;
padding: 14px;
`
export const CardLabelWrap = styled.div`
  border-radius: 5px;
  background: ${(props) => props.$background};
  margin: 0 auto;

  color: #fff;
  padding: 3px 12px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 125.4%;
`;
