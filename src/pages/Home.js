import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import protestImg from '../images/sa.jpg'




const Home = () => {
    return (
        <>
            <Header></Header>
            <main className="h-main">
                <div className="h-main-page">
                    <section className="h-div-tp intro">
                        <div className="intro-txt-div">
                            <h2>
                            See a societal situation in need of change?
                            </h2>
                        </div>
                        <div className="intro-img-div">
                            <img src={protestImg} alt="" />
                        </div>
                    </section>
                    <div className="clear"></div>
                    <section className="h-div-md"></section>
                    <div className="h-div-bt"></div>
                </div>
            </main>



        </>
    );
}

export default Home;
