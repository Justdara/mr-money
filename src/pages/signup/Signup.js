import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";

export default function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
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
    <form onSubmit={handleSubmit} className={styles.signupform}>
      <h2>Signup</h2>
      <label>
        <span>username:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
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
      {!isPending && <button className="btn">sign up</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{getErrorMessage(error)}</p>}{" "}
    </form>
  );
}
