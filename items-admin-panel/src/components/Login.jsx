import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "../hooks/useForm";

export function Login() {
  const {onLoginSubmit} = useContext(AuthContext);

  const {values, onChangeHandler ,onSubmit} = useForm(
    { "email":'', "password":''},
    onLoginSubmit);

  return (
    <form className="register-form" onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        onChange={onChangeHandler}
        value={values.email} />
      <input
        type="password"
        name="password"
        placeholder="PASSWORD"
        onChange={onChangeHandler}
        value={values.password} />
      <button className="btn login" type="submit">Login</button>
    </form>
  );
}