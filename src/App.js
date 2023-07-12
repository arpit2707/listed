import "./App.css";
import { FaAlignCenter, FaGoogle, FaApple } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <label className="sideBoard">Board</label>
      </div>
      <div className="loginGrid">
        <label className="signInLabel-1">Sign In</label>
        <label className="signInLabel-2">Sign in to your account</label>
        <div className="authButtons">
          <button src="" className="gAuth">
            <FaGoogle style={FaAlignCenter} /> Sign in with Google
          </button>
          <button className="appleAuth">
            {" "}
            <FaApple /> Sign in with Apple
          </button>
        </div>
        <div className="loginSection">
          <label className="emailLabel">Email Address</label>
          <input className="emailInput" type="email"></input>
          <label className="passwordLabel">Password</label>
          <input className="passwordInput" type="password"></input>
          <a href="https://google.com">Forgot Password?</a>
          <button className="signIn">Sign In</button>
        </div>
        <label>Don't have an account?</label>
        <a href="https://google.com">Register here</a>
      </div>
    </div>
  );
}

export default App;
