import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { axiosInstance } from "../../../util/axiosInstance";
import { userKeys } from "../../../util/reactQuery/constants";
import { clearStoredUser, saveUser } from "../../../util/storage";

const loginCall = async (body) => {
  const { data } = await axiosInstance.post("/user/login", body);
  return data;
};

const signUpCall = async (body) => {
  const { data } = await axiosInstance.post("/user/register", body);
  return data;
};

const logOutCall = async () => {
  const { data } = await axiosInstance.get("/user/logout");
  return data;
};

const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login } = useMutation({
    mutationFn: loginCall,
    onSuccess: (data) => {
      queryClient.setQueryData(userKeys.profile, data);
      saveUser(data);
      navigate("/");
    },
  });

  const { mutate: signUp } = useMutation({
    mutationFn: signUpCall,
    onSuccess: () => {
      navigate("/");
    },
  });

  const { mutate: logOut } = useMutation({
    mutationFn: logOutCall,
    onSuccess: () => {
      queryClient.setQueryData(userKeys.profile, null);
      clearStoredUser();
      navigate("/login");
    },
  });

  return { login, signUp, logOut };
};

export default useAuth;
