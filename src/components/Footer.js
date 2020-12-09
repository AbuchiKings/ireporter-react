import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { } from 'react-icons/ti';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="flex-container">
                <div className="footer-about">
                    <h5>About <Link to="/">i<span>Reporter</span></Link></h5>
                    <p>
                        We are a non-governmental organization commited to
                        improving human welfare and advocacy. Given the
                        widespread corruption and human rights abuse within
                        Africa, we believe a reduction in such vices can be
                        achieved by improving human welfare through education,
                        health, gender equality and supporting small businesses
                        while mentaining eco-stabilty.
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
                    <div className="subscribe-wrapper">
                        <input type="text" placeholder="Enter Email" />
                        <button className="btn btn-primary" disabled>Send</button>
                    </div>
                    <h6 className="follow-us">Connect with us</h6>
                    <ul>
                        <li><Link to="https://twitter.com/awesomekings" target="_blank" rel="noopener noreferrer" aria-labelledby="twitter-icon"><FaTwitter /></Link></li>
                        <li><Link to="https://github.com/Abuchikings" target="_blank" rel="noopener noreferrer" aria-labelledby="github-icon"><FaGithub /></Link></li>
                        <li><Link to="https://linkedin.com/in/ndinigwe-abuchi" target="_blank" rel="noopener noreferrer" aria-labelledby="linkedin-icon"><FaLinkedin /></Link></li>
                        <li><Link to="https://wa.me/+2348062158380" target="_blank" rel="noopener noreferrer" aria-labelledby="whatsapp-icon"><FaWhatsapp /></Link></li>
                    </ul>
                </div>



            </div>
            <small>
                Copyright &copy; 2020 All rights reserved | Made by
                <span><Link to="https://github.com/Abuchikings" target="_blank" rel="noopener noreferrer">  Abuchi Kingsley</Link></span>
            </small>

        </footer>
    )
}

export default Footer
