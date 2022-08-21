import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="main_container">
        <div>
          <h5>Dashboard</h5>
        </div>
        <div className="d-flex">
          <span>
            <a href="#">
              <img
                className="navbar_searchicon"
                src="https://www.seekpng.com/png/small/871-8719667_download-png-transparent-background-search-icon.png"
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="#">
              <img
                className="navbar_appicon"
                src="https://img.freepik.com/premium-vector/usa-flag-white-background-flat-style_601298-441.jpg?w=2000"
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="#">
              <img
                className="navbar_appicon"
                src="https://developer.android.com/static/distribute/google-play/resources/icon-design-specifications/images/rounded-corners-uniformed.png"
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="#">
              <img
                className="navbar_bellicon"
                src="https://media.istockphoto.com/vectors/notificationbellicon-vector-id879754688?k=20&m=879754688&s=170667a&w=0&h=rj9jAKP8sOxBtxByGzLm3vdxsGTw9_VA-ayqvfASi74="
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="#">
              <img
                className="navbar_iconimg"
                src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/settings-512.png"
                alt=""
              />
            </a>
          </span>
          <span>
            <img
              className="navbar_img"
              src="https://media.istockphoto.com/photos/young-japanese-woman-looking-confident-picture-id1194465593?b=1&k=20&m=1194465593&s=170667a&w=0&h=-r1o2-UjEqVgkDOE4l1NYV-8JhTDcyDw0oBgjvT1Ibs="
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
