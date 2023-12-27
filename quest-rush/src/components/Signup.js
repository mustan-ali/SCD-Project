import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <div class="signup">
      <form id="contact" action="" method="post">
        <h3>Signup</h3>
        <fieldset>
          <input placeholder="Full Name" type="text" required />
        </fieldset>
        <fieldset>
          <input placeholder="Email Address" type="email" required />
        </fieldset>
        <fieldset>
          <input placeholder="Password" type="password" required />
        </fieldset>
        <fieldset>
          <input placeholder="Confirm password" type="password" required />
        </fieldset>
        <fieldset>
          <button name="submit" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
