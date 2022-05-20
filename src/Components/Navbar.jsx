import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import '../css/Navbar.css';
import '../css/App.css';

const getData = () => {
    let obj = localStorage.getItem('info');

    if(obj){
        return JSON.parse(localStorage.getItem('info'));
    }else{
        return {};
    }
}

export default function Navbar() {
    const[data,setdata] = useState(getData());
    const[username,setusername] = useState("Sign Up")
    function run() {
        console.log('Clicked');
        let navcontainer = document.querySelector('.nav-Container');
        navcontainer.classList.toggle('hide');
      
    }
    return (
        <>
            <div className="navhead">
                <img className="logo" src={logo} alt="" /><p>Async Developers</p>
                <div className="burger" onClick={run}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            
            <div className="nav-Container">
                <div className="l-list">
                    <li>
                        <ul><Link to="/"><img className="logo2" src={logo} alt="" ></img></Link></ul>
                        <ul><Link to="/">Home</Link></ul>
                        <ul><Link to="/Course">Course</Link></ul>
                        <ul><Link to="/Contact">Contact</Link></ul>
                        <ul><Link to="/Profile">Profile</Link></ul>
                        {/* <ul><Link to="/Test">Test</Link></ul> */}
                    </li>
                </div>

                <div className="r-list">
                    <input type="text" id="search" placeholder="search" />
                    <button style={{border:"1px solid white"}}>search</button>
                    {/* <button ><Link to="/LogIn">log in</Link></button> */}
                    <button style={{border:"1px solid white"}}><Link to="/SignUp">sign up</Link></button>
                </div>
            </div>
        </>
    )
}