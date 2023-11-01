import { CardLabelWrap } from "./NewProductsStyled";

export const CardLabel = ({ props = "Популярне" }) => {

  return (
    <CardLabelWrap $background={props ? "red" : "green"}>
      <p>{props}</p>
    </CardLabelWrap>
  );
};
