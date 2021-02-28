import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <main className="form-signin col-sm-4 mx-auto mt-5 mb-5">
      <form onSubmit={handleSubmit}>
        <h1 className="h2 mb-3 fw-bold text-center text-uppercase">Login</h1>
        {error}
        <label htmlFor="inputEmail" className="visually-hidden">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="form-control mb-3 mt-4"
          placeholder="Email address"
          ref={emailRef}
          required
        />
        <label htmlFor="inputPassword" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control mb-3"
          placeholder="Password"
          ref={passwordRef}
        />
        <div className="checkbox mb-4">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          dissabled={loading}
          className="w-100 btn btn-lg btn-spanish fw-bold"
          type="submit"
        >
          Login
        </button>
      </form>
    </main>
  );
}
