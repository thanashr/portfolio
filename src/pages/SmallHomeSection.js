import React from 'react';
import Huge from '../components/Huge';
import HugeHome from '../components/HugeHome';
function SmallHomeSection(props) {
	return( 
		<div id = "home" className="smallhomelayout  homecolour" 

			>
		<Huge  subTitle={props.message} />
			<HugeHome title={props.title} subTitle={props.subTitle} text = {props.text}/>			
		</div>
	);
}

export default SmallHomeSection;