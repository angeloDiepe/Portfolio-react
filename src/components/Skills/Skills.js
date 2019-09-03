import React from 'react';
import "./Skills.css";
import bootstrap from "../../assets/bootstrap.png";
import html5 from "../../assets/html5.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import reactjs from "../../assets/reactjs.png";
import redux from "../../assets/redux.png";
import ajax from "../../assets/ajax.png";
import postresql from "../../assets/postresql.png";
import mysql from "../../assets/mysql.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import heroku from "../../assets/heroku.png";
import linux from "../../assets/linux.png";
import nodejs from "../../assets/nodejs.png";

const Skills = (props) => {
	let Particle = React.createElement(props.children.type,Object.assign({},props.children.props,{className:"particle-skills"}),props.children.props.children);
	console.log(Particle)
	return (
		<div className="skills-container">
			<div className="skills-wrapper">
			{Particle}
				<span id="skills-title">Skills</span>
				<div className="skills-body">
					<div>
						<img src={html5}/> 
					</div>	
					<div>
						<img src={css} />
					</div>				
					<div>
						<img src={js}/>					
					</div>				
					<div>		
						<img src={bootstrap} />
					</div>		
					<div>	
						<img src={reactjs}/>
					</div>		
					<div>						
						<img src={redux} id="redux"/>
					</div>			
					<div>						
						<img src={ajax} id="ajax"/>
					</div>				
					<div>		
						<img src={postresql} />
					</div>
					<div>	
						<img src={mysql}/>
					</div>				
					<div>	
					<img src={git} id="git" />
					</div>				
					<div>	
						<img src={github} />
					</div>				
					<div>	
						<img src={heroku} />
					</div>			
					<div>	
						<img src={linux}/>
					</div>				
					<div  id="nodejs">	
						<img src={nodejs} width="100px" />
					</div>	
				</div>	
			</div>
		</div>
		)
}

export default Skills;