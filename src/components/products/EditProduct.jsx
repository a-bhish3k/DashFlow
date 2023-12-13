import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const nagivate = useNavigate();
  const location = useLocation();
  const productData = location.state;

  const formik = useFormik({
    initialValues: productData,
    onSubmit: (values) => {
      axios
        .put("http://localhost:8000/productdata/" + productData.id, values)
        .then((res) => {
          nagivate("/dashboard/product");
        })
        .catch((err) => {
          console.log("error", err.message);
        });
    },
  });
  return (
    <form
      className="mt-5 border rounded-2 p-3 row bg-light col-lg-8 mx-auto"
      onSubmit={formik.handleSubmit}
    >
      <div className="mt-2 mb-5 text-center">
        <h3 className="text-primary">Edit Product Data</h3>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="name" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <div className="input-group">
          <span className="input-group-text" id="price">
            &#x20b9;
          </span>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="quantity" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          onChange={formik.handleChange}
          value={formik.values.quantity}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="color" className="form-label">
          Select Color
        </label>
        <select
          className="form-select"
          id="color"
          onChange={formik.handleChange}
          value={formik.values.color}
        >
          <option value="">Select...</option>
          <option value="primary">Blue</option>
          <option value="success">Green</option>
          <option value="danger">Red</option>
          <option value="warning">Yellow</option>
          <option value="info">Aqua</option>
          <option value="secondary">Gray</option>
          <option value="black">Black</option>
        </select>
      </div>

      <div className="col-12 mt-4 mb-3">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProduct;
