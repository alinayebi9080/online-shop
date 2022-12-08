import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-lg font-bold">Shop</h1>
      <div>
        <NavLink to={"/login"}>ورود</NavLink>
        <NavLink to={"/signup"}>ثبت نام</NavLink>
      </div>
    </header>
  );
};

export default Header;
