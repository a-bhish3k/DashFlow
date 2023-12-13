import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const nagivate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const api = "https://api.countrystatecity.in/v1/countries";
  const apiKey = {
    headers: {
      "X-CSCAPI-KEY":
        "MWFqSjlJaWZYdzR3NWJyWjdHYUVWVzA3dzQ1SlN6cUFnUGQ5eW0yOQ==",
    },
  };

  const getAllCountries = async () => {
    try {
      const countries = await axios.get(api, apiKey);
      setCountries(countries.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllStates = async () => {
    try {
      const state = await axios.get(
        `${api}/${formik.values.country}/states`,
        apiKey
      );
      setStates(state.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllCities = async () => {
    try {
      const cities = await axios.get(
        `${api}/${formik.values.country}/states/${formik.values.state}/cities`,
        apiKey
      );
      setCities(cities.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      number: "",
      country: "",
      state: "",
      city: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8000/userdata", values)
        .then((res) => {
          nagivate("/dashboard/user");
        })
        .catch((err) => {
          console.log("error", err.message);
        });
    },
  });

  useEffect(() => {
    getAllCountries();
    getAllStates();
    getAllCities();
  }, [formik.values.country, formik.values.state]);

  return (
    <form
      className="row my-5 border rounded-2 p-3 bg-light gy-3 col-lg-10 mx-auto"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-3 text-center">
        <h3 className="text-primary">Create New User</h3>
      </div>
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">
          Name
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
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="number"
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <select
          className="form-select"
          id="country"
          name="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        >
          <option value="">Select...</option>
          {countries.map((e) => {
            return (
              <option key={e.id} value={e.iso2}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <select
          className="form-select"
          id="state"
          name="state"
          onChange={formik.handleChange}
          value={formik.values.state}
        >
          <option value="">Select...</option>
          {states.map((e) => {
            return (
              <option key={e.id} value={e.iso2}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <select
          className="form-select"
          id="city"
          name="city"
          onChange={formik.handleChange}
          value={formik.values.city}
        >
          <option value="">Select...</option>
          {cities.map((e) => {
            return (
              <option key={e.id} value={e.iso2}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="col-12 mt-4">
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateUser;
