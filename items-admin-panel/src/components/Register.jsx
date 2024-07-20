export function Register() {
    return(
        <form className="register-form">
          <input type="email" name="email" placeholder="EMAIL" />
          <input type="password" name="password" placeholder="SET STRONG PASSWORD" />
          <input type="password" name="repassword" placeholder="CONFIRM PASSWORD" />
          <button className="btn register danger" type="submit">Register</button>
        </form>
    );
}