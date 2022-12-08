import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import MainLayout from "./MainLayout";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRouter;
