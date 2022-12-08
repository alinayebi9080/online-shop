import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { axiosInstance } from "../../../util/axiosInstance";

const loginCall = async (body) => {
  const { data } = await axiosInstance.post("/user/login", body);
  return data;
};

const signUpCall = async (body) => {
  const { data } = await axiosInstance.post("/user/register", body);
  return data;
};

const useAuth = () => {
  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationFn: loginCall,
    onSuccess: () => {
      navigate("/");
    },
  });

  const { mutate: signUp } = useMutation({
    mutationFn: signUpCall,
    onSuccess: () => {
      navigate("/");
    },
  });

  return { login, signUp };
};

export default useAuth;
