import React from "react";
import ChartBar from "./ChartBar";
import "./ChartBarTitle.css";
import ChartPie from "./ChartPie";
import Status from "./Status";

const ChartBarTitle = () => {
  return (
    <div className="bar_container">
      <section className="devider">
        <section>
          <div className="first_border">
            <div className="first_container_card">
              <span className="first_card">
                <img
                  id="image"
                  src="https://cdn3.iconfinder.com/data/icons/business-finance-glyph-1/64/pie-cart-512.png"
                  alt=""
                />
                <span>
                  <p className="mb-1">Revenue</p> <h5>$21,456</h5>
                </span>
              </span>
              <span>
                <p>
                  <small className="percentage"> +2.65% </small>
                </p>
              </span>
            </div>
            <div className="first_container_card">
              <span className="first_card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFg2zc3lOwa5a99yqGzOsN7y7ds17Am1hp1WznrKHkPcDE-OOeCCa1vF9MPGfWHEZzEk&usqp=CAU"
                  alt=""
                />
                <span>
                  <p className="mb-1">Orders</p> <h5>5,643</h5>
                </span>
              </span>
              <span>
                <p>
                  <small className="orders"> - 0.82% </small>
                </p>
              </span>
            </div>
            <div className="first_container_card">
              <span className="first_card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7l7a5uXoXJASPGIjDCka3TLXhuseZnjKRx6zsSIHBNRv3z56UK33GnjQbFHjdF0xboFM&usqp=CAU"
                  alt=""
                />
                <span>
                  <p className="mb-1">Customers</p>
                  <h5 className="me-2">45,254</h5>
                </span>
              </span>
              <span>
                <p>
                  <small className="orders"> - 1.04% </small>
                </p>
              </span>
            </div>
          </div>
          <div>
            <ChartBar></ChartBar>
          </div>
          <div className="d-flex">
            <Status></Status>
            <ChartPie></ChartPie>
          </div>
        </section>
        <section className="bg-white">
          <div className="side_img">
            <img
              src="https://images.unsplash.com/photo-1549279866-41b2b21a0de4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGhpbGxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
            <span className="side_user_img">
              <img
                src="https://media.istockphoto.com/photos/young-japanese-woman-looking-confident-picture-id1194465593?b=1&k=20&m=1194465593&s=170667a&w=0&h=-r1o2-UjEqVgkDOE4l1NYV-8JhTDcyDw0oBgjvT1Ibs="
                alt=""
              />
            </span>
            <h5 className="mb-0 mt-2">Jennifer Bennett</h5>
            <p className="mb-4">
              <small>Product Designer</small>
            </p>
            <div className="d-flex justify-content-evenly">
              <span>
                <h6>1,269</h6>
                <p>
                  <small>Products</small>
                </p>
              </span>
              <span>
                <h6>5.2K</h6>
                <p>
                  <small>Followers</small>
                </p>
              </span>
            </div>
          </div>
          <hr className="mx-4 my-2" />
          <div>
            <span className="d-flex justify-content-between mx-4 my-0">
              <p className="mb-0">Earning</p>
              <img
                className="i_icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png"
                alt=""
              />
            </span>
            <img
              className="bar-chart"
              src="https://i.ibb.co/ct1SzdF/bar.jpg"
              alt=""
            />
            <h6 className="bar_percent">76%</h6>
            <h5 className="mb-0">$26,256</h5>
            <p>
              <small>Earning this Month</small>
            </p>
            <p>
              <span className="side_percent">+2.65%</span> From previous period
            </p>
          </div>
          <hr className="mx-4" />
          <h6 className="d-flex mx-4 mb-4">
            Recent Activity <p></p>
          </h6>
          <div className="d-flex">
            <span className="date">
              <h6 className="mb-0">12</h6> <p className="mb-0">Sep</p>
            </span>
            <p>
              <small>Responded to need "Volunteer Activities"</small>
            </p>
          </div>
          <div className="d-flex">
            <span className="date">
              <h6 className="mb-0">11</h6> <p className="mb-0">Sep</p>
            </span>
            <p>
              <small>
                Everyone realizes would be desirable... <br />
                <a className="text-decoration-none readmore" href="#">
                  Read more
                </a>
              </small>
            </p>
          </div>
          <div className="d-flex">
            <span className="date">
              <h6 className="mb-0">10</h6> <p className="mb-0">Sep</p>
            </span>
            <p>
              <small>Joined the group "Boardsmanship Forum"</small>
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ChartBarTitle;
