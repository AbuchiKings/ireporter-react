import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import protestImg from '../images/sa.jpg'
import { FaSistrix, FaTabletAlt, FaPaperPlane, FaAt } from 'react-icons/fa';
import { reviews, causes } from '../data/data';

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
                            <div className="about-div">
                                <h2>Who we are</h2>
                                <p>We are a non-governmental organization commited
                                to improving human welfare and advocacy.
                            </p>
                            </div>
                            <div className="mv-div">
                                <div className="m-div">
                                    <h3>Mission</h3>
                                    <p>To end all forms of corruption, human deprivation,
                                    human rights abuse, oppression and inequality.
                                </p>
                                </div>
                                <div className="v-div">
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
                        <div>
                            <h2>Our Causes</h2>
                            <div className="flex-div">
                                {causes.map((c, idx) => {
                                    return (
                                        <div className="img-div" key={idx + 1}>
                                            <div className="txt-div"><span>{c.text}</span></div>
                                            <img src={c.img} alt={c.text} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                    <section className="h-div-md3">
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
                            <div className="img-div">
                                <div></div>
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
                        </div>
                    </section>
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
                        <div className="flex-div">
                            <div className="donate">
                                <span>Donate</span>
                            </div>
                            <div className="involve">
                                <p>Have any ideas you'd like to share with us?</p>
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
