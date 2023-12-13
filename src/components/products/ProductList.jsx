import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [viewData, setViewData] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  const nagivate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/productdata")
      .then((res) => {
        setViewData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [fetchData]);

  const handleEdit = (data) => {
    nagivate("/dashboard/product/edit", { state: data });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/productdata/" + id)
      .then((res) => {
        setFetchData(!fetchData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="mx-3 my-5">
      <div className="mb-4 d-flex justify-content-between">
        <div>
          <h3>The Product List is here!</h3>
        </div>
        <Link to={"/dashboard/product/create"}>
          <button className="btn btn-primary">Add</button>
        </Link>
      </div>

      <div className="row g-3">
        {viewData.map((e) => {
          return (
            <div key={e.id} className="col-sm-6 col-lg-4">
              <div className={`card p-3 bg-light border-${e.color}`}>
                <FontAwesomeIcon
                  icon={faBox}
                  size="3x"
                  className={`text-${e.color}`}
                />
                <div className="mt-4 ps-2">
                  <p>
                    <span className={`text-${e.color}`}>Name: </span>
                    {e.name}
                  </p>
                  <div className="d-flex">
                    <p className="me-3">
                      <span className={`text-${e.color}`}>Quantity: </span>
                      {e.quantity}
                    </p>
                    <p>
                      <span className={`text-${e.color}`}>Price: </span>
                      &#x20b9;{e.price}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => handleEdit(e)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{ display: viewData.length === 0 ? "block" : "none" }}
        className="mt-5"
      >
        <p className="text-center text-danger fs-2">No Product Found!</p>
      </div>
    </div>
  );
};

export default ProductList;
