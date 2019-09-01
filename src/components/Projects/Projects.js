import React from 'react';
import "./Projects.css";
import bootstrap from "../../assets/bootstrap.png";
import html5 from "../../assets/html5.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import reactjs from "../../assets/reactjs.png";
import heroku from "../../assets/heroku.png";

const Projects = (props) => {
	return (
		<div className="projects-container">
			<div className="projects-wrapper">
				<span id="projects-title">Projects</span>
				<p className="projects-body" id="style-7">
					<div className="project-box">
						<div>
							<img src={html5}/> 
						</div>	
					</div>
					<div className="project-box">
						<div>
							<img src={css} />
						</div>				
					</div>
					<div className="project-box">
						<div>
							<img src={js}/>					
						</div>				
					</div>
					<div className="project-box">
						<div>		
							<img src={bootstrap} />
						</div>		
					</div>
					<div className="project-box">
						<div>	
							<img src={reactjs}/>
						</div>		
					</div>
					<div className="project-box">
						<div>						
							<img src={heroku}/>
						</div>			
					</div>
				</p>	
			</div>
		</div>
		)
}

export default Projects;