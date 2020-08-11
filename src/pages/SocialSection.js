import React from 'react';
import Huge from '../components/Huge';
import Content from '../components/Content';
function SocialSection(props) {
	return(
		<div id="social" className="homelayout">
			<Huge  subTitle={props.subTitle} />
			<Content>
				<p> Social here </p>
			</Content>
		</div>
	
	);
}

export default SocialSection;