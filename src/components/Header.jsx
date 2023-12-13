import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchData("");
    navigate("/dashboard/search", { state: searchData });
  };

  return (
    <header>
      <div className="container-fluid d-flex align-items-center border-bottom py-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <button type="submit" className="btn border-0 py-0">
            <FontAwesomeIcon icon={faSearch} color="var(--icon-gray)" />
          </button>
          <input
            className="form-control border-0 search"
            type="search"
            placeholder="Global search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </form>

        <div className="ms-auto me-2">
          <FontAwesomeIcon icon={faBell} color="var(--table-gray)" />
        </div>
      </div>
    </header>
  );
};

export default Header;
