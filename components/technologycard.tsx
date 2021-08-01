import React from "react";
import Icon from "./icons";
export default ({
  title,
  description,
  img,
  classcst,
}: {
  title: string;
  description: string;
  img: string;
  classcst: string;
}) => {
  return (
    <div className="techCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="d-flex justify-between">
        <div className="pos-rel w-100 ">
          <button className="btn btn-primary-1">
            Learn more
            <Icon name="chevr" />
          </button>
        </div>
        <div className="pos-rel w-100">
          <img src={img} className={classcst} alt="" />
        </div>
      </div>
    </div>
  );
};
