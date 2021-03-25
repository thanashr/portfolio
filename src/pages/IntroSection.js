import React from 'react';

import { FaEnvelope ,  FaLinkedin, FaGithub  } from "react-icons/fa";

function IntroSection(props) {
	return(
	    <div id="introduction" className="introlayout  text-center">
	     <figure className="sideFig" >
              <img alt="Mobile Profile"
                src={require("../images/profilenobg.png")}
                style={{ width: 160, height: 160, borderRadius: 200/ 2 }}
				fluid
              />             
            </figure>			
			<ul className=" mt-3 list-group introbar  ">
                  <li>THANA SHREE JEEVANANDAM</li>
			</ul>	
	        <ul className="  list-group">
				<li> <a className="mail introbar  "
						  href="mailto:thanashreej@gmail.com"
						  target="blank"
						  id="mail"
						  rel="noopener noreferrer"
					    >
							<FaEnvelope size={15}/>  thanashreej@gmail.com
						</a> 
				</li>
				<li>    <a className="mail introbar  "
						  href="mailto:thanashr@buffalo.edu"
						  target="blank"
						  id="mail"
						  rel="noopener noreferrer"
						 >
						<FaEnvelope size={15} />  thanashr@buffalo.edu
						</a> 
				</li>
					<li>    <a className="socialIcons introbar  "
						  href="https://www.linkedin.com/in/thanashree/"
						  target="_blank"
						  id="linkedin"
						  rel="noopener noreferrer"
					    >
							<FaLinkedin size={20} />
						</a>
				</li>
			    <li>    <a className="introlist socialIcons introbar  "
						  href="https://github.com/thanashr"
						  target="blank"
						  id="github"
						  rel="noopener noreferrer"
						>
							<FaGithub size={20} />
						</a>
				</li>
		
			</ul>
	
	    
    </div>
	
	
	
	
	);
}

export default IntroSection;