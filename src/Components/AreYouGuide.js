import React from "react";
// import {Link} from "react-router-dom";

export default function AreYouGuide() {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="images/12.png" alt="" style={{ display: "flex", width: "300px", height: "300px" }} />
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontFamily: "Roboto", fontSize: "60px", fontWeight: "bold", color: "#24265D", marginTop: "20px" }}>are you a guide?</h1>
                    {/* <link to="/forGuides"> */}
                    <button style={{ backgroundColor: "#51ADE5", border: "none", width: "347px", height: "73px", fontFamily: "Roboto", fontSize: "30px", fontWeight: "bold", color: "#F4F4F4", marginTop: "20px" }}>
                        Get Started for free
                    </button>
                    {/* </link> */}
                    <p style={{ fontFamily: "Roboto", fontSize: "60px", fontWeight: "bold", color: "#24265D", marginTop: "20px" }}>and get more customers</p>
                </div>
                <img src="images/13.png" alt="" style={{ width: "300px", height: "300px" }} />
            </div>
        </>
    );
}
