import React from 'react';
import HugeHome from '../components/HugeHome';
function HomeSection(props) {
	return( 
		<div id = "home" className="homelayout  homecolour" >
			<HugeHome title={props.title} subTitle={props.subTitle} text = {props.text}/>			
		</div>
	);
}

export default HomeSection;