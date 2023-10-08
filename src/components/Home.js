import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <h2> Welcome to Quest Rush, your gateway to a world of exciting tasks and challenges! </h2>
            <p> Here you can find a variety of quests to complete, from simple tasks to more complex challenges.
                You can also create your own quests and share them with the world! </p>
            <p className="get-started"> To get started, click on the "Quests" tab below. </p>
            <button className="quest-btn"> Quests </button>
        </div>
    )
}
