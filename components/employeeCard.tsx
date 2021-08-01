import React from "react";
import Icon from "./icons";
export default ({
  img,
  name,
  title,
  desc,
  color,
}: {
  img: string;
  name: string;
  title: string;
  desc: string;
  color: string;
}) => {
  return (
    <div className="emp-card">
      <div
        className="emp-card-top"
        style={{
          backgroundColor: color,
        }}
      ></div>

      <div className="d-flex-cst p-26">
        <div className="d-flex-cst box-top-emp">
          <img src={img} />
          <h6 className="heading-sm">{name}</h6>
          <p className="">{title}</p>
        </div>
        <div className="brd"></div>
        <div className="emp-desc">
          <p>{desc}</p>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="mr-3">
            <Icon name="facebook" />
          </div>
          <div className="mr-3">
            <Icon name="twitter" />
          </div>
          <div className="mr-3">
            <Icon name="indeed" />
          </div>
          <div className="mr-3">
            <Icon name="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
