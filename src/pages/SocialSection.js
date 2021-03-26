import React from 'react';
import Huge from '../components/Huge';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
function SocialSection(props) {
	return(
		<div id="social" className="mainlayout">
			<Huge  subTitle={props.subTitle} />
			<p className = "edu_sub ml-5 mt-5 intro font-weight-LIGHT"><small>Alone we can do little,
			together we can do so much! I strongly believe that every child deserves a holistic education
			and every individual should live at peace. I love volunteering to impact lives positively.</small></p> 
			
			<Container fluid= {true}>							
				<Row className = " text-justify ml-2">
					<Col className = "edu_col">
							<a href="https://www.uandi.org.in/" className="uandi_link" >
							<p className = "edu ml-2 mt-5  intro  font-weight-LIGHT">Teaching Volunteer<small> - U & I, India.</small></p></a>
							<p className="  ml-5  lead edu_sub font-weight-light text-justify"><small>Felt 
							delighted to volunteer at U & I’s after-school learning program that invests in children from underprivileged 
							backgrounds with courses in English, Math, Science and engagements  through science camps, field trips, art 
							workshops and career building workshops, in order to build their learning and 
							confidence. The goal is to give every student the opportunity to shine in the classroom - and beyond.</small></p>
					</Col>
					<Col className = "exp_img_col" >
						<a href="https://www.uandi.org.in/" className="uandi_link" >
							<figure className="ml-5 mt-5">
								<img alt="U&I"
									src={require("../images/uandi.jpeg")}
									style={{ width: 110, height: 110, borderRadius: 170/ 2}}
									fluid
								/>              
							</figure>  
						</a>
					</Col>
				</Row>
				
				<Row className = " text-justify ml-2">
					<Col className = "edu_col">
							<a href="https://nss.gov.in/" className="a_edu" >
							<p className = "edu ml-2 mt-5  intro  font-weight-LIGHT">Volunteer<small>- NSS, India.</small></p></a>
							<p className=" ml-5  lead edu_sub font-weight-LIGHT text-justify"><small>Volunteered at the 
							National Service Scheme (NSS), a Central Sector Scheme of the Government of India, Ministry of Youth
							Affairs & Sports which provides hands on experience to young students in delivering community service
							to the rural people in their locality.</small></p>						
					</Col>
					
					<Col className = "exp_img_col">
						<a href="https://nss.gov.in/" className="nss_link" >
							<figure className="ml-5 mt-5">
								<img alt="NSS"
									src={require("../images/nss.png")}
									style={{ width: 110, height: 110, borderRadius: 110/ 2}}
									fluid
								/>              
							</figure>  
						</a>
					</Col>
				</Row>
				
				
						<Row className = "text-justify ml-2">
					<Col  className = "edu_col a_edu">
							<p className = "edu ml-2 mt-5  intro  font-weight-LIGHT">Communities</p>
										<ul className=" exp_list  ">
									<li className="skill_list ml-lg-5   font-weight-LIGHT"><small>Society of Women Engineers</small> </li>
									<li className="skill_list ml-lg-5   font-weight-LIGHT"><small>CodePath</small> </li>
									<li className="skill_list ml-lg-5   font-weight-LIGHT"><small> Women Who Code</small> </li>									
								</ul>		
					</Col>
					
			
				</Row>
			</Container>
		</div>
	
	);
}

export default SocialSection;