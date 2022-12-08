import { useFormik } from "formik";
import { Navigate } from "react-router";
import TextField from "../components/base/TextField";
import useAuth from "../components/login/hooks/useAuth";
import useUser from "../components/login/hooks/useUser";

const Login = () => {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: login,
  });

  const { profile } = useUser();

  if (profile) return <Navigate to={"/"} replace={true} />;

  return (
    <div className="container">
      <form
        className="flex flex-col max-w-[400px] border shadow-sm mx-auto mt-20 p-8"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-lg font-bold text-center my-8">ورود به سایت</h1>
        <TextField
          placeholder={"ایمیل"}
          formik={formik}
          name={"email"}
          label={"ایمیل"}
          type="text"
        />

        <TextField
          placeholder={"رمزعبور"}
          formik={formik}
          name={"password"}
          label={"رمزعبور"}
          type="password"
        />

        <button className=" p-2 bg-gray-100 rounded m-2">ورود</button>
      </form>
    </div>
  );
};

export default Login;
