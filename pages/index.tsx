import React from "react";
import Technologycard from "../components/technologycard";
import BlogCard from "../components/blogCard";
import FounderCard from "../components/founderCard";
import EmployeeCard from "../components/employeeCard";
import PartnerCard from "../components/partnerCard";
import Icon from "../components/icons";
import TextInput from "../components/textInput";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Fade, Flip } from "react-reveal";

export default () => {
  return (
    <>
      <div className="herobg">
        <div className="container">
          <Navbar />

          <div className="fosaje3-2">
            <div className="row">
              <div className="col-md-6">
                <h1>Dandelion Network</h1>
                <h2>
                  1.7 billion people have no access to <span>financial services</span>
                </h2>
                <p className="p-sm1">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat{" "}
                </p>
                <button className="btn">Explore us</button>
              </div>
              <div className="col-md-6">
                <img className="W-100 ksnf30-qwe" src="/img/hb1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container technologySection">
        <div className="row">
          <div className="col-md-6">
            <h2>Technology</h2>
            <p className="p-sm2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat{" "}
            </p>
            <div>
              <Technologycard
                img="/img/1 85.png"
                title="Mobile Tap-and-pay Speeds"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                classcst="img-v1"
              />
            </div>
            <div className="mt-5">
              <Technologycard
                img="/img/Frame.png"
                title="Parallel Transactions"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                classcst="img-v2"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-5">
              <Technologycard
                img="/img/1 85 (1).png"
                title="Quantum-proof"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                classcst="img-v2"
              />
            </div>
            <div className="mt-5">
              <Technologycard
                img="/img/1 85 (2).png"
                title="Parallel Transactions"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                classcst="img-v2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container concensus">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h2>Concensus redefined</h2>
              <p>
                Dandelion's tap-and-pay app provides peer-to-peer transactions, for fractions of a penny, complete in
                seconds, with quantum-resistant security, and without intermediaries. Our technology provides a fully
                decentralized, fully open network that anyone can join, and anyone can use. With lower costs than the
                most efficient blockchain, more speed than the fastest private network, and better security than either,
                we are the future of global finance
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src="img/Rectangle 156 (1).png" />
              <div className="pos-rel">
                <div className="con-img-box"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h2>Blog articles</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <BlogCard
                img="/img/Rectangle 148 (1).png"
                title="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia"
                date="15 July 2021"
                category="Finance"
                variant={0}
              />
            </div>
            <div className="col-md-6 ">
              <BlogCard
                img="/img/Rectangle 149 (1).png"
                title="Excepteur sint occaecat cupidatat non proident sunt "
                date="15 July 2021"
                category="Crypto"
                variant={1}
              />
              <div className="mt-5">
                <BlogCard
                  img="/img/Rectangle 150 (1).png"
                  title="Excepteur sint occaecat cupidatat non proident sunt "
                  date="15 July 2021"
                  category="Block chain"
                  variant={1}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <button className="btn mt-5">See all articles</button>
          </div>
        </div>
      </section>
      <Fade duration={2000} opposite={true}>
        <section className="founder container">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h2>Our team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
            <h2>Founders</h2>
            <div className="row mt-5">
              <div className="col-md-6 pt-5">
                <FounderCard
                  img="/img/Ellipse 6 (1).png"
                  title="Alex Munro"
                  cat="CEO"
                  desct="Alex is the founder of three venture capital funds and has invested from five. He has over twenty years in finance and banking, and has wide experience with technology startups. He holds an MBA from UC Berkeley."
                />
                <div className="rel-pos">
                  <div className="left-crd-f"></div>
                </div>
              </div>
              <div className="col-md-6 pt-5">
                <FounderCard
                  img="/img/Ellipse 6.png"
                  title="Paul Chafe"
                  cat="CEO"
                  desct="Alex is the founder of three venture capital funds and has invested from five. He has over twenty years in finance and banking, and has wide experience with technology startups. He holds an MBA from UC Berkeley."
                />
                <div className="rel-pos">
                  <div className="right-crd-f"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade duration={2000} opposite={true}>
        <section className="employees">
          <div className="container">
            <div className="d-flex-cst">
              <h2>Employees</h2>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit </p>
            </div>
          </div>
          <div className="cst-container mt-117 d-flex flex-wrap">
            <div className="mr-4">
              <Flip left opposite duration={500}>
                <EmployeeCard
                  img="/img/1.png"
                  title="Cryptography Advisor"
                  name="Dr. Atefeh Mashatan"
                  desc="Lorem ipsum dolor sit amet cons ectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna"
                  color="#7650A5"
                />
              </Flip>
            </div>
            <div className="mr-4">
              <Flip left opposite delay={500} duration={500}>
                <EmployeeCard
                  img="/img/2.png"
                  title="Cryptography Advisor"
                  name="Dr. Atefeh Mashatan"
                  desc="Lorem ipsum dolor sit amet cons ectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna"
                  color="#61D1C4"
                />
              </Flip>
            </div>
            <div className="mr-4">
              <Flip left opposite delay={1000} duration={500}>
                <EmployeeCard
                  img="/img/3.png"
                  title="Cryptography Advisor"
                  name="Dr. Atefeh Mashatan"
                  desc="Lorem ipsum dolor sit amet cons ectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna"
                  color="#F9CFF2"
                />
              </Flip>
            </div>

            <div className="mr-4">
              <Flip left opposite delay={1500} duration={500}>
                <EmployeeCard
                  img="/img/4.png"
                  title="Cryptography Advisor"
                  name="Dr. Atefeh Mashatan"
                  desc="Lorem ipsum dolor sit amet cons ectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna"
                  color="#FF87AB"
                />
              </Flip>
            </div>
            <div className="mr-4 mt-5">
              <Flip left opposite delay={2000} duration={500}>
                <EmployeeCard
                  img="/img/5.png"
                  title="Cryptography Advisor"
                  name="Dr. Atefeh Mashatan"
                  desc="Lorem ipsum dolor sit amet cons ectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna"
                  color="#618B25"
                />
              </Flip>
            </div>
            <div className="mr-4 mt-5">
              <Flip left opposite delay={2500} duration={500}>
                <EmployeeCard
                  img="/img/6.png"
                  title="Cryptography Advisor"
                  name="Dr. Atefeh Mashatan"
                  desc="Lorem ipsum dolor sit amet cons ectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna"
                  color="#2C6E49"
                />
              </Flip>
            </div>
            <div className="mr-4 mt-5">
              <Flip left opposite delay={3000} duration={500}>
                <EmployeeCard
                  img="/img/7.png"
                  title="Cryptography Advisor"
                  name="Dr. Atefeh Mashatan"
                  desc="Lorem ipsum dolor sit amet cons ectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna"
                  color="#4E8BE6"
                />
              </Flip>
            </div>

            <div className="mr-4 mt-5">
              <Flip left opposite delay={3500} duration={500}>
                <EmployeeCard
                  img="/img/8.png"
                  title="Cryptography Advisor"
                  name="Dr. Atefeh Mashatan"
                  desc="Lorem ipsum dolor sit amet cons ectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna"
                  color="#F08542"
                />
              </Flip>
            </div>
          </div>
        </section>
      </Fade>
      <section>
        <div className="p-main">
          <Fade duration={1500} opposite={false} left>
            <PartnerCard img="/img/m1.png" title="Venture Support" />
          </Fade>
          <Fade duration={1500} opposite={false} top>
            <PartnerCard img="/img/m2.png" title="Supercomputing" />
          </Fade>
          <Fade duration={1500} opposite={false} right>
            <PartnerCard img="/img/m3.png" title="Cryptography" />
          </Fade>
        </div>
      </section>
      <section className="form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Feel free to contact us for any question</h2>
              <div className="w-100">
                <Icon name="form" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-box">
                <TextInput label="Full name*" placeholder="Your full name" type="text" />
                <TextInput label="Email*" placeholder="Your email here" type="text" />
                <TextInput label="Phone number *" placeholder="Your phone number here" type="text" />
                <TextInput label="Message" placeholder="Type your message here" type="textarea" />
                <div className="d-flex justify-content-end">
                  <button className="btn btn-submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
