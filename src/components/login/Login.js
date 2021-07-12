import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on facebook!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="Email" placeholder="" className="loginInput" />
            <input type="Password" placeholder="" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              Create a New account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
