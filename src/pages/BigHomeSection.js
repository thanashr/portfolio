import React from 'react';
import Huge from '../components/Huge';
import HugeHome from '../components/HugeHome';
import Background from '../images/cover4.jpg';
function HomeSection(props) {
	return( 
		<div id = "home" className="bighomelayout  homecolour" 
style={{
              background: `url(${Background})`,
			  backgroundSize: "cover",
			  height: "100vh", 
			  
            }}
			>
		<Huge  subTitle={props.message} />
			<HugeHome title={props.title} subTitle={props.subTitle} text = {props.text}/>			
		</div>
	);
}

export default HomeSection;