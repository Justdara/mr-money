import React, { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const getErrorMessage = (error) => {
    if (error && error.startsWith("Firebase:")) {
      let errorMessage = error.split("Firebase:")[1].trim();

      if (errorMessage.includes("(auth/")) {
        errorMessage = errorMessage.split("(auth/")[0].trim();
      }
      return errorMessage;
    }
    return error;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginform}>
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">login</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{getErrorMessage(error)}</p>}{" "}
    </form>
  );
}
