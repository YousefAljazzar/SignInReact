import Button from "../../components/button";
import Input from "../../components/input";
import "./style.css";
import React, { useState } from "react";

function SignIn() {
  const [value, setValue] = useState("");
  const [passValue, setPassValue] = useState("");
  return (
    <div className="contianter">
      <div className="main">
        <h1>Sign In</h1>
        <p>Sign in and start managing your candidates!</p>
        <Input
          type="email"
          value={value}
          placeholder="Login"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Input
          type="password"
          value={passValue}
          placeholder="Password"
          onChange={(e) => {
            setPassValue(e.target.value);
          }}
        />
        <div className="forg-rem">
          <div className="remember">
            <input type="checkbox"></input>
            <span>Remember Me</span>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <Button text="Login" />
      </div>
      <div className="image">
        <img src="./DarkMode.png" alt="asd"></img>
      </div>
    </div>
  );
}

export default SignIn;
