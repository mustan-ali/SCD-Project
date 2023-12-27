import React from 'react'
import './Card.css';


export default function Card(){
    return (
        <div className="card">
            <h3 className="title">Router Configuration </h3>
            <span className="author">Mahesh</span>
            <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sapiente temporibus asperiores amet
                sunt? Hic alias repellat, amet iure corrupti at non voluptatibus cum dolor!
            </p>
            <div className="info">
                <span>Rs. 500</span>
                <button className="btn">Contact</button>
            </div>
        </div>
    )
}
