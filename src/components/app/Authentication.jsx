import { Navigate } from "react-router";
import useUser from "../login/hooks/useUser";

const withAuthentication = (Component) => (props) => {
  const { profile } = useUser();

  if (!profile) return <Navigate to={"/login"} replace={true} />;

  return <Component {...props} />;
};

export default withAuthentication;
