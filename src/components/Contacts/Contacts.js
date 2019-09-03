import React,{useEffect} from 'react';
import "./Contacts.css";
import imgSend from "../../assets/send.png";

const Contacts = (props) => {
	return (
		<div className="contact-container">
			<div className="contact-wrapper">
				<span id="contact-title">Let's Get in Touch</span>
				<div className="contact-body">
					<div className="contact-block-item">
						<span className="contact-label">Name</span>
						<input type="text" className="contact-input"/>
					</div>
					<div className="contact-block-item">
						<span className="contact-label">Email*</span>
						<input type="email" className="contact-input"/>
					</div>
					<div className="contact-block-item">
						<span className="contact-label">Message</span>
						<textarea className="contact-input"/>
					</div>
					<div className="contact-block-item">
						<button id="send"><img src={imgSend} alt="send"/></button>
					</div>
				</div>	
			</div>
			<footer id="gen-footer">&copy; Angelo Diepe _2019</footer>
		</div>
		)
}

export default Contacts;