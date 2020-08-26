import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import protestImg from '../images/sa.jpg'
import { FaSistrix, FaTabletAlt, FaPaperPlane, FaAt } from 'react-icons/fa';
import reviews from '../data/reviews';
import plantImg from '../images/planet.jpg'

const Home = () => {
    const boardRef = useRef(null);
    const articleRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            setInView(() => {
                return isInView();
            });
        }

        window.addEventListener('scroll', scrollHandler);
        setInView(isInView());
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    const isInView = () => {
        if (boardRef.current && articleRef.current) {
            const boardRect = boardRef.current.getBoundingClientRect();
            return boardRect.top >= 0 && boardRect.top <= window.innerHeight - 250;
        }
        return false;
    }

    return (
        <>
            <Header></Header>
            <div className="bgr-div"></div>
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
                    <section className="h-div-md" >
                        <div className="board-wrapper" >
                            <div className="board">
                                <div className="header-top">
                                    <div className="name">
                                        <p >iReporter</p>
                                    </div>
                                    <div className="sistrix-div">
                                        <p><FaSistrix className="sistrix" /></p>
                                        <p>Profile</p>
                                        <p>H</p>
                                    </div>
                                </div>
                                <div className="board-main" ref={boardRef}>
                                    <div className="txt-div">
                                        <h4>How it works.</h4>
                                        <div className="lines"></div>
                                        <div className="lines"></div>
                                        <div className="lines"></div>
                                        <div className="lines"></div>
                                    </div>
                                    <div className="card-div">
                                        <article >
                                            <FaTabletAlt className="icon"></FaTabletAlt>
                                            <p className="txt">Sign up with your details.</p>
                                            <div className="line">
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                            </div>
                                        </article>

                                        <article className="card">
                                            <FaAt className="icon"></FaAt>
                                            <p className="txt"> Verify account with code sent to your email.</p>
                                            <div className="line">
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                            </div>
                                        </article>

                                        <article className="card">
                                            <FaPaperPlane className="icon"></FaPaperPlane>
                                            <p className="txt">Take-off!</p>
                                            <div className="line">
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                                <div className="lines"></div>
                                            </div>
                                        </article>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={inView ? "mission-statement inView" : "mission-statement"} ref={articleRef}>
                            <h2>Our mission</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil neque ad sequi culpa dicta non
                            voluptatem quas nam! Culpa autem sequi repellendus exercitationem atque dolorem nemo totam libero consequuntur.</p>
                        </div>
                    </section>
                    <section className="h-div-bt">
                        <div className="title-div">
                            <h2>Here's what they say about us.</h2>
                        </div>
                        <div className="slidershow middle">
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
                    </section>
                    <section className="lst">
                        <div></div>
                    </section>
                </div>
            </main>


        </>
    );
}

export default Home;
