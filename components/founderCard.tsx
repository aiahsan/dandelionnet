import React from "react";
import Icon from "./icons";
export default ({ img, title, cat, desct }: { img: string; title: string; cat: string; desct: string }) => {
  return (
    <>
      <div className="founderCard">
        <div className="d-flex align-items-center">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="ml-4">
            <h4>{title}</h4>
            <p className="p-sm2">{cat}</p>
            <div className="d-flex align-items-center">
              <div className="mr-2">
                <Icon name="facebook" />
              </div>
              <div className="mr-2">
                <Icon name="twitter" />
              </div>
              <div className="mr-2">
                <Icon name="indeed" />
              </div>
              <div className="mr-2">
                <Icon name="instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="brd"></div>
        <div className="f-card-p">
          <p>{desct}</p>
        </div>
      </div>
    </>
  );
};
