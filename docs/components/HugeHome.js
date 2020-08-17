import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
function HugeHome(props) {
	return(
		<Jumbotron className=" bg-transparent jumbotron-fluid p-0">
			<Container fluid= {true}>
				<Row className = "justify-content-center ">
					<Col md = {10} sm={12}>
<h1 className = " p-lg-5 mt-5  intro  font-weight-LIGHT"><small>I'm </small>Thana Shree Jeevanandam <small>and I think and work outside the </small>Brackets!</h1>

						 <h3 className=" lead font-weight-light"> I am a budding tech enthusiast currently pursuing my masters in Computer 
 Science at the University at Buffalo. I have had experiences in differently sized corporate environments through my internships.</h3>
<h3 className=" lead font-weight-light"> Things I have been excited about lately are React,
 Android development and Blockchain!  </h3>
 <h3 className=" lead font-weight-light">  "If you want to leave your footprints on the sands of time, do not drag your feet" - by Dr. A.P.J. Abdul Kalam, is the string 
which motivates me to triumph.  </h3>

					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);}

export default HugeHome;

 







