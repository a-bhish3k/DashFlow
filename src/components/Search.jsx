import { Link, useLocation } from "react-router-dom";
import Data from "../../db.json";

const Search = () => {
  const userData = Data.userdata;
  const productData = Data.productData;

  const location = useLocation();
  const query = location.state;

  return (
    <div className="mx-3 my-5">
      {query !== null ? (
        <>
          <h4>
            You searched for <i>{query}</i>
          </h4>
          <div className="p-3 my-5">
            <h5>User List</h5>
            <ul className="list-group">
              {userData
                .filter((e) => {
                  if (e.name.toLowerCase().includes(query.toLowerCase())) {
                    return e;
                  }
                })
                .map((e) => (
                  <li key={e.id} className="list-group-item">
                    <Link to={"/dashboard/user"}>{e.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="p-3 my-5">
            <h5>Product List</h5>
            <ul className="list-group">
              {productData
                .filter((e) => {
                  if (e.name.toLowerCase().includes(query.toLowerCase())) {
                    return e;
                  }
                })
                .map((e) => (
                  <li key={e.id} className="list-group-item">
                    <Link to={"/dashboard/product"}>{e.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        <h4>Search something!</h4>
      )}
    </div>
  );
};

export default Search;
