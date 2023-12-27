import React from "react";
import "./Login.css";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div class="login">
      <form id="contact" action="" method="post">
        <h3>Login</h3>
        <fieldset>
          <input placeholder="Email Address" type="email" required />
        </fieldset>
        <fieldset>
          <input placeholder="Password" type="password" required />
        </fieldset>
        <fieldset>
          <button name="submit" type="submit">
            Submit
          </button>
        </fieldset>
        <p>
          Or 
        </p>
          <Link to="/signup">Signup</Link>
      </form>
    </div>
  );
}
