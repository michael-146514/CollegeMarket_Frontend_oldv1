import React, { useState } from "react";
import { auth } from "../../hooks/firebase";
import "./LoginPage.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful sign-in (e.g., redirect to dashboard)
      console.log("Logged in as:", email);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Registered and logged in as:", user.email);
      // Handle successful registration
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      // Handle successful password reset request (e.g., show success message)
      console.log("Password reset email sent to:", email);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Handle successful sign-out
      console.log("Logged out");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handlePasswordReset}>Reset Password</button>
      <button onClick={handleSignOut}>Sign Out</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
