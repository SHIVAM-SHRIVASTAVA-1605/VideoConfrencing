import React from 'react'
import "../App.css"
import phone from '../assets/phone.png';
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className='landingPageContainer'>
        <nav>
            <div className='navHeader'>
                <h2 style={{ color: "white" }}>VideoConfrencing</h2>
            </div>
            <div className='navlist'>
                <p>Join as Guest</p>
                <p>Register</p>
                <div role = 'button'>
                    <p>Login</p>
                </div>
            </div>
        </nav>

        <div className='landingMainContainer'>
            <div>
                <h1 style={{ color: "white" }}><span style={{color: "#FF9839"}}>Connect</span> with you loved ones</h1>
                <p style={{ color: "white" }}>Cover a distance by VideoConfrencing</p>
                <div role='button'>
                    <Link to="/home">Get Started</Link>
                </div>
            </div>
            <div>
                <img src={phone} alt="mobile screen" />
            </div>
        </div>

    </div>
  )
}
