import { useEffect } from "react";
import { redirect, useNavigate } from "react-router";
import useUser from "../components/login/hooks/useUser";

const Home = () => {
  const { profile } = useUser();

  const navigate = useNavigate();

  console.log(profile);

  useEffect(() => {
    if (!profile) {
      navigate("/login", { replace: true });
    }
  }, []);

  return <div>HOME</div>;
};

export default Home;
