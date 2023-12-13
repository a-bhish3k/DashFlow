import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faBoxOpen,
  faComments,
  faGear,
  faRightFromBracket,
  faTachographDigital,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const Sidebar = ({ useremail }) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <nav
      className="side-bar d-flex flex-column border-end"
      id={toggle ? "sidebar-toggle" : null}
    >
      <div className="profile d-flex align-items-center gap-3 my-4 ms-3">
        <div>
          <FontAwesomeIcon
            icon={faCircleUser}
            size={"2x"}
            className="ps-1 text-primary"
          />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h6 className="profile-name mb-1 text-primary">Welcome Back!</h6>
          <span className="personal-email">{useremail}</span>
        </div>
      </div>
      <ul className="nav w-100 navigation flex-column">
        <li>
          <Link to={"/dashboard"} className="nav-link px-4">
            <FontAwesomeIcon icon={faTachographDigital} className="me-3" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/user"} className="nav-link px-4">
            <FontAwesomeIcon icon={faUsers} className="me-3" />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/product"} className="nav-link px-4">
            <FontAwesomeIcon icon={faBoxOpen} className="me-3" />
            <span>Product</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link px-4">
            <FontAwesomeIcon icon={faComments} className="me-3" />
            <span>Chat</span>
          </Link>
        </li>
        <li className="mt-3 pt-3 pb-2 border-top w-100">
          <Link className="nav-link px-4">
            <FontAwesomeIcon icon={faGear} className="me-3" />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <button className="nav-link px-4" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} className="me-3" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
      <ul className="navigation nav w-100 mt-auto mb-3 ms-1">
        <li
          className="nav-link px-4"
          onClick={() => setToggle(!toggle)}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faBarsProgress} className="me-3" />
          <span style={{ fontSize: "0.75em", color: "var(--gray)" }}>
            Toggle Sidebar
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
