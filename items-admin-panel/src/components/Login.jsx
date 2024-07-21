import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function Login() {
  const {onLoginSubmit} = useContext(AuthContext);

  return (
    <form className="register-form" onSubmit={onLoginSubmit}>
      <input type="email" name="email" placeholder="EMAIL" />
      <input type="password" name="password" placeholder="PASSWORD" />
      <button className="btn login" type="submit">Login</button>
    </form>
  );
}