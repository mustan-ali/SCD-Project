import React from "react";
import "./CreateQuest.css";

export default function CreateQuest() {
    return (
        <div class="create-container">
            <form id="contact" action="" method="post">
                <h3>Create Quest</h3>
                <fieldset>
                    <input placeholder="Name" type="text" required/>
                </fieldset>
                <fieldset>
                    <input placeholder="Email Address" type="email" required/>
                </fieldset>
                <fieldset>
                    <input placeholder="Quest Title" type="text" required/>
                </fieldset>
                <fieldset>
                    <input placeholder="Price" type="number" required/>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Quest description" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}