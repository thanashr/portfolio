import React from 'react';
import Huge from '../components/Huge';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
function ExperienceSection(props) {
	return(
		<div id="experience" className="explayout">
			<Huge  subTitle={props.subTitle} />
			<Container fluid= {true}>
							
				<Row className = "text-justify ml-2">
					<Col md = {7} sm={7} className = "edu_col">
						<a href="https://www.accenture.com/in-en/about/company/accenture-innovation-hub-bengaluru" className="acc_link" >
						<p className = "edu ml-4 mt-4  intro  font-weight-LIGHT">Accenture<small> - Bangalore, India. (2019)</small></p></a>
						<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Graduate Student Internship</small></p> 
						<p className="p-lg-0 ml-4 lead font-weight-light"><small><b><i>Project Title:</i></b> Accenture Enterprise Services for Health (AESh)</small></p>
						<p className="p-lg-0 ml-4 lead font-weight-light"><small><b><i>Project Details:</i></b></small></p>
					</Col>
					<Col md = {3} sm={3}>
						<a href="https://www.accenture.com/in-en/about/company/accenture-innovation-hub-bengaluru" className="menus a" >
							<figure className="ml-0 mt-2">
								<img
									src={require("../images/accenture_tech.jpg")}
									style={{ width: 200, height: 130 }}
									fluid
								/>              
							</figure>  
						</a>
					</Col>
				</Row>
				<Row className = "text-justify ml-2">
					<Col md = {10} sm={7} className = "edu_col">
						<ul className="ml-2 exp_list  ">
							<li className="exp_list ml-5 mt-0"><small>Explored Robotic Process Automation(RPA) tools - Blueprism and UIPath
							hands-on by developing real time use cases.</small> </li>
							<li className="exp_list ml-5 mt-0"><small>Elaborated my experience by automating the user's purchase experience on websites like, Amazon.com and Walmart.com.</small> </li>
							<li className="exp_list ml-5 mt-0"><small> Also engaged with the AESh team which helped me get involved in, be enthusiastic about and committed to my work.</small></li>
						</ul>
					</Col>				
				</Row>
				<p className=" ml-5 mt-0 lead deliv font-weight-light text-justify"><small><b><i>Deliverable:</i></b> Successfully 
				automated Oracle Cloud Application to generate ERP services (generating purchases, invoices ,receipts 
				and updating on the availability of goods) to the users.</small></p>
				<Row className = "text-justify ml-2">
					<Col md = {7} sm={7} className = "edu_col">
							<a href="https://www.accenture.com/in-en/about/company/accenture-innovation-hub-bengaluru" className="amr_edu" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">AES Technologies<small> - India. (2017)</small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Internship</small></p> 
							<p className="p-lg-0 ml-4 lead font-weight-light"><small><b><i>Project Title:</i></b> Cafeteria Management Application</small></p>
							<p className="p-lg-0 ml-4 lead font-weight-light"><small><b><i>Project Details:</i></b></small></p>
					</Col>
					<Col md = {3} sm={3}>
						<a href="https://www.advanceecomsolutions.com/" className="menus a" >
							<figure className="ml-0 mt-5">
								<img
									src={require("../images/aes.png")}
									style={{ width: 150, height: 70 }}
									fluid
								/>              
							</figure>  
						</a>
					</Col>
				</Row>
				<Row className = "text-justify ml-2">
					<Col md = {10} sm={7} className = "edu_col">
						<ul className="ml-2 exp_list  ">
							<li className="exp_list ml-5 mt-0"><small> Stepped into the world of Web development and played with
							CSS styling , HTML tags and Javascript during the internship.
							</small> </li>							
						</ul>
					</Col>				
				</Row>
				<p className=" ml-5 mt-0 lead deliv font-weight-light text-justify"><small><b><i>Deliverable:</i></b> Built a Cafeteria
				Management system for students in an organization which allows transactions with card points stored in the Oracle cloud 
				and it also displays each day's menu in real time.</small></p>
			</Container>
		</div>
	
	);
}

export default ExperienceSection;