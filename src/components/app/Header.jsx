import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container bg-gray-100">
      <div className="flex justify-between p-4 shadow-sm ">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">فروشگاه</h1>
        </Link>
        <div className="flex gap-4">
          <NavLink to={"/login"}>ورود</NavLink>
          <NavLink to={"/signup"}>ثبت نام</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
