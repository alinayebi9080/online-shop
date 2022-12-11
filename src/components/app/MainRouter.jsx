import { Route, Routes } from "react-router";
import Factor from "../../pages/Factor";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import ProductDetail from "../../pages/ProductDetail";
import MainLayout from "./MainLayout";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home access="product:all" />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/factor" element={<Factor />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRouter;
