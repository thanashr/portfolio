import React from 'react';
import Huge from '../components/Huge';
import Content from '../components/Content';
function ProjectsSection(props) {
	return(
		<div id="projects" className="homelayout">
			<Huge  subTitle={props.subTitle} />
			<Content>
				<p> Projects here </p>
			</Content>
		</div>
	
	);
}

export default ProjectsSection;