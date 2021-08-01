import React from "react";
import Icon from "./icons";
export default () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footerInner d-flex justify-content-between flex-wrap ">
            <div className="flex40 ">
              <h5>Contact us</h5>
              <div className="d-flex mt-4">
                <Icon name="map" />
                <p>184 Main Rd, Omuk city Tomuk state, Country name</p>
              </div>
              <div className="d-flex mt-2">
                <Icon name="mail" />
                <p>contact@company.com</p>
              </div>
              <div className="d-flex mt-2">
                <Icon name="call" />
                <p>+123 456 7890</p>
              </div>
              <div className="d-flex align-items-center mb-4 mt-5">
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
            <div className="flex20">
              <h5>Information</h5>
              <p className="mt-4">Technology</p>

              <p className="mt-2">Latest Posts</p>
              <p className="mt-2">About Us</p>
              <p className="mt-2">FAQs</p>
            </div>
            <div className="flex20">
              <h5>Support</h5>
              <p className="mt-4">Contact us</p>

              <p className="mt-2">Privacy Policy</p>
              <p className="mt-2">Terms & Conditions</p>
              <p className="mt-2">Payment</p>
            </div>
            <div className="flex20">
              <h5>Community</h5>
              <p className="mt-4">Celebrations</p>

              <p className="mt-2">Events</p>
              <p className="mt-2">Career</p>
              <p className="mt-2">Affiliate programe</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footBtm flex-wrap">
        <p>Copyright dandelion.com 2021</p>
        <p>All Rights Reserved</p>
        <p>Company Reg No. 10812528</p>
        <p style={{ border: "none" }}>Impressum</p>
      </div>
    </>
  );
};
