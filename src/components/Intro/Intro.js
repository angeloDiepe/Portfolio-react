import React from 'react';
import "./Intro.css";
import Potrait from "../../assets/potrait.png";
import Resume from "../../assets/Diepe Angelo CV.pdf";

export default class Intro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: [ 
			 	"A FullStack Javascript Developer",
			 	"UI/UX Designer",
			 	"I Like Learning New Stuff and Challenges"

			],
			show: "",
			shallowCount:0,
			deepCount:0
		}
		this.reverse = false;
	}
	// ,()=>{
	// 		if (this.state.deepCount > this.state.text[this.state.shallowCount].length+5) {
	// 		this.setState({
	// 			show:"",
	// 			deepCount:0,
	// 			shallowCount:0,
	// 		})
	// 	}
	// 	}
	update(){
		let length = this.state.text[this.state.shallowCount].length+10;
		let shallowCount = this.state.shallowCount;
		let deepCount = this.state.deepCount;
		let tempText = this.state.text[shallowCount]
		let letter = tempText.charAt(deepCount)
		let newText = this.state.show + letter;
		let nextDcount = this.state.deepCount + 1;

		if( deepCount >= length ){
			let newText = this.state.show.split("");
			newText.splice((-1*(this.state.text[this.state.shallowCount].length-1))/10);
			newText = newText.join("");
			 this.setState({
			show:newText,
			},()=>{
				if (this.state.show === "" && this.state.shallowCount < 2) {
					 this.setState({
						shallowCount:this.state.shallowCount+1,
						deepCount:0
					})
				}else if(this.state.shallowCount === 2 && this.state.show === ""){
					 this.setState({shallowCount:0,deepCount:0})
				}
			})
		}
		else{
			 this.setState({
				show:newText,
				deepCount:nextDcount
			},)
		}
	}
	componentDidMount() {
		 this.typeTimer = setInterval(()=>
		 		this.update()
			,200)
		// let typewritter = document.querySelector("#typewritter");
		// let content = [ 
		// 	"A FullStack Javascript Developer",
		// 	"UI/UX Designer",
		// 	"I Like Learning New Stuff and Challenges"
		// ]
		// let count = 0;
		// let boolTimer = true;
		// let startPt = 0
		// let currentText = 0
		// let isTyping = true;
		// let tempText = content[0];
		// setInterval(()=>{ 
		// 	if(isTyping){
		// 		typewritter.innerHTML += content[currentText][startPt];
		// 		startPt++;
		// 		if (startPt >= content[currentText].length ) {
		// 			tempText = content[currentText];
		// 			currentText++
		// 			if(currentText < content.length){
		// 				startPt = 0;
		// 				isTyping = false;
		// 				count = 0;
		// 			}else{
		// 				currentText = 0;
		// 				startPt = 0;
		// 				isTyping = false;
		// 				count = 0;
		// 			}
		// 		}
		// 	}else{
		// 		count++
		// 	}
		// 	if (boolTimer || isTyping) {
		// 		typewritter.style.borderRight="1.5px solid #ccc"
		// 		boolTimer = false;
		// 	}else{
		// 		typewritter.style.borderRight = "none"
		// 		boolTimer = true;
		// 	}
		// 	if(count === 15){
		// 		isTyping = true
		// 	}else if(count > 5){
		// 		let i = (tempText.length-1)/10;
				
		// 		console.log(tempText.join(""))
		// 		typewritter.innerHTML = " "
		// 	}
		// },400)
	}

  componentWillUnmount(){
		clearInterval(this.typeTimer)
	}
	render() {
		return (
			<div className="intro-container">
				<div className="intro-wrapper">
					<img src={Potrait} alt="potrait" id="potrait"/>
					<div id="intro-text-resume-block">
						<p id="intro-text">Hello,I'm Angelo <br/><span id="typewritter" >{this.state.show}</span></p>
						<a href={Resume} id="download-resume">Get Resume</a>
					</div>
				</div>
		</div>
		);
	}
}
