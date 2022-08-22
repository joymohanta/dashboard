import React from "react";
import "./ProductView.css";

const ProductView = () => {
  return (
    <div className="bg-white mt-3 product">
      <div className="d-flex justify-content-between align-items-center mx-2 mt-2 mb-2">
        <h6>Top Product</h6>
        <span>
          <select
            className="form-select form-select-sm option_bar"
            aria-label=".form-select-sm example"
          >
            <option defaultValue>Monthly</option>
            <option value="1">Yearly</option>
            <option value="2">Weekly</option>
          </select>
        </span>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="d-flex mt-3">
            <small className="number_color">#1</small>
            <p className="mb-0 m">
              <small>Polo blue T-shirt</small> <br />{" "}
              <h6 className="dolor_price">$ 25.4</h6>
            </p>
          </span>
          <h6 className="total_dolar me-2">3.82k</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="d-flex mt-3">
            <small className="number_color">#2</small>
            <p className="mb-0 m">
              <small>Hoodie for men</small> <br />{" "}
              <h6 className="dolor_price">$ 24.5</h6>
            </p>
          </span>
          <h6 className="total_dolar me-2">3.14k</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="d-flex mt-3">
            <small className="number_color">#3</small>
            <p className="mb-0 m">
              <small className="me-2">Red color Cap</small> <br />
              <h6 className="dolor_price">$ 22.5</h6>
            </p>
          </span>
          <h6 className="total_dolar me-2">2.84k</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="d-flex mt-3">
            <small className="number_color">#4</small>
            <p className="mb-0 m">
              <small className="me-2">Pocket T-shirt</small> <br />{" "}
              <h6 className="dolor_price">$ 23.4</h6>
            </p>
          </span>
          <h6 className="total_dolar me-2">2.06k</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
