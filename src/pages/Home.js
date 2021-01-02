// import React, { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import protestImg from '../images/sa.jpg'
import { reviews, causes } from '../data/data';

const Home = () => {

    return (
        <>
            <div className="bgr-div"></div>
            <main className="h-main">
                <div className="h-main-page">
                    <section className="h-div-tp intro">
                        <div className="intro-txt-div flex-item">
                            <h1>
                                See a societal situation in need of change?
                            </h1>
                            <h1 className="fnw-bold">Let us fix it.</h1>
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
                            <p>While we pride ourselves in our numbers, our core concerns are about
                            advocacy, sustainable growth and accountability.</p>
                            <div className="get-started">
                                <span>
                                    <Link to="/auth/sign-up">Join Us Today</Link>
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
                    <section className="h-div-md1" >
                        <div className="flex-div">
                            <div className="about-div" >
                                <h2>Who we are</h2>
                                <p>We are a non-governmental organization commited
                                to improving human welfare and advocacy.
                            </p>
                            </div>
                            <div className="mv-div">
                                <div className="m-div" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">
                                    <h3>Mission</h3>
                                    <p>To end all forms of corruption, human deprivation,
                                    human rights abuse, oppression and inequality.
                                </p>
                                </div>
                                <div className="v-div" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">
                                    <h3>Vision</h3>
                                    <p>To live in a world free of corruption. Where education
                                    and healthcare is affordable and accessible to any and everyone.
                                </p>
                                    <p>An end to human rights abuse, inequality and oppression.
                                </p>
                                    <p>A more accountable leadership.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="h-div-md2" >
                        <div >
                            <h2>Our Causes</h2>
                            <div className="flex-div">
                                {causes.map((c, idx) => {
                                    return (
                                        <div className="img-div" key={idx + 1} data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500" data-aos-mirror="true">
                                            <div className="txt-div" ><span>{c.text}</span></div>
                                            <img src={c.img} alt={c.text} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                    <section className="h-div-md3" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500" data-aos-mirror="true">
                        <div>
                            <div className="header-div">
                                <h2>Here is how it works</h2>
                            </div>
                            <div className="txt-div">
                                <ul>
                                    <li>Sign up with your details.</li>
                                    <li>Verify account with the code sent to your email.</li>
                                    <li>Start making a differnce.</li>
                                </ul>
                            </div>
                        </div>

                    </section>
                    <section className="h-div-bt">
                        <div className="title-div">
                            <h2>What they say about us.</h2>
                        </div>
                        <div className="middle">
                            <div className="img-div" data-aos="fade-right" data-aos-offset="70" data-aos-duration="1000" data-aos-mirror="true">
                                <div></div>
                            </div>
                            <div className="slidershow middle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-mirror="true">
                                <div className="navigation">
                                    <label htmlFor="rev0" className="bar" checked></label>
                                    <label htmlFor="rev1" className="bar" ></label>
                                    <label htmlFor="rev2" className="bar" ></label>
                                    <label htmlFor="rev3" className="bar" ></label>
                                    <label htmlFor="rev4" className="bar" ></label>
                                </div>
                                <div className="slides">
                                    {reviews.map((rev, idx) => {
                                        return (
                                            <input type="radio" name="rev" id={'rev' + idx++} key={idx} />
                                        )
                                    })}
                                    {reviews.map((review, idx) => {
                                        return (
                                            <div key={idx} className={idx === 0 ? 's1 slide' : 'slide'}>
                                                <article className="review">
                                                    <p> {review.comment}</p>
                                                    <div className="logo">
                                                        <span>{review.name}</span>
                                                        <span>{review.logo}</span>
                                                        {/* <img src={plantImg} alt="" /> */}
                                                    </div>

                                                </article>
                                            </div>
                                        )
                                    })}

                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="h-div-md" >
                    </section>

                    <section className="h-div-bt1">
                        <div className="flex-div">
                            <div className="donate">
                                <span>Donate</span>
                            </div>
                            <div className="involve">
                                <p>We are are always on the look-out for people
                                who are passionate about making changes that matter.
                                 </p>
                                <p>
                                    Have any ideas you'd like to share with us?
                                 </p>
                                <span>Get Involved</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>


        </>
    );
}

export default Home;
