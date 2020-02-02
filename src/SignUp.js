import React, { useState } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userName + ", " + password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Member Login
        <input
          type="text"
          name="userName"
          onChange={event => setUserName(event.target.value)}
          required
        />
        {userName}
        <input
          type={togglePassword ? "password" : "text"}
          name="password"
          onChange={event => setPassword(event.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setTogglePassword(!togglePassword)}
        >
          Hide/Show
        </button>
        {password}
        <button type="submit">Login</button>
      </form>
      <button>Forgot Password?</button>
    </div>
  );
};

export default SignUp;
