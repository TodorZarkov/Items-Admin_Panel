import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "../hooks/useForm";

export function Register() {

  const { onRegisterSubmit } = useContext(AuthContext);

  const {values, onChangeHandler, onSubmitHandler } = useForm({
    email: "",
    password: "",
    rePassword: ""
  },
    onRegisterSubmit);

  return (
    <form onSubmit={onSubmitHandler} className="register-form">
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        onChange={onChangeHandler}
        value={values.email} />

      <input
        type="password"
        name="password"
        placeholder="SET STRONG PASSWORD"
        onChange={onChangeHandler}
        value={values.password} />

      <input
        type="password"
        name="rePassword"
        placeholder="CONFIRM PASSWORD"
        onChange={onChangeHandler}
        value={values.rePassword} />

      <button className="btn register danger" type="submit">Register</button>
    </form>
  );
}