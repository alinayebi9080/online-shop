import { useId } from "react";

const TextField = ({ name, placeholder, formik, label }) => {
  const id = useId();
  return (
    <div className="flex justify-between m-2">
      <label htmlFor={`${name}-${id}`}>{label}</label>
      <input
        id={`${name}-${id}`}
        placeholder={placeholder}
        name={name}
        className="border p-2"
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <p>{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default TextField;
