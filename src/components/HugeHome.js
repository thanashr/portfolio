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

						 <h3 className="p-lg-5 lead font-weight-light">I'm a Computer Science graduate student and a budding woman technology enthusiast.</h3>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
	
}

export default HugeHome;