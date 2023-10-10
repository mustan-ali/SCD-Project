import React from 'react';
import Card from "./Card";
import './Quests.css';

export default function Quests() {
    return (
        <div className="quest">
            <h1 className="quest-title">Quests</h1>
            <div className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )

}