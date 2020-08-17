import React from 'react';
import Huge from '../components/Huge';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
function EducationSection(props) {
	return(
		<div id = "education" className="homelayout  homecolour" >
			<Huge  subTitle={props.subTitle} />
			<Container fluid= {true}>
			<p className = "edu_sub ml-4 mt-4 intro font-weight-LIGHT"><small><u>2019 - Present</u></small></p>
				<Row className = "justify ">
					<Col md = {2} sm={6}>
						<a href="http://www.buffalo.edu/" className="menus a" >
						   <figure className="ml-3 mt-4">
								  <img
									src={require("../images/ub.png")}
									style={{ width: 140, height: 120, borderRadius: 150/ 2 }}
									fluid
								  />  
						 
							</figure>  
						</a>
					</Col>
					<Col md = {10} sm={10} className = "edu_col">
						<a href="http://www.buffalo.edu/" className="a_edu" >
						<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">University at Buffalo<small> - State University of New York</small></p></a>
						<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Master of Science - Computer Science</small></p>
						<p className="p-lg-1 ml-4 mt-0 lead font-weight-light">GPA: 3.6/4</p>
					</Col>
				</Row>
				<p className = "edu_sub ml-4 mt-5 intro font-weight-LIGHT"><small><u>2015 - 2019</u></small></p>
				<Row className = "justify ">
					<Col md = {2} sm={6}>
						<a href="https://www.amrita.edu/" className="menus a" >
							<figure className="ml-3 mt-4">
								  <img
									src={require("../images/amrita.png")}
									style={{ width: 140, height: 140, borderRadius: 160/ 2 }}
									fluid
								  />  
             
							</figure>  
						</a>
					</Col>
					<Col md = {10} sm={10} className = "edu_col">
						<a href="https://www.amrita.edu/" className="amr_edu" >
						<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Amrita Vishwa Vidhyapeetham<small> - India</small></p></a>
						<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Bachelor of Technology - Computer Science</small></p>
						<p className="p-lg-1 ml-4 mt-0 lead font-weight-light">GPA: 3.6/4</p>
					</Col>
				</Row>
			</Container>
			
		</div>
	);
}

export default EducationSection;