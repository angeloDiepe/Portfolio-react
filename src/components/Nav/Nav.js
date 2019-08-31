import React,{useEffect} from 'react';
import "./Nav.css";
import imgLogo from "../../assets/logo.png";

const Nav = (props) => {
	const showNav = () =>{
		let navListWrapper = document.querySelector(".nav-list-wrapper");
		let hamburger = document.querySelector(".hamburger");

		navListWrapper.classList.toggle("open");
		Array.from(navListWrapper.children).forEach(li => li.classList.toggle("fade"))
		Array.from(hamburger.children).forEach(span => span.classList.toggle("open-hamburger"))
	}
/*	useEffect(() => {
			let hamburger = document.querySelector("#hamburger");
			console.log(hamburger)
	}, [])*/
	return (
		<div className="nav-container">
			<div id="nav-logo-wrapper">
				<img src={imgLogo} alt="logo" id="nav-logo"/>
			</div>
			<div className="hamburger"	onClick={()=>showNav()} >
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className="nav-list-wrapper">
				<li className="nav-list-item"><a href="#"className="nav-link-item">Me</a></li>
				<li className="nav-list-item"><a href="#" className="nav-link-item">Desc</a></li>
				<li className="nav-list-item"><a href="#" className="nav-link-item">Skills</a></li>
				<li className="nav-list-item"><a href="#" className="nav-link-item">Projects</a></li>
				<li className="nav-list-item"><a href="#" className="nav-link-item">Contacts</a></li>
			</ul>
		</div>
		)
}

export default Nav;