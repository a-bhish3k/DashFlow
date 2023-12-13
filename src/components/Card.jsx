import { faBoxOpen, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [productData, setProductData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:8000/productdata"),
        axios.get("http://localhost:8000/userdata"),
      ])
      .then(
        axios.spread((product, user) => {
          setProductData(product.data);
          setUserData(user.data);
        })
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="row m-4 gy-4">
      <div className="col col-xl-4">
        <div className="card p-4 border-primary bg-light">
          <FontAwesomeIcon icon={faUsers} size="3x" className="text-primary" />
          <div className="mt-4 text-center">
            <p className="fw-bold">
              Total users: <span>{userData.length}</span>
            </p>
          </div>
          <Link
            to={"/dashboard/user"}
            className="btn btn-sm btn-outline-primary"
          >
            Go to User
          </Link>
        </div>
      </div>

      <div className="col col-xl-4">
        <div className="card p-4 border-warning bg-light">
          <FontAwesomeIcon
            icon={faBoxOpen}
            size="3x"
            className="text-warning"
          />
          <div className="mt-4 text-center">
            <p className="fw-bold">
              Total Products: <span>{productData.length}</span>
            </p>
          </div>
          <Link
            to={"/dashboard/product"}
            className="btn btn-sm btn-outline-warning"
          >
            Go to Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
