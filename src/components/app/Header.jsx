import { Link, NavLink } from "react-router-dom";
import useAuth from "../login/hooks/useAuth";
import useUser from "../login/hooks/useUser";
import withAuthentication from "./Authentication";

const Header = () => {
  const { profile } = useUser();
  const { logOut } = useAuth();
  return (
    <header className=" bg-gray-100">
      <div className="flex justify-between p-4 shadow-sm container">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">فروشگاه</h1>
        </Link>
        <div className="flex gap-4">
          {profile ? (
            <>
              <NavLink to={"/factor"}>فاکتور</NavLink>
              <button onClick={logOut}>خروج</button>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>ورود</NavLink>
              <NavLink to={"/signup"}>ثبت نام</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
