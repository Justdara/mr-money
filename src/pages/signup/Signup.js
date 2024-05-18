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
      <h2 className="text-3xl font-bold text-[#F53838]">Signup</h2>
      <label>
        <span>Username:</span>
        <input
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
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
