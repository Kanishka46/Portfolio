import React from 'react';
import './Kani.css';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="hero">
                <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?cs=srgb&dl=pexels-tara-winstead-8386440.jpg&fm=jpg" alt="Profile" />
                <h1>Kanishka K</h1>
                <p>Full stack delevolper | Creative Thinker | Problem Solver</p>
            </div>
            <div className="content">
                <div className="section">
                    <h2>Achievements</h2>
                    <ul>
                        <li>LEETCODE 40+ problems solved</li>
                        <li><a href="https://leetcode.com/u/kanishka_46/">Click here</a></li>
                        <li></li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Skills</h2>
                    <ul>
                        <li>C++,Java</li>
                        <li>Web Development</li>
                        <li>React,SQL</li>
                    </ul>
                </div>
                <div className="section timeline">
                    <h2>Certifications</h2>
                    <div className="event">
                        <h3>Introduction to Data Science</h3>
                        <p>Feb 2023</p>
                    </div>
                    <div className="event">
                        <h3>Web development</h3>
                        <p>Aug 2023 - Dec 2023</p>
                    </div>
                </div>
                <div className="section">
                    <h2>Education</h2>
                    <ul>
                        <li>B.Tech Information technology in Sri krishna college of technology</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
