import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import TextField from "../components/base/TextField";
import { axiosInstance } from "../util/axiosInstance";

const loginCall = async (body) => {
  const { data } = await axiosInstance.post("/user/login", body);
  return data;
};

const Login = () => {
  const { mutateAsync } = useMutation({
    mutationFn: loginCall,
  });

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (values) => {
      await mutateAsync(values);
      navigate("/");
    },
  });

  return (
    <div className="container">
      <form className="flex flex-col max-w-[400px] border shadow-sm mx-auto mt-20 p-8 ">
        <TextField
          placeholder={"ایمیل"}
          formik={formik}
          name={"email"}
          label={"ایمیل"}
        />

        <TextField
          placeholder={"رمزعبور"}
          formik={formik}
          name={"password"}
          label={"ایمیل"}
        />

        <button className=" p-2 bg-gray-100 rounded m-2">ورود</button>
      </form>
    </div>
  );
};

export default Login;
