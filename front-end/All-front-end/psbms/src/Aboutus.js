import React from "react";
import "./Aboutus.css";
import Portrait from "./port.jpg";
// import Joel  from "./joela.jpeg";

function Aboutus() {
    return (
    <div>
        <div class="about-section">
            <h1>About Us Page</h1>
            <p>We are Team 6. Team of 4 students,</p>
            <p>and our team is composed of two Computer Scientist</p>
            {/* <p> Students and two Software Engineering students.</p>
            <p>Our goal as a team during this semester</p>
            <p>is to build a software product t</p>
            <p>o help our communities to enhance their business </p>
            <p>in management of their profit, gain, and expenses.</p> */}
        </div>

        <div class="row">
            <div class="column">
                <div class="card">
                    <img src={Portrait} alt="Alex"/>
                    <div class="containerA">
                        <h2>Alex Martinez</h2>
                        <p class="title">Dev/Front-end</p>
                        {/* <p>Some text that describes me</p> */}
                        <p className="stud">Computer Scienctist Student</p>
                        <p>Alex@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img className="Photo_h" src={Portrait} alt="Iyemenvile"/>
                    <div class="containerA">
                        <h2>Joel Itipo</h2>
                        <p class="title">Dev/Front-End</p>
                        <p className="stud">Computer Scientist Student</p>
                        <p>joel@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>


            <div class="column">
                <div class="card">
                    <img src={Portrait}  alt="Jimmy" style={{Width:100}}/>
                    <div class="containerA">
                        <h2>Jimmy Lee</h2>
                        <p class="title">Dev/Back-End</p>
                        <p className="stud">Software Engineer Student</p>
                        <p>john@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src={Portrait} alt="Ujjwal" style={{Width:100}}/>
                    <div class="containerA">
                        <h2>Ujjwal </h2>
                        <p class="title">Dev/Back-End</p>
                        <p className="stud">Software Engineer Student</p>
                        <p>ujjwal@gmail.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
        
            </div>

        </div>

    </div>


    );
}

export default Aboutus


