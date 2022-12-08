import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRouter;
