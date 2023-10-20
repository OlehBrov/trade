import React from "react";
import { Link } from "react-router-dom";

export default function ProductСategory({ link, title, image }) {
  return (
    <Link to={link}>
      <div className="main__item">
        <span>{title}</span>
        <img src={image} alt="" />
      </div>
    </Link>
  );
}
