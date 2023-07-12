import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label className="sidebar">Board</label>
        </div>
        <div>
          <label className="signInLabel-1">Sign In</label>
          <label className="signInLabel-1">Sign in to your account</label>
          <button>Sign in with Google</button>
          <button>Sign in with Apple</button>
          <label>Email Address</label>
          <input type="email"></input>
          <label>Password</label>
          <input type="password"></input>
          <label>Forgot Password?</label>
          <button>Sign In</button>
          <label>
            Don't have an account?{" "}
            <a href="https://google.com">Register here</a>
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;
