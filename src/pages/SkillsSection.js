import React from 'react';
import Huge from '../components/Huge';
import Content from '../components/Content';
function SkillsSection(props) {
	return(
		<div id="skills" className="homelayout">
			<Huge  subTitle={props.subTitle} />
			<Content>
				<p> Skills here </p>
			</Content>
		</div>
	
	);
}

export default SkillsSection;