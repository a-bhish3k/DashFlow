import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar useremail={"admin@email"} />
        </div>
        <div className="w-100 vh-100 overflow-x-hidden overflow-y-scroll">
          <div className="sticky-top">
            <Header />
          </div>
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
