import React from 'react'
import { FaBeer, FaFacebook, } from 'react-icons/fa';
import {  } from 'react-icons/ti';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="flex-container">
                <div className="footer-about">
                    <h5>About <Link to="/">i<span>Reporter</span></Link></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempore libero, dolor vitae, deserunt quod illo provident
                        a laboriosam dignissimos excepturi illum neque. Provident
                        illo dicta quaerat excepturi, magnam corrupti totam!
                </p>
                </div>

                <div className="footer-quick-links">
                    <h6>Qiuck Links</h6>
                    <ul>
                        <li><Link to="/">Terms</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-subscribe">
                    <h6>Subscribe to our Newsletter</h6>
                    <input type="text" placeholder="Enter Email"/>
                    <button className="btn" disabled>Send</button>

                    <h6 className="follow-us">Follow us</h6>
                <ul>
                    <li><Link to="/"><FaFacebook/></Link></li>
                    <li><Link to="/"><FaBeer/></Link></li>
                    <li><Link to="/"><FaBeer/></Link></li>
                    <li><Link to="/"><FaBeer/></Link></li>
                </ul>
                </div>
                


            </div>
            <small>
                Copyright &copy; 2020 All rights reserved | Made by
                <span><Link to="/">  Abuchi Kingsley</Link></span>
            </small>

        </footer>
    )
}

export default Footer
