import React from "react";
import avatar from '../../assets/avatar/avatar.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={avatar} alt="avatar"/>
            <div className="my-2">
                <p>
                    hello
                </p>
            </div>
        </section>
    );
}

export default About; 