import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Card from "./components/Card";
import Userlist from "./components/users/UserList";
import CreateUser from "./components/users/CreateUser";
import EditUser from "./components/users/EditUser";
import ProductList from "./components/products/ProductList";
import CreateProduct from "./components/products/CreateProduct";
import EditProduct from "./components/products/EditProduct";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Card />} />
          <Route path="user" element={<Userlist />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/edit" element={<EditUser />} />
          <Route path="product" element={<ProductList />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/edit" element={<EditProduct />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
