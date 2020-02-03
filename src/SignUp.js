import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userName + ", " + password);
  };
  return (
    <div className="signUp__form">
      <form onSubmit={handleSubmit}>
        <span> Member Login</span>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          onChange={event => setUserName(event.target.value)}
          required
        />
        <div className="signUp__form__password__inner">
          <input
            className="signUp__form__password"
            type={togglePassword ? "password" : "text"}
            name="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            required
          />
          <button
            className="signUp__form__password-btn"
            type="button"
            onClick={() => setTogglePassword(!togglePassword)}
          >
            {togglePassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button className="signUp__form__login-btn" type="submit">
          Login
        </button>
      </form>
      <button className="signUp__form__forgot-btn" type="button">
        Forgot Password?
      </button>
    </div>
  );
};

export default SignUp;
