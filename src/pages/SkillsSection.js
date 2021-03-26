import React from 'react';
import Huge from '../components/Huge';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
function SkillsSection(props) {
	return(
		<div id="skills" className="mainlayout">
			<Huge  subTitle={props.subTitle} />
			<Container fluid= {true}>							
				<Row className = "ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<p className = "edu_sub ml-5 mt-4 intro font-weight-LIGHT"><small><b><u>Programming languages</u></b></small></p>
								<ul className="ml-2 exp_list  ">
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Python</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Java</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Kotlin</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Solidity</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>JavaScript</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>HTML</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>CSS</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>R</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>SQL</small> </li>										
								</ul>
							<p className = "edu_sub ml-4 mt-5  intro font-weight-LIGHT"><small><b><u>Web technologies</u></b></small></p>
								<ul className="ml-2 exp_list  ">
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>ReactJS</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>XML</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>JSON</small> </li>									
								</ul>
							<p className = "edu_sub ml-4 mt-5  intro font-weight-LIGHT"><small><b><u>Software tools/ Libraries</u></b></small></p>
								<ul className="ml-2 exp_list  ">
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Android Studio</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Google Cloud Platform (GCP)</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Firebase</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Amazon Web Services (AWS)</small> </li>									
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>REST API</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>React-Native</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Material-UI</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Node.js</small> </li>										
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Bootstrap</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Blue Prism</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>UI Path</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Solr</small> </li>									
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Keras</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>TensorFlow</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Scikit-learn</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Hadoop</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Map reduce</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Spark</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Google charts</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Matplotlib</small> </li>										
								</ul>
							<p className = "edu_sub ml-4 mt-5  intro font-weight-LIGHT"><small><b><u>Software Frameworks</u></b></small></p>
								<ul className="ml-2 exp_list  ">
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Agile</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Scrum</small> </li>
								</ul>
							<p className = "edu_sub ml-4 mt-5  intro font-weight-LIGHT"><small><b><u>Version control</u></b></small></p>
								<ul className="ml-2 exp_list  ">
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>GIT</small> </li>																		
								</ul>
							<p className = "edu_sub ml-4 mt-5  intro font-weight-LIGHT"><small><b><u>Operating systems</u></b></small></p>
								<ul className="ml-2 exp_list  ">
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Linux</small> </li>
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>Windows</small> </li>	
									<li className="skill_list ml-lg-5 mt-0  font-weight-LIGHT"><small>MacOS</small> </li>										
								</ul>			
					</Col>				
				</Row>
			</Container>
		</div>
	
	);
}

export default SkillsSection;