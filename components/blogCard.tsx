import React from "react";
export default ({
  variant,
  img,
  category,
  date,
  title,
}: {
  variant: number;
  img: string;
  category: string;
  date: string;
  title: string;
}) => {
  return (
    <div className="blogCard">
      <div className={variant == 1 ? "d-flex justify-content-between b-cont" : "b-cont1"}>
        <div>
          <img src={img} className="w-100" alt="" />
        </div>
        <div className={variant == 1 ? "ml-4" : ""}>
          <div className="d-flex cst-bx">
            <p className="p-sm3">{category}</p>
            <p className="p-sm4">{date}</p>
          </div>
          <div>
            <h5>{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
