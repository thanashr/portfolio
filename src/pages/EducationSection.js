import React from 'react';
import Huge from '../components/Huge';
import Carousel from '../components/Carousel';
function EducationSection(props) {
	return(
		<div id = "education" className="homelayout  homecolour" >
			<Huge  subTitle={props.subTitle} />
			
		</div>
	);
}

export default EducationSection;