export function Login() {
    return(
        <form className="register-form">
          <input type="email" name="email" placeholder="EMAIL" />
          <input type="password" name="password" placeholder="PASSWORD" />
          <button className="btn login" type="submit">Login</button>
        </form>
    );
}