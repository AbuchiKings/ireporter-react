import React from 'react';
import Title from './Title';
import { GoBroadcast } from "react-icons/go";
import { FaCoins } from "react-icons/fa";
import { TiDeviceDesktop } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Offers() {

    const offers = [
        {
            icon: <TiDeviceDesktop />,
            title: "Online Registration",
            info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore libero, dolor vitae, deserunt quod illo provident 
            a laboriosam dignissimos excepturi illum neque. Provident 
            illo dicta quaerat excepturi, magnam corrupti totam!`
        },
        {
            icon: <GoBroadcast />,
            title: "Event Promotion",
            info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore libero, dolor vitae, deserunt quod illo provident 
            a laboriosam dignissimos excepturi illum neque. Provident 
            illo dicta quaerat excepturi, magnam corrupti totam!`
        },
        {
            icon: <FaCoins />,
            title: "Bookings and Payments",
            info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore libero, dolor vitae, deserunt quod illo provident 
            a laboriosam dignissimos excepturi illum neque. Provident 
            illo dicta quaerat excepturi, magnam corrupti totam!`
        }
    ]


    return (
        <section className="offers-section">
            <div className="offers-first">
                <Title title="What we offer" />
                <div className="offers-center">
                    {offers.map((item, i) => {
                        return (
                            <article key={i} className="offer">
                                <span>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}

                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                </div>
            </div>
            <div className="offers-text">
                <h3>Why us?</h3>
                <p>
                    With our ulimited connection, you get access to millions of potential attendees.
                    Not just anybody, but the target aundience that are most relevant to you. We have
                    perfected the technology of targeted marketing. <Link to="/">Get started</Link> today
                    and take advatage of these amazing offers.
                </p>
            </div>

        </section>
    )
}

export default Offers
