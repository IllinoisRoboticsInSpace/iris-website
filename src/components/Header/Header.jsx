import React from 'react';
import { Link } from 'gatsby';

import './Header.css';

const Header = () => {
	return (
		<div id="Header" className="headerContainer">
			<Link to="/">
				<img className="headerLogo" src="iris-banner.png" alt="IRIS" />
			</Link>
			<li className="headerLinks">
				<Link to="about">
					<div className="headerLink">About</div>
				</Link>
				<Link to="people">
					<div className="peopleLink headerLink">People</div>
				</Link>
				<Link to="events">
					<div className="headerLink">Events</div>
				</Link>
				<Link to="contact">
					<div className="headerLink">Contact</div>
				</Link>
			</li>
		</div>
	);
};

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("Header").style.top = "0";
//   } else {
//     document.getElementById("Header").style.top = "-86px";
//   }
// }

export default Header;
