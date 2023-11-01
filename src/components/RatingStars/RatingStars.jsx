import ReactStars from "react-rating-stars-component";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
export const RatingStars = (props) => {
  const { ratingChanged } = props;
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      // color="#E51C23"
      isHalf={true}
      emptyIcon={<BsStar />}
      halfIcon={<BsStarHalf />}
      fullIcon={<BsStarFill />}
      activeColor="#E51C23"
    />
  );
};
