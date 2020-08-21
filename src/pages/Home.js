import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import protestImg from '../images/sa.jpg'
import { FaSistrix } from 'react-icons/fa';




const Home = () => {
    return (
        <>
            <Header></Header>
            <main className="h-main">
                <div className="h-main-page">
                    <section className="h-div-tp intro">
                        <div className="intro-txt-div flex-item">
                            <h2>
                                See a societal situation in need of change?
                            </h2>
                            <h2 className="fnw-bold">Let us fix it.</h2>
                            <div className="stats">
                                <div className="t-reports ">
                                    <span>Total Reports</span>
                                    <br />
                                    <span> 2564</span>
                                </div>
                                <div className="r-reports">
                                    <span>Resolved</span>
                                    <br />
                                    <span>2431</span>
                                </div>

                            </div>
                            <p>While we pride ourselves in our numbers, our core concerns are about changing lives, growth and sustainability.</p>
                            <div className="get-started">
                                <span>
                                    <Link to="/auth/sign-up">Get Started</Link>
                                </span>
                            </div>
                            <div className="pr-info">
                                <p>We understand the need for safety, which means:</p>
                                <div className="pr-list">
                                    <div><span>We take the privacy of our users seriously.</span></div>
                                    <div><span>Your anonymity is always protected.</span></div>
                                    <div><span>Our security infracstructure adhere to recomended standards. </span></div>
                                    <div><span>You control your data.</span></div>
                                </div>
                            </div>

                        </div>

                        <div className="intro-img-div flex-item">
                            <img src={protestImg} alt="" />
                        </div>
                    </section>
                    <div className="clear"></div>
                    <section className="h-div-md">
                        <div className="board-wrapper">
                            <div className="board">
                                <div className="header-top">
                                    <div className="name">
                                        <p >iReporter</p>
                                    </div>
                                    <div>
                                        <FaSistrix />
                                        <p></p>
                                    </div>
                                </div>
                                <div className="board-main">
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="h-div-bt"></div>
                </div>
            </main>


        </>
    );
}

export default Home;
