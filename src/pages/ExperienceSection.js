import React from 'react';
import Huge from '../components/Huge';
import Content from '../components/Content';
function ExperienceSection(props) {
	return(
		<div id="experience" className="homelayout">
			<Huge  subTitle={props.subTitle} />
			<Content>
				<p> Exp here </p>
			</Content>
		</div>
	
	);
}

export default ExperienceSection;