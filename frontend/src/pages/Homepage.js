import React from "react";
import "./Homepage.css"; // Assuming you will write CSS in an external file

function HomePage() {
    return (
        <div className="parent">
            <div className="info-container container1">
                <div className="heading">
                    <h1>WELCOME</h1>
                </div>
                <button className="btnn">BEATME!</button>
            </div>
            <div className="info-container container2">
                <div className="heading">
                    <h1>TO</h1>
                </div>
                <button className="btnn">TOUCHME!</button>
            </div>
            <div className="info-container container3">
                <div className="heading">
                    <h1>UNIVERSE</h1>
                </div>
                <button className="btnn">CLICKME!</button>
            </div>
        </div>
    );
}

export default HomePage;
