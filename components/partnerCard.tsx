import React from "react";
export default ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="partnerCard d-flex-cst">
      <div className="partnerCardInner">
        <img alt="" src={img} />
      </div>
      <h6>{title}</h6>
    </div>
  );
};
