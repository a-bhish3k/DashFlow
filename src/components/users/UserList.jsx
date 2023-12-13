import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
  const [viewData, setViewData] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  const nagivate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/userdata")
      .then((res) => {
        setViewData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [fetchData]);

  const handleEdit = (data) => {
    nagivate("/dashboard/user/edit", { state: data });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/userdata/" + id)
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
          <h3>The User List is here!</h3>
        </div>
        <Link to={"/dashboard/user/create"}>
          <button className="btn btn-primary">Create</button>
        </Link>
      </div>

      <div className="border rounded-2 p-3">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Password</th>
              <th>Number</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewData.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>{e.number}</td>
                  <td>{e.country}</td>
                  <td>{e.state}</td>
                  <td>{e.city}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleEdit(e)}
                      className="btn btn-sm btn-outline-success me-2"
                    >
                      <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(e.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div style={{ display: viewData.length === 0 ? "block" : "none" }}>
          <p className="text-center text-danger fs-3">No Data Found!</p>
        </div>
      </div>
    </div>
  );
};

export default UserList;
