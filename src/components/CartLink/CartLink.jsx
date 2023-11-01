import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const CartLink = () => {
  return (
    <Link to={"/cart"}>
      <RiShoppingCart2Line />
    </Link>
  );
};
