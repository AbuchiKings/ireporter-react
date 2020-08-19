
// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import { FaAlignJustify } from 'react-icons/fa';
// import { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';


// export default function Navbar(props) {
//     const [displayAppName, setDisplayAppName] = useState(false)
//     const [isOpen, setIsOpen] = useState(false);
//     const navRef = useRef(null);
//     console.log('Navbar re-rendered')
    
//     useEffect(() => {
//         const stickyNavbar = () => {
//             const navbar = navRef.current;
//             if (navbar && props.pathname === '/') {
//                 let navOffsetTop = navRef.current.offsetTop;
//                 if (window.pageYOffset > navOffsetTop) {
//                     navbar.classList.add("sticky");
//                     setDisplayAppName(true);
//                 } else {
//                     navbar.classList.remove("sticky");
//                     setDisplayAppName(false);

//                 }
//             }

//         }
//         window.addEventListener('scroll', stickyNavbar);
//         return () => {
//             window.removeEventListener('scroll', stickyNavbar)
//         }
//     }, [props.pathname])

//     const handleToggle = () => {

//         setIsOpen(!isOpen)
//     }

//     return (
//         <nav className={props.classes} ref={navRef}>
//             <div className="nav-header">

//                 <p className={props.displayNav ||
//                     displayAppName ? "nav-logo logo" : "logo"}>
//                     <NavLink exact to="/">tech<span className="roseRed">Events</span></NavLink>
//                 </p>
//                 <button type="button" className="nav-btn" onClick={handleToggle}>
//                     <FaAlignJustify className="nav-icon" />
//                 </button>

//             </div>
//             <div className={isOpen ?
//                 "nav-div show-nav" : "nav-div"}>
//                 <ul>

//                     <li className="nav-links">
//                         <NavLink to="/" activeClassName="active" exact>Home</NavLink>
//                     </li>
//                     <li className="nav-links">
//                         <NavLink to="/events" activeClassName="active" exact>Events</NavLink>
//                     </li>
//                     <li className="nav-links">
//                         <NavLink to="/create-event" activeClassName="active">Create Event</NavLink>
//                     </li>
//                     <li className="nav-links">
//                         <NavLink to="/auth/login" activeClassName="active">Sign In</NavLink>
//                     </li>

//                 </ul>
//             </div>

//         </nav>
//     )

// }

// Navbar.propTypes = {
//     classes: PropTypes.string.isRequired,
//     pathname: PropTypes.string.isRequired
// }


// // import React, { Component } from 'react'
// // import { NavLink } from 'react-router-dom';
// // import { FaAlignJustify } from 'react-icons/fa';


// // export default class Navbar extends Component {

// //     state = {
// //         dispElements: false
// //     };
// //     navRef = React.createRef();



// //     componentDidMount() {
// //         console.log(this);
// //         var navbar = this.navRef.current;
// //         var sticky = this.navRef.current.offsetTop;

// //         const stickyNavbar = () => {
// //             console.log(sticky);
// //             if (window.pageYOffset >= sticky) {
// //                 navbar.classList.add("sticky");
// //                 this.setState({ dispElements: true });
// //             } else {
// //                 navbar.classList.remove("sticky");
// //                 this.setState({ dispElements: false });

// //             }

// //         }
// //         window.addEventListener('scroll', stickyNavbar);

// //     }


// //     render() {

// //         return (
// //             <nav className="navbar" ref={this.navRef}>
// //                 <div>

// //                     <p className={this.props.displayNav ||
// //                         this.state.dispElements ? "nav-logo logo" : "logo"}>
// //                         <NavLink exact to="/">tech<span className="roseRed">Events</span></NavLink>
// //                     </p>
// //                     <button>
// //                         <FaAlignJustify />
// //                     </button>

// //                 </div>

// //                 <ul>

// //                     <li className="nav-links">
// //                         <NavLink to="/" activeClassName="active">Home</NavLink>
// //                     </li>
// //                     <li className="nav-links">
// //                         <NavLink to="/events" activeClassName="active">Events</NavLink>
// //                     </li>
// //                     <li className="nav-links">
// //                         <NavLink to="/create-event" activeClassName="active">Create Event</NavLink>
// //                     </li>
// //                     <li className="nav-links">
// //                         <NavLink to="/auth/login" activeClassName="active">Sign In</NavLink>
// //                     </li>

// //                 </ul>
// //             </nav>
// //         )
// //     }
// // }

